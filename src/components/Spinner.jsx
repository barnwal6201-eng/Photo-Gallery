import React from 'react'

const Spinner = () => {
  return (
    <div role="status" className="flex flex-col items-center justify-center py-20 text-gray-500">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-indigo-600" />
      <span className="mt-3 text-sm">Loading photos…</span>
    </div>
  )
}

export default Spinner
