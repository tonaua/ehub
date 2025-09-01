export const metadata = {
  title: 'Home - Elektrisch Zeilen Hub',
}

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="text-center py-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Welkom bij de Elektrisch Zeilen Hub</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Deze website is het startpunt voor iedereen die zijn zeiljacht van 30–38 ft wil ombouwen van diesel naar elektrisch. Ontdek de
          kennisbank, blader door producten en download handleidingen om jouw project te starten.
        </p>
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        <div className="p-6 border rounded-lg shadow-sm dark:border-gray-800">
          <h3 className="font-semibold text-xl mb-2">Kennisbank</h3>
          <p>Leer alles over ontwerp, berekeningen, accuchemie en systeemarchitectuur voor jouw elektrische aandrijving.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm dark:border-gray-800">
          <h3 className="font-semibold text-xl mb-2">Producten</h3>
          <p>Vind motoren, accu’s, laders en accessoires. Filters helpen je snel het juiste component te vinden.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm dark:border-gray-800">
          <h3 className="font-semibold text-xl mb-2">Downloads</h3>
          <p>Bekijk handleidingen, datasheets en checklists. Alles wat je nodig hebt om te installeren en testen.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm dark:border-gray-800">
          <h3 className="font-semibold text-xl mb-2">Cases 30–38 ft</h3>
          <p>Lees verhalen van andere jacht-eigenaren die de overstap maakten. Leer van hun ervaringen en bekijk schema’s.</p>
        </div>
      </section>
    </div>
  )
}