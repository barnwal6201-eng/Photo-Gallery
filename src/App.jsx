import React from 'react'
import Gallery from './components/Gallery'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <h1 className="text-xl font-semibold">Photo Gallery</h1>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
         <Gallery />
      </main>
    </div>
  )
}

export default App
