import React, { useState } from 'react'
import json_buildings from '../buildings.json'
import Climbs from '../components/Climbs'
import { NavBar } from '../components/NavBar'

export default function Welcome() {
    const [filterType, setFilterType] = useState<string>('blank')
    var data = json_buildings

    return (
        <>
            <NavBar /* filterType={filterType}  */filterType={setFilterType}/>
            <Climbs data={data} type={filterType}/>
        </>
    )
}