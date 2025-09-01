export const metadata = {
  title: 'Berekeningen - Elektrisch Zeilen Hub',
}

export default function BerekeningenPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Berekeningen</h1>
      <p>
        Om de juiste componenten te kiezen, moeten er een aantal belangrijke berekeningen worden gemaakt. Denk aan het benodigde vermogen,
        de accucapaciteit en de laadsnelheid. Hier beschrijven we de basisformules en geven we tips voor het dimensioneren van je systeem.
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Avermogen:</strong> Het vermogen (in kW) dat nodig is om de gewenste snelheid te halen. Dit hangt af van romp, gewicht en weerstand.</li>
        <li><strong>Accucapaciteit:</strong> Bereken de capaciteit (kWh) op basis van gewenste vaartijd en gemiddeld vermogen.</li>
        <li><strong>Laadtijd:</strong> De tijd die nodig is om de accu’s volledig op te laden, afhankelijk van de lader en walstroom.</li>
      </ul>
    </div>
  )
}