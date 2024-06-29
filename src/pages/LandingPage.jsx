import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function LandingPage() {
    const [name, setName] = useState('');
    const [selectedItem, setSelectedItem] = useState([]);
    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('name', name);
        localStorage.setItem('category', selectedItem);
        navigate('/questions');
    };
    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <div className='border-2 w-96 h-[40vh] text-xl p-5 '>
                <h2 className='font-bold mb-5'>Enter Your Details</h2>
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <div>
                            <input
                            className='border-2 rounded-lg p-2'
                            placeholder='Enter your Name'
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                    </div>
                    <div>
                        <select className='border-2 rounded-lg p-2'
                            value={selectedItem}
                            onChange={(e) => setSelectedItem(e.target.value)}
                            required
                        >
                            <option value="">Select Subject</option>
                            <option value="maths">maths</option>
                            <option value="physics">physics</option>
                            <option value="chemistry">chemistry</option>
                        </select>

                    </div>

                    <button className='border-2 rounded-lg bg-red-500 px-4 py-2 text-white' type="submit" >Submit</button>

                </form>
            </div>
        </div>
    );
};

export default LandingPage;
