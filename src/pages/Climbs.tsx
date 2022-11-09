import React from 'react'
import { NavBar } from '../components/NavBar'
import attributes from '../components/attributes.json'
import { BadgeCard } from '../components/BuildingCard'
import '../styles/climbs.css'

function Climbs() {
    return (
        <>
            <nav>
                <NavBar />
            </nav>
            <div className="cards-container">
                <div className="card">
                    <BadgeCard 
                        image="https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
                        title="title 1"
                        country='country'
                        description='desc' badges={[{ emoji: '🦓', label: 'Great View' }]} 
                    />
                </div>
                <div className="card">
                    <BadgeCard 
                        image="https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
                        title="title 2"
                        country='country'
                        description='desc' badges={[{ emoji: '🦓', label: 'Great View' }]} 
                    />
                </div>
                <div className="card">
                    <BadgeCard 
                        image="https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
                        title="title 2"
                        country='country'
                        description='desc' badges={[{ emoji: '🦓', label: 'Great View' }]} 
                    />
                </div>
                <div className="card">
                    <BadgeCard 
                        image="https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
                        title="title 1"
                        country='country'
                        description='desc' badges={[{ emoji: '🦓', label: 'Great View' }]} 
                    />
                </div>
                <div className="card">
                    <BadgeCard 
                        image="https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
                        title="title 2"
                        country='country'
                        description='desc' badges={[{ emoji: '🦓', label: 'Great View' }]} 
                    />
                </div>
                <div className="card">
                    <BadgeCard 
                        image="https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
                        title="title 2"
                        country='country'
                        description='desc' badges={[{ emoji: '🦓', label: 'Great View' }]} 
                    />
                </div>
            </div>
        </>
    )
}

export default Climbs