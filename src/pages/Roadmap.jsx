import React from 'react'
import SelectSearch from "../components/SelectSearch.jsx";
import Footer from '../components/Footer'
import NavBar from '../components/NavBar.jsx';
const Roadmap = () => {
  return (
    <>
    <NavBar />
    <div className="mx-auto max-w-7xl py-5 px-1 text-center sm:px-6 lg:py-7 lg:px-3">
        <h1 className="text-6xl font-extrabold text-green-600">
            Roadmap
        </h1>

    </div>
    <SelectSearch/>
    <Footer/>
    </>
  )
}

export default Roadmap