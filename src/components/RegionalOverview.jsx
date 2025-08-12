import RegionalChart from './regional/RegionalChart'
import { useRegionalData } from '../hooks/useRegionalData'

function RegionalOverview({ selectedCloud, selectedLanguage, regionData, avgData }) {
  const { chartData } = useRegionalData(regionData, selectedCloud, selectedLanguage)
  
  const formatLanguageName = (language) => {
    return language === 'py' ? 'python' : language
  }

  const getCloudImage = (cloud) => {
    const base = import.meta.env.BASE_URL;
    const cloudImages = {
      'aws': `${import.meta.env.BASE_URL}images/cloud/aws_logo.png`,
      'azure': `${import.meta.env.BASE_URL}images/cloud/azure_logo.png`,
      'gcp': `${import.meta.env.BASE_URL}images/cloud/gcp_logo.png`
    }
    return cloudImages[cloud] || '';
  }

  const getLanguageImage = (language) => {
    const langImages = {
      'go': `${import.meta.env.BASE_URL}images/lang/golang.png`,
      'java': `${import.meta.env.BASE_URL}images/lang/java.png`,
      'node': `${import.meta.env.BASE_URL}images/lang/node.png`,
      'py': `${import.meta.env.BASE_URL}images/lang/python.png`,
      'python': `${import.meta.env.BASE_URL}images/lang/python.png`
    }
    return langImages[language] || ''
  }

  return (
    <div className="w-full md:w-1/3 p-2">
        <h2 className="font-bold mb-4 md:mb-2 text-lg md:text-base">
           Average Execution Times
        </h2>
        
        {/* Average Execution Times */}
          {avgData
            .filter(item => {
              const cloudMatch = item.cloud === selectedCloud
              const languageMatch = item.language === selectedLanguage || 
                (selectedLanguage === 'py' && item.language === 'python')
              return cloudMatch && languageMatch
            })
            .map((item, index) => (
            <div key={index} className="mb-2">
              {/* Selected Configuration - Two Rows */}
              <div className="mb-6 md:mb-4">
                {/* First Row - Cloud */}
                <div className="flex items-center justify-center mb-4 md:mb-3 p-4 md:p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <img 
                    src={getCloudImage(item.cloud)} 
                    alt={item.cloud}
                    className="w-10 h-10 md:w-8 md:h-8 mr-3"
                  />
                  <div className="text-center">
                    <div className="text-sm md:text-xs text-gray-500">Cloud Provider</div>
                    <div className="font-semibold text-base md:text-sm text-blue-800">{item.cloud.toUpperCase()}</div>
                  </div>
                </div>
                
                {/* Second Row - Language */}
                <div className="flex items-center justify-center mb-4 md:mb-3 p-4 md:p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <img 
                    src={getLanguageImage(item.language)} 
                    alt={formatLanguageName(item.language)}
                    className="w-10 h-10 md:w-8 md:h-8 mr-3"
                  />
                  <div className="text-center">
                    <div className="text-sm md:text-xs text-gray-500">Programming Language</div>
                    <div className="font-semibold text-base md:text-sm text-purple-800">{formatLanguageName(item.language).toUpperCase()}</div>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="space-y-3 md:space-y-2 text-base md:text-sm">
                <div className="p-3 md:p-2 bg-gray-50 rounded text-center">
                  <div className="text-gray-600">Total registered careers:</div>
                  <div className="font-bold text-xl md:text-lg">{item.track_count.toLocaleString()}</div>
                </div>
                <div className="p-3 md:p-2 bg-green-50 rounded text-center">
                  <div className="text-gray-600">Average execution time:</div>
                  <div className="font-bold text-xl md:text-lg">{item.avg_time_microseconds.toLocaleString()}μs</div>
                </div>
              </div>
            </div>
          ))}
        
        <RegionalChart chartData={chartData} />
    </div>
  )
}

export default RegionalOverview