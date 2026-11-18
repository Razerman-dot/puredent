import { useState, type ChangeEvent, type FormEvent } from 'react'
import { submitForm, type FormTable } from '../../lib/supabase'

export type Values = Record<string, string>
export type Rules<V extends Values> = Partial<Record<keyof V, (value: string, all: V) => string | undefined>>
export type Status = 'idle' | 'submitting' | 'sent' | 'offline' | 'error'

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export const required = (label: string) => (v: string) => (v.trim() ? undefined : `Please enter your ${label}.`)
export const email = (v: string) =>
  !v.trim() ? 'Please enter your email address.' : EMAIL_RE.test(v.trim()) ? undefined : 'Please enter a valid email address, e.g. name@example.com.'
export const minLen = (n: number, label: string) => (v: string) =>
  v.trim().length >= n ? undefined : `Your ${label} should be at least ${n} characters.`

export function useForm<V extends Values>(table: FormTable, initial: V, rules: Rules<V>) {
  const [values, setValues] = useState<V>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof V, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof V, boolean>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')

  const validateField = (name: keyof V, v: V) => rules[name]?.(v[name], v)

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = e.target.name as keyof V
    const next = { ...values, [name]: e.target.value }
    setValues(next)
    if (touched[name]) setErrors((er) => ({ ...er, [name]: validateField(name, next) }))
  }

  const onBlur = (e: { target: { name: string } }) => {
    const name = e.target.name as keyof V
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors((er) => ({ ...er, [name]: validateField(name, values) }))
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const all: Partial<Record<keyof V, string>> = {}
    for (const key of Object.keys(rules) as (keyof V)[]) {
      const err = validateField(key, values)
      if (err) all[key] = err
    }
    setErrors(all)
    setTouched(Object.fromEntries(Object.keys(values).map((k) => [k, true])) as Partial<Record<keyof V, boolean>>)
    const firstInvalid = Object.keys(all)[0]
    if (firstInvalid) {
      e.currentTarget.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }
    if (honeypot) {
      setStatus('sent') // silently drop bots
      return
    }
    setStatus('submitting')
    const trimmed = Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.trim()]))
    const res = await submitForm(table, trimmed)
    setStatus(res.status)
    setMessage(res.status === 'error' ? res.message : '')
  }

  const reset = () => {
    setValues(initial)
    setErrors({})
    setTouched({})
    setStatus('idle')
  }

  const field = (name: keyof V & string) => ({
    name,
    value: values[name],
    onChange,
    onBlur,
    error: errors[name],
  })

  return { values, errors, status, message, onSubmit, field, reset, honeypot: { value: honeypot, onChange: setHoneypot } }
}
