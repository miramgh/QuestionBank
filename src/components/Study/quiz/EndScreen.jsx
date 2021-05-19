import React, {useState ,useContext} from 'react'
import {Questions} from '../../../Helpers/QuistionBank'
import {QuizContext} from '../../../Helpers/QuizContext'


function EndScreen() {
    const {score , setScore, setGameState }= useContext(QuizContext)
    const restartQuiz = ()=>{
        setScore(0)
        setGameState("menu")
    }
    return (
        <div className="End__Screen">
            <h1>Quiz Finished</h1>
            <h1> {score} / {Questions.length}</h1>
            {score}
            <button onClick={restartQuiz}> Take another Quiz </button>
        </div>
    )
}

export default EndScreen
