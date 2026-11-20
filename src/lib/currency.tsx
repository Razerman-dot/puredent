/* eslint-disable react-refresh/only-export-components -- small module: provider, hook and helpers belong together */
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'

export type Currency = 'NGN' | 'XOF'

export const CURRENCIES: { code: Currency; symbol: string; label: string }[] = [
  { code: 'NGN', symbol: '₦', label: 'Naira' },
  { code: 'XOF', symbol: 'CFA', label: 'CFA Franc' },
]

/** ₦6,000 · 2,300 CFA — exact selling prices, no exchange-rate maths. */
export function formatPrice(amount: number, currency: Currency) {
  const n = amount.toLocaleString('en-US')
  return currency === 'NGN' ? `₦${n}` : `${n} CFA`
}

const KEY = 'puredent-currency'
const Ctx = createContext<{ currency: Currency; setCurrency: (c: Currency) => void }>({ currency: 'NGN', setCurrency: () => {} })

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, set] = useState<Currency>(() => {
    try {
      const saved = localStorage.getItem(KEY)
      return saved === 'XOF' || saved === 'NGN' ? saved : 'NGN'
    } catch {
      return 'NGN'
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem(KEY, currency)
    } catch {
      /* storage unavailable — keep in memory only */
    }
  }, [currency])
  const setCurrency = useCallback((c: Currency) => set(c), [])
  return <Ctx.Provider value={{ currency, setCurrency }}>{children}</Ctx.Provider>
}

export const useCurrency = () => useContext(Ctx)

/** Segmented NGN / CFA switch styled like the site's other tab controls. */
export function CurrencyToggle({ tone = 'light', className = '' }: { tone?: 'light' | 'dark'; className?: string }) {
  const { currency, setCurrency } = useCurrency()
  const dark = tone === 'dark'
  return (
    <div role="radiogroup" aria-label="Currency" className={`inline-flex border ${dark ? 'border-white/25' : 'border-line'} ${className}`}>
      {CURRENCIES.map((c) => {
        const active = c.code === currency
        return (
          <button
            key={c.code}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setCurrency(c.code)}
            className={`px-3.5 py-2 font-display text-[13px] font-bold transition-colors ${
              active
                ? dark
                  ? 'bg-white text-navy'
                  : 'bg-navy text-white'
                : dark
                  ? 'text-white/75 hover:text-white'
                  : 'text-slate hover:text-navy'
            }`}
          >
            <span aria-hidden>{c.symbol}</span> {c.code}
            <span className="sr-only"> — {c.label}</span>
          </button>
        )
      })}
    </div>
  )
}
