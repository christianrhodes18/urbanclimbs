import React, { useEffect, useState } from 'react'
import { NavBar } from './NavBar'
import json_buildings from '../buildings.json'
import { BadgeCard } from './BuildingCard'
import '../styles/climbs.css'

function Climbs() {
    const [filterType, setFilterType] = useState<string>('building')

    //try using useEffect here
    var data = json_buildings

    return (
        <>
            <nav>
                <NavBar />
            </nav>
            <div className="cards-container">
                {data.buildings.filter(item => item.category.includes(filterType)).map(filteredItem => (
                    <div className="card">
                        <BadgeCard 
                            category={filteredItem.category}
                            image={filteredItem.image}
                            title={filteredItem.title}
                            country={filteredItem.country}
                            description={filteredItem.description} 
                            badges={[{ emoji: '🦓', label: 'Great View' }]} 
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Climbs