import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

function ResultPage() {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(() => {
            navigate('/')    
        }, 5000);
    })





    return (

        <div className='w-full h-[100vh] flex justify-center items-center'>
            <div className='border-2 flex flex-col gap-5 w-96 h-[40vh] text-xl p-5 '>

                <h1 className='font-bold'>Hey {localStorage.getItem('name')}</h1>
                <h2>You have scored : {localStorage.getItem('userPoints')}</h2>
                <h2>Status : {localStorage.getItem('userPoints') / localStorage.getItem('totalPoint') >= 0.5 ? "Passed" : "Failed"}</h2>

                <Button className={'border-2 rounded-lg bg-red-500 px-4 py-2 text-white'} children={'Go to home page'} onClick={() => navigate('/')} />
                <h2 className='text-sm'>You will be redirected in {5} seconds </h2>
            </div>
        </div>
    )
}

export default ResultPage