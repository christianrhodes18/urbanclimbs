import React, { useState } from 'react'
import json_buildings from '../resources/buildings.json'
import Climbs from '../components/Climbs'
import { NavBar } from '../components/NavBar'

export default function Welcome() {
    const [filterType, setFilterType] = useState<string>('buildings')
    var data = json_buildings

    return (
        <>
            <NavBar filterType={setFilterType}/>
            <Climbs data={data} type={filterType}/>
        </>
    )
}