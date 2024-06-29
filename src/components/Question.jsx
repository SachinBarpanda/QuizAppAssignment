import React from 'react'
import Button from './Button'
function Question({Question , changeQuestion}) {
  return (
    <div>
        <h1 className='text-2xl font-bold mb-10'>{Question.question}</h1>
        <ul className='flex flex-row gap-5 flex-wrap options'>
            {
                Question.answers.map((answer)=>(
                    <li  key={answer.text}>
                        <Button onClick={()=>changeQuestion(answer.isCorrect)} className={'border-2 px-4 py-2 hover:bg-gray-400'} children={answer.text}/>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Question