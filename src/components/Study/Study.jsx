import React, { useState } from 'react'

import {QuizContext} from '../../Helpers/QuizContext'
import EndScreen from './quiz/EndScreen'
import MainMenu from './quiz/MainMenu'
import Quiz from './quiz/Quiz'

import Score from './Score'


function Study() {
    const [gameState , setGameState]= useState("menu")
    const [score , setScore] =useState(0)


    
    
    return (
        <div className="Study">
            
            <div className="Quiz">
                <QuizContext.Provider value ={{gameState, setGameState , score, setScore}}>
                    <Score score={score}/>
                    {gameState === "menu" && <MainMenu/>}
                    {gameState === "quiz" && <Quiz/>}
                    {gameState === "endScreen" && <EndScreen/>}

                </QuizContext.Provider>
            </div>
        </div>
    )
}

export default Study
