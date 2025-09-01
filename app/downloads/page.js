import fs from 'fs'
import path from 'path'

export const metadata = {
  title: 'Downloads - Elektrisch Zeilen Hub',
}

export default function DownloadsPage() {
  const downloadsDir = path.join(process.cwd(), 'public', 'downloads')
  let files = []
  try {
    files = fs
      .readdirSync(downloadsDir)
      .filter((name) => !name.startsWith('.') && fs.statSync(path.join(downloadsDir, name)).isFile())
  } catch (err) {
    files = []
  }
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Downloads</h1>
      {files.length === 0 ? (
        <p>Er zijn momenteel geen bestanden beschikbaar.</p>
      ) : (
        <ul className="list-disc ml-6 space-y-2">
          {files.map((file) => (
            <li key={file}>
              <a href={`/downloads/${file}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {file}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}