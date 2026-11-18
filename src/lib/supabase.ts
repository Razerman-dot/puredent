import type { SupabaseClient } from '@supabase/supabase-js'

/**
 * Only the public URL and the *anon* key belong in the browser. Row Level
 * Security (see supabase/schema.sql) limits the anon role to inserting
 * enquiries and reading published content. Never put the service-role key here.
 *
 * The client is loaded on demand so it never weighs down first page load.
 */
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

export const isBackendConfigured = Boolean(url && anonKey)

let client: Promise<SupabaseClient> | null = null
export function getSupabase(): Promise<SupabaseClient> | null {
  if (!isBackendConfigured) return null
  client ??= import('@supabase/supabase-js').then(({ createClient }) => createClient(url!, anonKey!))
  return client
}

export type FormTable = 'contact_enquiries' | 'purchase_enquiries' | 'newsletter_subscribers' | 'community_signups'

export type SubmitResult =
  | { status: 'sent' }
  | { status: 'offline' } // backend not configured — caller offers an email fallback
  | { status: 'error'; message: string }

export async function submitForm(table: FormTable, payload: Record<string, unknown>): Promise<SubmitResult> {
  const pending = getSupabase()
  if (!pending) return { status: 'offline' }
  try {
    const supabase = await pending
    const { error } = await supabase.from(table).insert({ ...payload, source_path: window.location.pathname })
    if (error) {
      // 23505 = unique violation (e.g. already subscribed) — treat as success for the visitor
      if (error.code === '23505') return { status: 'sent' }
      return { status: 'error', message: 'We could not send this right now. Please try again in a moment.' }
    }
    return { status: 'sent' }
  } catch {
    return { status: 'error', message: 'Network problem — check your connection and try again.' }
  }
}
