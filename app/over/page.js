export const metadata = {
  title: 'Over - Elektrisch Zeilen Hub',
}

export default function OverPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Over deze site</h1>
      <p>
        De Elektrisch Zeilen Hub is een initiatief van enthousiaste watersporters die hun kennis en ervaringen willen delen met anderen
        die de overstap maken naar elektrische voortstuwing. We verzamelen informatie, producten en praktijkvoorbeelden om jouw project
        makkelijker te maken.
      </p>
      <p>
        Heb je suggesties, aanvullingen of wil je een case delen? Neem gerust contact met ons op via het contactformulier of stuur een mail naar
        <a href="mailto:info@elektrisch-zeilen-hub.nl" className="text-blue-600 hover:underline">info@elektrisch-zeilen-hub.nl</a>.
      </p>
    </div>
  )
}