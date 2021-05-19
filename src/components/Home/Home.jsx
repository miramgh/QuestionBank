import React ,{useState} from 'react'
import Article from './Article'
import McqSession from './McqSession'

function Home() {
    return (
        <div className="Home">
            <div className="Component__Header"> Dashboard</div>
            <Article/> 
            <McqSession/>
        </div>
    )
}

export default Home
