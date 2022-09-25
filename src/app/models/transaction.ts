export interface TransactionInt {
  _id: string
  amount: string
  type: string
  name: { // Nested object with it’s own properties
    first: string
    last: string
  },
  company: string
  email: string
  phone: string
  address: string
}
