import React, {useState ,useContext} from 'react'
import { GrNext } from "react-icons/gr";
import { IconContext } from "react-icons";

import {Questions} from '../../../Helpers/QuistionBank'
import {QuizContext} from '../../../Helpers/QuizContext'


function Quiz() {
    const {score , setScore , setGameState}= useContext(QuizContext)

    const [currentQuestion , setCurrentQuestion]= useState(0)
    const [optionChosen , setOptionChosen] = useState('')

    const nextQuestion = ()=>{
        if(Questions[currentQuestion].answer === optionChosen){
            setScore(score + 1)
        }
        setCurrentQuestion(currentQuestion +1)

    }
    const FinishQuiz =()=>{
        if(Questions[currentQuestion].answer === optionChosen){
            setScore(score + 1)
        }
        setGameState("endScreen")

    }
    return (
        <div className ="Qusetions">
            <h1>{Questions[currentQuestion].question}</h1>

            <div className="options">
                <button className ="active" onClick={()=>setOptionChosen('A')}>{Questions[currentQuestion].A}</button>
                <button onClick={()=>setOptionChosen('B')}>{Questions[currentQuestion].B}</button>
                <button onClick={()=>setOptionChosen('C')}>{Questions[currentQuestion].C}</button>
                <button onClick={()=>setOptionChosen('D')}>{Questions[currentQuestion].D}</button>


            </div>
            {currentQuestion == Questions.length -1 ? 
            <button onClick={FinishQuiz}>Finish Quiz</button> 
            
            :
            <div className="next">
                <IconContext.Provider  value={{ style: { color: 'white' } }}>
                <GrNext onClick={nextQuestion} />

                </IconContext.Provider>
            </div>
            

            
        }
        </div>
    )
}

export default Quiz
