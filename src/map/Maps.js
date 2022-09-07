import React from 'react'
import MapItem from './MapItem'
import SearchLocation from './SearchLocation'
import { useState } from 'react'
import GeoMyLocation from './GeoMyLocation'
import Try from '../components/Try'
import MapSearchLeaflet from './MapSearchLeaflet'

function Maps() {
    const [selectLocation, setSelectLocation]=useState(null)
  return (
    <div>
    <MapItem selectLocation={selectLocation} />
    {/* <SearchLocation selectLocation={selectLocation} setSelectLocation={setSelectLocation} /> */}
    <MapSearchLeaflet />
    </div>
  )
}

export default Maps