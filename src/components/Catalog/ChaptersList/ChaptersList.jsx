import React from 'react'
import { Link } from 'react-router-dom'
import chapters from '../../../data/chapters'

function ChaptersList(props) {
    return (
        <div className = "Chapters__List">
            {chapters.map((chapter) =>{
                return (
                    <div className="Chapter__Item">
                        <Link to="/Study/:chapterName" className="Link">{chapter.chapter}</Link>
                       
                        <h2><span>{chapter.completedquestions}</span>/ <span>{chapter.questions}</span></h2>

                    </div>
                ) 
            })}
        </div>
        
    )
}

export default ChaptersList
