export const metadata = {
  title: 'Accuchemie - Elektrisch Zeilen Hub',
}

export default function AccuchemiePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Accuchemie</h1>
      <p>
        Er zijn verschillende accutechnologieën beschikbaar voor elektrische vaart. Lithium-ijzerfosfaat (LiFePO<sub>4</sub>) is populair door de hoge
        energiedichtheid en veiligheid, maar AGM en GEL zijn ook nog steeds bruikbaar. Vergelijk de eigenschappen om de juiste keuze te maken.
      </p>
      <table className="table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-3 py-2">Type</th>
            <th className="border px-3 py-2">Energiedichtheid</th>
            <th className="border px-3 py-2">Veiligheid</th>
            <th className="border px-3 py-2">Cycle life</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-3 py-2">LiFePO<sub>4</sub></td>
            <td className="border px-3 py-2">Hoog</td>
            <td className="border px-3 py-2">Zeer goed</td>
            <td className="border px-3 py-2">&gt; 3000</td>
          </tr>
          <tr>
            <td className="border px-3 py-2">AGM</td>
            <td className="border px-3 py-2">Midden</td>
            <td className="border px-3 py-2">Goed</td>
            <td className="border px-3 py-2">500–800</td>
          </tr>
          <tr>
            <td className="border px-3 py-2">GEL</td>
            <td className="border px-3 py-2">Laag</td>
            <td className="border px-3 py-2">Goed</td>
            <td className="border px-3 py-2">700–1000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}