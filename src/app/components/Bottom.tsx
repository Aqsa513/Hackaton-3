import React from 'react'

const Bottom = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center pl-12 pr-12  ml-4 my-12">
    {/* Column 1 */}
    <div className="text-center">
      <h3 className="font-bold mb-4">Icons</h3>
      <ul className="space-y-2 text-sm text-gray-500">
        <li>Air Force 1</li>
        <li>Huarache</li>
        <li>Air Max 90</li>
        <li>Air Max 95</li>
      </ul>
    </div>
    {/* Column 2 */}
    <div className="text-center">
      <h3 className="font-bold mb-4">Shoes</h3>
      <ul className="space-y-2 text-sm text-gray-500">
        <li>All Shoes</li>
        <li>Custom Shoes</li>
        <li>Jordan Shoes</li>
        <li>Running Shoes</li>
      </ul>
    </div>
    {/* Column 3 */}
    <div className="text-center">
      <h3 className="font-bold mb-4">Clothing</h3>
      <ul className="space-y-2 text-sm text-gray-500">
        <li>All Clothing</li>
        <li>Modest Wear</li>
        <li>Hoodies & Pullovers</li>
        <li>Shirts & Tops</li>
      </ul>
    </div>
    {/* Column 4 */}
    <div className="text-center">
      <h3 className="font-bold mb-4">Kids'</h3>
      <ul className="space-y-2 text-sm text-gray-500">
        <li>Infant & Toddler Shoes</li>
        <li>Kids' Shoes</li>
        <li>Kids' Jordan Shoes</li>
        <li>Kids' Basketball Shoes</li>
      </ul>
    </div>
  </div>

  
  )
}

export default Bottom
