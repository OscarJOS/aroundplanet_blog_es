import { useState } from 'react'

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null)
  
  const blogPosts = [
    {
      id: 1,
      title: "¿Cómo es esto posible?",
      summary: "Descubre cómo Around Planet mide tiempos de ejecución a través de múltiples proveedores de nube y lenguajes de programación con precisión de microsegundos, proporcionando información sobre características de rendimiento y optimización de infraestructura.",
      date: "28 de Julio, 2025",
      content: `
        Around Planet mide tiempos de ejecución a través de AWS, Azure y GCP ejecutando código en tres regiones: N. Virginia, Londres y Tokio. Cada ejecución sigue el mismo camino alrededor del mundo, creando datos de rendimiento consistentes.
        
        **🌐 Cómo Funciona**
        
        El sistema funciona en tres proveedores principales de nube:
        
        • **AWS** - Regiones de N. Virginia, Londres, Tokio
        • **Azure** - Regiones correspondientes con configuraciones similares  
        • **GCP** - Misma configuración regional para comparación justa
        
        Cada prueba sigue la misma ruta: N. Virginia → Londres → Tokio → N. Virginia. Esto asegura que todas las mediciones sean comparables entre diferentes proveedores de nube y lenguajes de programación.
        
        **⚡ Precisión de Tiempo**
        
        Todas las mediciones usan precisión de microsegundos para capturar pequeñas diferencias de rendimiento:
        
        • Marcas de tiempo de alta precisión en cada punto de control regional
        • Metodología de medición consistente
        
        **📊 Recolección de Datos**
        
        Cada ejecución de prueba obtiene un identificador único (UUID) que la rastrea a través de los cuatro pasos del viaje global. El sistema registra:
        
        • Cuándo llegan los datos a cada región
        • Tiempo de viaje de red entre regiones
        • Tiempo total de ejecución
      `
    },
    {
      id: 2,
      title: "Entendiendo las Mediciones de Tiempo",
      summary: "Este sistema utiliza mediciones a nivel de microsegundos para analizar tiempos de ejecución a través de proveedores de nube y lenguajes, ayudando a identificar tendencias de rendimiento, optimizar despliegues y guiar decisiones de infraestructura.",
      date: "28 de Julio, 2025",
      content: `
        **📏 Unidades de Tiempo**
        
        Todos los tiempos se miden en **microsegundos (μs)**:
        
        • 1 milisegundo = 1,000 microsegundos
        • 1 segundo = 1,000,000 microsegundos
        
        **📊 Lo Que Verás**
        
        • **Tiempo Promedio:** El tiempo de ejecución típico en todas las pruebas para cada combinación de nube-lenguaje.

        • **Tiempos Más Rápidos:** Los 3 mejores resultados de rendimiento, mostrando condiciones óptimas.

        • **Tiempos Más Lentos:** Los 3 peores resultados de rendimiento, revelando problemas potenciales.

        • **Segmentos Regionales:** Cuánto tiempo toma cada parte del viaje (N. Virginia → Londres → Tokio → N. Virginia).

        **🎯 Cómo Usar Estos Datos**
        
        • Comparar proveedores de nube para tu lenguaje de programación específico
        • Identificar qué regiones podrían causar retrasos
      `
    },
    {
      id: 3,
      title: "Reading the Color-Coded Performance Data",
      summary: "Learn how to interpret the green and red color indicators that show performance relative to averages, helping you make quick infrastructure decisions based on over 1 million data points.",
      date: "30 de Julio, 2025",
      content: `
        **🎨 Sistema de Colores**
        
        La aplicación usa colores para mostrar el rendimiento comparado con los promedios:
        
        • **Verde** - Mejor rendimiento que el promedio (más rápido)
        • **Rojo** - Peor rendimiento que el promedio (más lento)
        
        **📊 Cómo se Asignan los Colores**
        
        Cada medición se compara con el promedio para esa combinación específica de proveedor de nube y lenguaje de programación. Si una ejecución es más rápida que el promedio, obtiene verde. Si es más lenta, obtiene rojo.
        
        **🗺️ Patrones de Color Regional**
        
        Cada parte del viaje obtiene su propio color basado en cómo se desempeñó:
        
        • **N. Virginia → Londres** - Rendimiento transatlántico
        • **Londres → Tokio** - Rendimiento trans-asiático  
        • **Tokio → N. Virginia** - Rendimiento transpacífico
      `
    },
    {
      id: 4,
      title: "Entendiendo las Tres Secciones Principales de la Aplicación",
      summary: "Guía completa para navegar las tres secciones principales de Around Planet: Visión General de Rendimiento Regional, Ejecuciones Más Rápidas y Ejecuciones Más Lentas, además de cómo usarlas juntas para análisis integral.",
      date: "30 de Julio, 2025",
      content: `
        La aplicación tiene tres secciones principales que trabajan juntas para darte una imagen completa del rendimiento:
        
        **🗺️ Visión General Regional (Izquierda/Centro)**
        
        Muestra el viaje global visualmente con tres segmentos coloreados:
        
        • **Secciones de ruta** - N. Virginia → Londres → Tokio → N. Virginia
        • **Codificación de color** - Verde para segmentos rápidos, rojo para lentos
        • **Tiempos promedio** - Estadísticas resumen para la combinación seleccionada
        • **Controles** - Menú de botones para elegir proveedor de nube y lenguaje de programación
        
        **🚀 Ejecuciones Más Rápidas (Arriba Derecha)**
        
        Muestra los 3 mejores resultados de rendimiento:
        
        • **Mejores tiempos** - Las ejecuciones más rápidas registradas
        • **Desglose** - Cuánto tiempo tomó cada segmento en los mejores casos
        • **Barras de comparación** - Representación visual del rendimiento de segmentos
        • **UUIDs** - Identificadores únicos para cada ejecución
        
        **🐌 Ejecuciones Más Lentas (Abajo Derecha)**
        
        Muestra los 3 peores resultados de rendimiento:
        
        • **Peores tiempos** - Las ejecuciones más lentas registradas
        • **Áreas problemáticas** - Qué segmentos causaron los retrasos
        • **Comparación** - Cuánto más lentos que el promedio fueron estos
        • **Patrones** - Características comunes de ejecuciones lentas
        
        **🔄 Cómo Usar las Tres Juntas**
        
        1. Comenzar con la visión general regional para ver patrones generales de rendimiento.
        2. Revisar las ejecuciones más rápidas para ver qué es posible bajo condiciones ideales.
        3. Revisar las ejecuciones más lentas para entender problemas potenciales.
        4. Comparar diferentes proveedores de nube y lenguajes usando los menús de botones.
      `
    },
    {
      id: 5,
      title: "Entendiendo la Identificación de Rastreo UUID",
      summary: "Explora cómo el rastreo UUID asegura la integridad de datos identificando de manera única cada viaje alrededor del planeta, habilitando medición precisa de rendimiento y verificación a través de todos los segmentos regionales.",
      date: "30 de Julio, 2025",
      content: `
        **🔗 ¿Qué es un UUID?**
        
        Un UUID (Identificador Único Universal) es un código único asignado a cada ejecución de prueba. Se ve así: a1b2c3d4-e5f6-7890-1234-567890abcdef
        
        **🎯 ¿Por qué Usar UUIDs?**
        
        Los UUIDs aseguran que las mediciones de diferentes regiones puedan vincularse a la misma prueba:
        
        • **Rastreo único** - Cada prueba obtiene su propio identificador que no será reutilizado
        • **Integridad de datos** - Confirma que todos los datos de tiempo provienen de la misma ejecución
        • **Detección de errores** - Ayuda a identificar ejecuciones de prueba incompletas o corruptas
        
        **⚙️ Cómo Funciona**
        
        Cada prueba sigue este proceso:
        
        1. **Inicio** - Se genera un UUID en N. Virginia
        2. **Viaje** - El UUID viaja con la prueba a través de Londres y Tokio
        3. **Regreso** - El UUID regresa a N. Virginia
        4. **Verificación** - Todas las cuatro marcas de tiempo se emparejan usando el UUID
        
        **📊 Lo que Esto Significa para Ti**
        
        • **Datos confiables** - Puedes confiar en que los tiempos más rápidos/lentos representan viajes completos reales
        • **Imagen completa** - Cada medición incluye los cuatro segmentos regionales
        • **Aseguramiento de calidad** - Las pruebas incompletas o corruptas se excluyen automáticamente
        
        **🏗️ Beneficios Prácticos**
        
        El sistema UUID asegura que estés viendo datos de rendimiento precisos y completos en lugar de mediciones parciales o errores de tiempo.
      `
    }
  ]

  const renderPost = (post) => (
    <article key={post.id} className="border p-8 mx-auto">
      <header className="mb-2">
        <h2 className="text-3xl font-bold mb-2 text-black">{post.title}</h2>
        <time className="text-sm text-gray-500">{post.date}</time>
      </header>
      
      <div className="prose max-w-none">
        {post.content.trim().split('\n').map((line, lineIndex) => {
          const trimmedLine = line.trim()
          
          // Skip empty lines
          if (!trimmedLine) {
            return <div key={lineIndex} className="mb-2"></div>
          }
          
          // Handle section headers (lines starting with ** and ending with **)
          if (trimmedLine.startsWith('**') && (trimmedLine.endsWith('**') || trimmedLine.includes('** -'))) {
            const headerText = trimmedLine.replace(/\*\*/g, '').replace(/^- /, '')
            return (
              <h3 key={lineIndex} className="text-xl font-semibold text-black mb-3 mt-6">
                {headerText}
              </h3>
            )
          }
          
          // Handle bullet points
          if (trimmedLine.startsWith('• ')) {
            const bulletText = trimmedLine.substring(2)
            return (
              <ul key={lineIndex} className="mb-2">
                <li className="text-black ml-6 list-disc">
                  {bulletText.split('**').map((part, partIndex) => 
                    partIndex % 2 === 1 ? (
                      <strong key={partIndex} className="font-semibold text-black">{part}</strong>
                    ) : (
                      part
                    )
                  )}
                </li>
              </ul>
            )
          }
          
          // Handle dash bullet points
          if (trimmedLine.startsWith('- ')) {
            const bulletText = trimmedLine.substring(2)
            return (
              <ul key={lineIndex} className="mb-2">
                <li className="text-black ml-6 list-disc">
                  {bulletText}
                </li>
              </ul>
            )
          }
          
          // Handle regular paragraphs (non-empty lines that aren't headers or bullets)
          if (trimmedLine && !trimmedLine.startsWith('**') && !trimmedLine.startsWith('•') && !trimmedLine.startsWith('-')) {
            return (
              <p key={lineIndex} className="text-black mb-4 leading-relaxed">
                {trimmedLine.split('**').map((part, partIndex) => 
                  partIndex % 2 === 1 ? (
                    <strong key={partIndex} className="font-semibold text-gray-800">{part}</strong>
                  ) : (
                    part
                  )
                )}
              </p>
            )
          }
          
          return null
        }).filter(item => item !== null)}
      </div>
    </article>
  )

  return (
    <div className="p-8">
      <div className="">
        {/* AI Disclaimer */}
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Este blog fue generado por IA y verificado por humanos para calidad. Es conciso, para que puedas obtener rápidamente una mejor comprensión del tema sin perder tiempo.</strong>
          </p>
        </div>
        
        {/* Header */}

        {/* Show table of contents or selected post */}
        {selectedPost ? (
          <div>
            {/* Back button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="mb-6 px-4 py-2 text-black rounded hover:bg-gray-200 transition-colors"
            >
              ← Volver a Todos los Posts
            </button>
            
            {/* Selected post */}
            {renderPost(selectedPost)}
          </div>
        ) : (
          /* Table of contents */
          <div>
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="border p-6 rounded-lg cursor-pointer hover:border-gray-400 hover:shadow-md transition-all duration-200"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {post.title}
                  </h3>
                  <time className="text-sm text-gray-500">{post.date}</time>
                  {post.summary && (
                    <p className="text-black mt-3 text-sm leading-relaxed">
                      {post.summary}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog