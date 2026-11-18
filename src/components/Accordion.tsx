import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'

export interface AccordionItem {
  q: string
  a: string
}

export function Accordion({ items, defaultOpen = -1 }: { items: AccordionItem[]; defaultOpen?: number }) {
  const [open, setOpen] = useState<number>(defaultOpen)
  const id = useId()
  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q} className="border-b border-line">
            <h3>
              <button
                type="button"
                id={`${id}-b${i}`}
                aria-expanded={isOpen}
                aria-controls={`${id}-p${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span className={`font-display text-[17px] leading-snug font-bold transition-colors sm:text-lg ${isOpen ? 'text-ocean' : 'text-navy group-hover:text-ocean'}`}>
                  {item.q}
                </span>
                <span
                  className={`mt-0.5 flex size-7 shrink-0 items-center justify-center border transition-all duration-300 ${
                    isOpen ? 'border-ocean bg-ocean text-white' : 'border-line text-navy'
                  }`}
                  aria-hidden
                >
                  <Plus className={`size-4 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${id}-p${i}`}
                  role="region"
                  aria-labelledby={`${id}-b${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pr-12 pb-6 leading-relaxed text-slate">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
