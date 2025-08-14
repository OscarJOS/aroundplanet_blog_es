import RegionDurations from './RegionDurations'

function FastestExecutions({ selectedCloud, selectedLanguage, top3Data, avgData, regionData }) {
  const formatLanguageName = (language) => {
    return language === 'py' ? 'python' : language
  }
  
  return (
    <div className="mb-6 md:mb-0">
      <h2 className="font-bold mb-4 md:mb-2 text-lg md:text-base">
        Top 3 Más Rápidos
      </h2>

      <div className="flex flex-col space-y-4 md:space-y-0">
        {top3Data
          .filter(item => {
            const cloudMatch = item.cloud === selectedCloud
            const languageMatch = item.language === selectedLanguage || 
              (selectedLanguage === 'py' && item.language === 'python')
            const positionMatch = true
            return cloudMatch && languageMatch && positionMatch
          })
          .map((item, index) => (
          <div key={index} className="p-3 md:p-0 border md:border-0 rounded-lg md:rounded-none bg-white md:bg-transparent mb-0 md:mb-2">
            <div className="font-semibold text-base md:text-sm mb-2 md:mb-0">#{item.position}: {item.total_time_microseconds.toLocaleString()}μs</div>
            <div className="text-sm md:text-xs text-gray-600 mb-3 md:mb-0 break-all">{item.uuid}</div>
            <RegionDurations 
              regionDurations={item.region_durations} 
              avgData={avgData}
              selectedCloud={selectedCloud}
              selectedLanguage={selectedLanguage}
              regionData={regionData}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FastestExecutions