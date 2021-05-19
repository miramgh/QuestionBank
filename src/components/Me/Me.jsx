import React from 'react'
import DropZone from './DropZone'


function Me() {
    return (
        <div className="Me">
            
            <p > Submit questions to the question bank ... help us creating this app</p>
            <label htmlFor="Question">Case</label>
            <textarea type="text" name ="Question"/>

            <div className="choice">
                <label htmlFor="A">A</label>
                <input type="text" name="A" />
            </div>
            <div className="choice">
                <label htmlFor="B">B</label>
                <input type="text" name="B"/>
            </div>
            <div className="choice">

                <label htmlFor="C">C</label>
                <input type="text" name="C"/>
            </div>
            <div className="choice">

                <label htmlFor="D">D</label>
                <input type="text" name="D"/>
            </div>
            <div  className="key__words"> 

                <label htmlFor="KeyWords">Key Words</label>
                <input type="text" name=""/>
            </div>
            <div className="dropZone">
                <label htmlFor="">if you wanna provide a photo (optional)</label>
                <DropZone/>

            </div>
        </div>
    )
}

export default Me
