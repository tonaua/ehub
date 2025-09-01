export const metadata = {
  title: 'Systeemarchitectuur - Elektrisch Zeilen Hub',
}

export default function SysteemarchitectuurPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Systeemarchitectuur</h1>
      <p>
        Een solide systeemarchitectuur is essentieel voor betrouwbaarheid en veiligheid. Denk aan de plaatsing van componenten,
        koeling, monitoring en noodstop. Bouw het systeem modulair op zodat onderdelen later eenvoudig te vervangen of uit te breiden zijn.
      </p>
      <p>
        Zorg voor een duidelijk elektrisch schema met zekeringen, hoofdschakelaars en een Battery Management System (BMS). Gebruik
        kwaliteitskabels en waterdichte connectors. Overweeg redundantie waar mogelijk.
      </p>
    </div>
  )
}