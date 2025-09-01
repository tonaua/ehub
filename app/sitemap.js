export default function sitemap() {
  const base = 'https://jouwdomein.nl'
  const now = new Date().toISOString()
  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/wiki/routekaart`, lastModified: now },
    { url: `${base}/wiki/berekeningen`, lastModified: now },
    { url: `${base}/wiki/accuchemie`, lastModified: now },
    { url: `${base}/wiki/systeemarchitectuur`, lastModified: now },
    { url: `${base}/producten`, lastModified: now },
    { url: `${base}/downloads`, lastModified: now },
    { url: `${base}/cases`, lastModified: now },
    { url: `${base}/over`, lastModified: now },
  ]
}