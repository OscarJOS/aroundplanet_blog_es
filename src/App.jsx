import { useState, useEffect } from 'react'
import TrackNavigation from './components/TrackNavigation'
import Blog from './components/Blog'
import RegionalOverview from './components/RegionalOverview'
import FastestExecutions from './components/FastestExecutions'
import SlowestExecutions from './components/SlowestExecutions'
import './App.css'

function App() {
  const [selectedCloud, setSelectedCloud] = useState('aws')
  const [selectedLanguage, setSelectedLanguage] = useState('go')
  const [showBlog, setShowBlog] = useState(false)
  const [avgData, setAvgData] = useState([])
  const [top3Data, setTop3Data] = useState([])
  const [last3Data, setLast3Data] = useState([])
  const [regionData, setRegionData] = useState([])

  useEffect(() => {
  fetch(`${process.env.PUBLIC_URL}/data/avg_total.json`)
    .then(res => res.json())
    .then(data => setAvgData(data))

  fetch(`${process.env.PUBLIC_URL}/data/top3.json`)
    .then(res => res.json())
    .then(data => setTop3Data(data.data))

  fetch(`${process.env.PUBLIC_URL}/data/last3.json`)
    .then(res => res.json())
    .then(data => setLast3Data(data.data))

  fetch(`${process.env.PUBLIC_URL}/data/region.json`)
    .then(res => res.json())
    .then(data => setRegionData(data.data))
}, [])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-4">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center md:gap-0">
          <h1 
            className="font-bold cursor-pointer hover:text-blue-600 transition-colors text-xl md:text-2xl text-center md:text-left"
            onClick={() => setShowBlog(false)}
            title="Return to main dashboard"
          >
            {showBlog ? 'Around Planet Blog' : 'Around Planet'}
          </h1>
          <div className="flex gap-3 justify-center md:justify-start">
            <button
              onClick={() => setShowBlog(false)}
              className={`px-4 py-2 text-sm font-medium rounded border transition-colors ${
                !showBlog 
                  ? 'bg-gray-400 text-black border-black' 
                  : 'bg-gray-200 text-black border-gray-400 hover:bg-gray-300'
              }`}
            >
              🏠 Dashboard
            </button>
            <button
              onClick={() => setShowBlog(true)}
              className={`px-4 py-2 text-sm font-medium rounded border transition-colors ${
                showBlog 
                  ? 'bg-gray-400 text-black border-black' 
                  : 'bg-gray-200 text-black border-gray-400 hover:bg-gray-300'
              }`}
            >
              📖 Blog
            </button>
          </div>
        </div>
      </header>

      {/* Show blog or main content */}
      {showBlog ? (
        <Blog />
      ) : (
        <div className="flex flex-col md:flex-row flex-1 gap-4 md:gap-0">
          <div className="w-full md:w-1/4 p-2 flex flex-col">
            <div className="text-sm text-gray-600 mb-4 md:mb-1">
              <p className="text-sm mb-2 md:text-xs md:mb-1">
                This dashboard has execution times across different cloud providers (AWS, Azure, GCP) and programming languages as data travels between global regions.
              </p>
              <p className="text-sm mb-2 md:text-xs md:mb-1">
                <strong>How to read the data:</strong>
              </p>
              <ul className="text-sm space-y-1 ml-4 md:text-xs md:space-y-1 md:ml-2">
                <li><span className="text-green-600">Green</span> = faster than average</li>
                <li><span className="text-red-600">Red</span> = slower than average</li>
                <li>Times shown in microseconds (μs)</li>
                <li>Data flows: N. Virginia → London → Tokyo → N. Virginia</li>
              </ul>
              <p className="text-sm mt-2 text-gray-500 md:text-xs md:mt-1">
                Try different cloud providers and languages below to explore performance variations. 
                Our data represents over <strong>1 MILLION</strong> trips around the planet! 🌍
              </p>
            </div>
            
            <TrackNavigation 
              selectedCloud={selectedCloud} 
              setSelectedCloud={setSelectedCloud}
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
            />
          </div>
          <RegionalOverview 
            selectedCloud={selectedCloud}
            selectedLanguage={selectedLanguage}
            regionData={regionData}
            avgData={avgData}
          />
          
          <div className="px-3 flex-1">
            <FastestExecutions 
              selectedCloud={selectedCloud}
              selectedLanguage={selectedLanguage}
              top3Data={top3Data}
              avgData={avgData}
              regionData={regionData}
            />

            <SlowestExecutions 
              selectedCloud={selectedCloud}
              selectedLanguage={selectedLanguage}
              last3Data={last3Data}
              avgData={avgData}
              regionData={regionData}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default App