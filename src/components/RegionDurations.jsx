function RegionDurations({ regionDurations, avgData, selectedCloud, selectedLanguage, regionData }) {

  if (!regionDurations || regionDurations.length === 0) {
    return null
  }


  const formatRegionName = (region) => {
    const regionMap = {
      'us-east-1': 'N. Virginia',
      'us-east-2': 'N. Virginia', 
      'eu-west-2': 'Londres', 
      'ap-northeast-1': 'Tokio'
    }
    
    // Clean up the region string first
    const cleanRegion = region
      .replace(/-node-iA$/, '')
      .replace(/-start-iA$/, '')
      .replace(/-end-iA?$/, '')
      .replace(/-end$/, '')
    
    return regionMap[cleanRegion] || cleanRegion
  }

  const formatDuration = (microseconds) => {
    return `${microseconds.toLocaleString()}μs`
  }
  
  // Function to get regional average for a specific step
  const getRegionalAverage = (sourceRegion, targetRegion) => {
    if (!regionData || regionData.length === 0) return null
    
    // Clean up region names for matching
    const cleanSourceRegion = sourceRegion
      .replace(/-node-iA$/, '')
      .replace(/-start-iA$/, '')
      .replace(/-end-iA?$/, '')
      .replace(/-end$/, '')
    
    const cleanTargetRegion = targetRegion
      .replace(/-node-iA$/, '')
      .replace(/-start-iA$/, '')
      .replace(/-end-iA?$/, '')
      .replace(/-end$/, '')
    
    const regionalAvg = regionData.find(item => {
      const cloudMatch = item.cloud === selectedCloud
      const languageMatch = item.language === selectedLanguage || 
        (selectedLanguage === 'py' && item.language === 'python')
      
      // Clean up the region data names for comparison
      const itemSourceClean = item.source_region
        .replace(/-node-iA$/, '')
        .replace(/-start-iA$/, '')
        .replace(/-end-iA?$/, '')
        .replace(/-end$/, '')
        
      const itemTargetClean = item.target_region
        .replace(/-node-iA$/, '')
        .replace(/-start-iA$/, '')
        .replace(/-end-iA?$/, '')
        .replace(/-end$/, '')
      
      const sourceMatch = itemSourceClean === cleanSourceRegion
      const targetMatch = itemTargetClean === cleanTargetRegion
      return cloudMatch && languageMatch && sourceMatch && targetMatch
    })
    
    return regionalAvg ? regionalAvg.avg_time_microseconds : null
  }
  
  // Function to determine color based on comparison with regional average
  const getComparisonColor = (duration, sourceRegion, targetRegion) => {
    const regionalAvg = getRegionalAverage(sourceRegion, targetRegion)
    if (!regionalAvg) return 'text-blue-600' // Default color if no average
    return duration < regionalAvg ? 'text-green-600' : 'text-red-600'
  }

  // Define the desired order of region flows
  const desiredOrder = [
    { from: 'N. Virginia', to: 'Londres' },
    { from: 'Londres', to: 'Tokio' },
    { from: 'Tokio', to: 'N. Virginia' }
  ]
  
  // Sort regionDurations according to desired order
  const sortedDurations = [...regionDurations].sort((a, b) => {
    const aFrom = formatRegionName(a.source_region)
    const aTo = formatRegionName(a.target_region)
    const bFrom = formatRegionName(b.source_region)
    const bTo = formatRegionName(b.target_region)
    
    const aIndex = desiredOrder.findIndex(order => order.from === aFrom && order.to === aTo)
    const bIndex = desiredOrder.findIndex(order => order.from === bFrom && order.to === bTo)
    
    // If both found in desired order, use that order
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex
    }
    // If only one found, prioritize it
    if (aIndex !== -1) return -1
    if (bIndex !== -1) return 1
    // If neither found, maintain original order
    return 0
  })

  return (
      <div className="pt-1">
        {sortedDurations.map((duration, index) => (
            <div 
              key={index} 
              className="border"
            >
              <div className="flex justify-between">
                <div className="text-xs">
                  <span className="font-medium text-gray-700">
                    {formatRegionName(duration.source_region)}
                  </span>
                  <span className="text-gray-400"> → </span>
                  <span className="font-medium text-gray-700">
                    {formatRegionName(duration.target_region)}
                  </span>
                </div>
                <span className={`text-xs font-semibold ${getComparisonColor(duration.duration_microseconds, duration.source_region, duration.target_region)}`}>
                  {formatDuration(duration.duration_microseconds)}
                </span>
              </div>
            </div>
        ))}
      </div>
  )
}

export default RegionDurations