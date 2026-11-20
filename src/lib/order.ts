import { SITE } from '../data/site'
import { formatPrice, type Currency } from './currency'

export interface OrderDetails {
  name: string
  phone: string
  country: string
  city: string
  address: string
  product: string
  quantity: number
  unitPrice: number
  currency: Currency
  instructions: string
}

export function orderTotal(unitPrice: number, quantity: number) {
  return unitPrice * quantity
}

/** Plain-text WhatsApp message. *asterisks* render as bold inside WhatsApp. */
export function buildOrderMessage(o: OrderDetails) {
  return [
    '*NEW PUREDENT ORDER*',
    '',
    '*Customer Information:*',
    `Name: ${o.name}`,
    `Phone: ${o.phone}`,
    `Country: ${o.country}`,
    `Location: ${o.city}`,
    `Address: ${o.address}`,
    '',
    '*Order Details:*',
    `Product: ${o.product}`,
    `Quantity: ${o.quantity}`,
    `Unit Price: ${formatPrice(o.unitPrice, o.currency)}`,
    `Currency: ${o.currency}`,
    `Total Amount: ${formatPrice(orderTotal(o.unitPrice, o.quantity), o.currency)}`,
    '',
    '*Additional Instructions:*',
    o.instructions.trim() || 'None',
    '',
    'Thank you for choosing PureDent.',
  ].join('\n')
}

export function whatsappUrl(message: string) {
  return `${SITE.whatsappOrders}?text=${encodeURIComponent(message)}`
}
