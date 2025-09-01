'use client'
import { useState } from 'react'
import products from '../../data/products.json'

export const metadata = {
  title: 'Producten - Elektrisch Zeilen Hub',
}

export default function ProductenPage() {
  const [query, setQuery] = useState('')
  const normalizedQuery = query.toLowerCase()
  const filtered = products.filter((p) =>
    [p.category, p.brand, p.name].some((field) =>
      field.toLowerCase().includes(normalizedQuery),
    ),
  )
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Producten</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Zoek op naam, merk of categorie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full md:w-1/2 px-3 py-2 border rounded-lg dark:border-gray-700"
        />
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product, idx) => (
          <div key={idx} className="border rounded-lg p-4 shadow-sm dark:border-gray-800">
            <h2 className="font-semibold">{product.brand} {product.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Categorie: {product.category}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Voltage: {product.voltage}V</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Vermogen: {product.power_kw} kW</p>
            {product.notes && <p className="mt-2">{product.notes}</p>}
            {product.links && product.links.length > 0 && (
              <div className="mt-2 space-y-1">
                {product.links.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                    {link.label || link.url}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}