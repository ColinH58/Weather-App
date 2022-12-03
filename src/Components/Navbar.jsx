import React from 'react'

const Navbar = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: 'Tokyo'
    },
    {
      id: 2,
      title: 'Seattle'
    },
    {
      id: 3,
      title: 'Dallas'
    },
    {
      id: 4,
      title: 'Boston'
    },
    {
      id: 5,
      title: 'London'
    },
  ]

  return (
    <div className="Navbar">
      {cities.map((city) => {
        return (
        <button key={city.id} onClick={()=>setQuery(city.title)}>{city.title}</button>
      )})}
    </div>
  )
}

export default Navbar;