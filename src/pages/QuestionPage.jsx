import React, { useEffect, useState } from 'react'
import Question from '../components/Question';
import questions from '../assets/questions.json'
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
function QuestionPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const categoricalQuestion = questions.filter((question) => {
    return question.category.toLowerCase() === localStorage.getItem('category');
  })
  const navigate = useNavigate();
  let points = 0;

  function changeQuestion(isCorrect) {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect])
  }

  function calculatePoints() {
    for (let x of userAnswers) {
      if (x === true) {
        points += 2;
      } else {
        points -= 1;
      }
    }
  }

  useEffect(() => {
    if (currentQuestion >= categoricalQuestion.length) {
      calculatePoints();
      localStorage.setItem('userPoints', points);
      localStorage.setItem('totalPoint', categoricalQuestion.length * 2);
      navigate('/resultpage')
    }
  }, [changeQuestion])

  return (
    <div className='w-full h-[100vh]  flex justify-center items-center'>
      <div className='border-2 w-1/2 h-[50vh] text-xl p-5'>

        <h1 className='mb-10'>Hi {localStorage.getItem('name').toUpperCase()} here is your {localStorage.getItem('category').toUpperCase()} questions</h1>
        <div className='flex flex-col  gap-5'>

          {currentQuestion < categoricalQuestion.length && (
            <Question Question={categoricalQuestion[currentQuestion]}
              changeQuestion={changeQuestion}
            />
          )}
          <div className='flex gap-5'>

            {currentQuestion != 0 && <Button className={'border-2 rounded-lg bg-red-500 px-4 py-2 text-white'} children={"Prev"} onClick={() => (setCurrentQuestion(currentQuestion - 1))} />}

            {currentQuestion < categoricalQuestion.length &&
              <Button onClick={() => (setCurrentQuestion(currentQuestion + 1))} className={'border-2 rounded-lg bg-red-500 px-4 py-2 text-white'} children={"Next"} />}

          </div>

        </div>
      </div>
    </div>
  )
}

export default QuestionPage