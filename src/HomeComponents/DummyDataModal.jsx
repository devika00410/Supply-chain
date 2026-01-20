import React, { useState } from 'react'

const DummyDataModal = () => {
  const [showModal, setShowModal] = useState(true)

  if (!showModal) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md mx-4 p-6 text-center">
        <h2 className="text-lg font-semibold mb-4 text-red-700">*Notice</h2>
        <p className="mb-6 text-red-600">
          All client, testimonial, and about page data are dummy placeholders.
          This is a frontend MVP built for demonstration purposes.
        </p>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => setShowModal(false)}
        >
          OK
        </button>
      </div>
    </div>
  )
}

export default DummyDataModal
