import React, { useEffect, useState } from 'react'
import json_buildings from '../resources/buildings.json'
import { BadgeCard } from './BuildingCard'
import '../styles/climbs.css'

function Climbs(props: { data: any; type: string; }) {
    const data = props.data
    const type = props.type.toLowerCase()

    //google images query (from ChatGPT by OpenAI)
    // useEffect(() => {
    //     const API_KEY = "YOUR_API_KEY";
    //     const searchQuery = "your search query";

    //     const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&q=${searchQuery}`;

    //     fetch(url)
    //     .then(response => response.json())
    //     .then(data => {
    //         // Do something with the data
    //     })
    //     .catch(error => {
    //         // Handle the error
    //     });

    // })

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