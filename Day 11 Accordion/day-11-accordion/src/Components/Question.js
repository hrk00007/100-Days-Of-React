import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
let Question = ({ title, info }) => {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <React.Fragment>
            <article className="question">
                <header>
                    <h4>{title}</h4>
                    {
                        !showInfo &&
                        <button className='btn' onClick={() => setShowInfo(true)}><AiOutlinePlus /></button>
                    }
                    {
                        showInfo &&
                        <button className='btn' onClick={() => setShowInfo(false)}><AiOutlineMinus /></button>
                    }
                </header>
                {
                    showInfo &&
                    <p dangerouslySetInnerHTML={{ __html: info }} />
                }
            </article>
        </React.Fragment>
    )

}
export default Question;