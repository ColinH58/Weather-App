import React from 'react'

const Navbar = () => {
  const cities = [
    {
      id: 1,
      title: 'Calgary'
    },
    {
      id: 2,
      title: 'Denver'
    },
    {
      id: 3,
      title: 'Dallas'
    },
    {
      id: 4,
      title: 'Toronto'
    },
    {
      id: 5,
      title: 'New York'
    },
  ]

  return (
    <div className="Navbar">
      {cities.map((city) => (
        <button key={city.id}>{city.title}</button>
      ))}
    </div>
  )
}

export default Navbar;