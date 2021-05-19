import React ,{useContext} from 'react'
import { QuizContext } from '../../../Helpers/QuizContext'

function MainMenu() {
    const {gameState , setGameState} = useContext(QuizContext)
    return (
        <div>
            <button
            className="start__quiz"
            onClick ={()=>{setGameState("quiz")}}>Start Quiz</button>
        </div>
    )
}

export default MainMenu
