export const metadata = {
  title: 'Routekaart - Elektrisch Zeilen Hub',
}

export default function RoutekaartPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Routekaart</h1>
      <p>
        De route naar een succesvolle conversie van diesel naar elektrisch begint met een goede planning. Stel een budget op, bepaal je
        gewenste vaargedrag en analyseer de huidige installatie. In deze gids worden de belangrijkste stappen beschreven:
      </p>
      <ol className="list-decimal ml-6 space-y-2">
        <li><strong>Ontwerp & berekeningen:</strong> Bepaal het benodigde asvermogen en de accucapaciteit. Houd rekening met laadtijd en autonomie.</li>
        <li><strong>Selectie van componenten:</strong> Kies een motor, regelaar, accu en lader die bij jouw boot en doelen passen.</li>
        <li><strong>Systeemarchitectuur:</strong> Ontwerp het elektrische schema, inclusief koeling, monitoring en beveiliging.</li>
        <li><strong>Installatie:</strong> Monteer de motor, plaats de accu’s en leg bedrading aan volgens de richtlijnen.</li>
        <li><strong>Testen & keur:</strong> Voer proefvaarten uit, stel noodprocedures op en regel de formele keuring.</li>
      </ol>
    </div>
  )
}