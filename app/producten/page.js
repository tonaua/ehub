import products from '../../data/products.json'
import ProductenClient from './ProductenClient'

export const metadata = {
  title: 'Producten - Elektrisch Zeilen Hub',
}

// This server component defines page-level metadata and delegates the interactive
// product listing to a client component. It avoids the `'use client'` directive
// here so that metadata can be exported. The products data is passed as a prop
// to the client component.
export default function ProductenPage() {
  return <ProductenClient products={products} />
}