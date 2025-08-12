function TrackNavigation({ selectedCloud, setSelectedCloud, selectedLanguage, setSelectedLanguage }) {

  const clouds = [
    { id: 'aws', name: 'AWS', image: '/images/cloud/aws_logo.png' },
    { id: 'azure', name: 'Azure', image: '/images/cloud/azure_logo.png' },
    { id: 'gcp', name: 'GCP', image: '/images/cloud/gcp_logo.png' }
  ]

  const languages = [
    { id: 'go', name: 'Go', image: '/images/lang/golang.png' },
    { id: 'java', name: 'Java', image: '/images/lang/java.png' },
    { id: 'node', name: 'Node', image: '/images/lang/node.png' },
    { id: 'py', name: 'Python', image: '/images/lang/python.png' }
  ]

  return (
    <div className="px-0 md:px-3 max-w-full md:max-w-md w-full">
      <h3 className="text-base md:text-sm font-bold mb-4 md:mb-1 text-gray-700">Select your options:</h3>
      
      {/* Cloud Providers Section */}
      <div className="mb-6 md:mb-1">
        <h4 className="text-sm md:text-xs font-semibold mb-3 md:mb-1 text-gray-600">Cloud Providers:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:flex md:flex-col gap-3 md:gap-2">
          {clouds.map((cloud) => (
            <button
              key={cloud.id}
              onClick={() => setSelectedCloud(cloud.id)}
              className={`p-3 md:p-2 flex items-center justify-center border w-full ${
                selectedCloud === cloud.id
                  ? 'border-blue-400'
                  : 'border-gray-200'
              }`}
              style={{
                backgroundColor: selectedCloud === cloud.id ? '#dbeafe' : 'white',
                borderWidth: selectedCloud === cloud.id ? '2px' : '1px',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                minHeight: '3rem'
              }}
              onMouseEnter={(e) => {
                if (selectedCloud !== cloud.id) {
                  e.target.style.backgroundColor = '#f8fafc'
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCloud !== cloud.id) {
                  e.target.style.backgroundColor = 'white'
                }
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}${cloud.image.replace(/^\/+/, '')}`}
                alt={cloud.name}
                className="w-12 h-12 md:w-10 md:h-10"
                style={{ width: '2.5rem', height: '2.5rem' }}
              />
              <span 
                className="text-base md:text-sm font-bold ml-3 md:ml-2" 
                style={{color: selectedCloud === cloud.id ? '#2563eb' : '#374151'}}
              >
                {cloud.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Languages Section */}
      <div>
        <h4 className="text-sm md:text-xs font-semibold mb-3 md:mb-1 text-gray-600">Programming Languages:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-col gap-3 md:gap-2">
          {languages.map((language) => (
            <button
              key={language.id}
              onClick={() => setSelectedLanguage(language.id)}
              className={`p-3 md:p-2 flex items-center justify-center border w-full ${
                selectedLanguage === language.id
                  ? 'border-purple-400'
                  : 'border-gray-200'
              }`}
              style={{
                backgroundColor: selectedLanguage === language.id ? '#faf5ff' : 'white',
                borderWidth: selectedLanguage === language.id ? '2px' : '1px',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                minHeight: '3rem'
              }}
              onMouseEnter={(e) => {
                if (selectedLanguage !== language.id) {
                  e.target.style.backgroundColor = '#fefbff'
                }
              }}
              onMouseLeave={(e) => {
                if (selectedLanguage !== language.id) {
                  e.target.style.backgroundColor = 'white'
                }
              }}
            >
              <img 
                src={`${import.meta.env.BASE_URL}${language.image}`}
                alt={language.name}
                className="w-12 h-12 md:w-10 md:h-10"
                style={{ width: '2.5rem', height: '2.5rem' }}
              />
              <span 
                className="text-base md:text-sm font-bold ml-3 md:ml-2" 
                style={{color: selectedLanguage === language.id ? '#6f26b2ff' : '#374151'}}
              >
                {language.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrackNavigation