import React, { useEffect, useState } from 'react'
import json_buildings from '../buildings.json'
import { BadgeCard } from './BuildingCard'
import '../styles/climbs.css'

function Climbs(props: { data: any; type: string; }) {
    const data = props.data
    const type = props.type.toLowerCase()

    return (
        <>
            <div className="cards-container">
                {data.buildings.filter((item: { category: string | string[]; }) => item.category.includes(type)).map((filteredItem: { id: number; category: string; image: string; title: string; country: string; description: string; }) => (
                    <div className="card" key={filteredItem.id}>
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