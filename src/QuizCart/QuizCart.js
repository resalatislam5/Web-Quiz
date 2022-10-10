import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const QuizCart = ({quiz}) => {
    const {name, logo, total} = quiz
    return (
        <div className='flex justify-center '>
                <div className="card w-96 bg-gray-300">
                <figure><img src={logo} alt={name}/></figure>
                <div className="card-body bg-slate-100">
                    <h2 className="card-title font-bold text-2xl">{name}</h2>
                    <p className='text-lg'>Total quiz: <span className='font-bold'>{total}</span></p>
                    <div className="card-actions justify-end">
                    <button className="btn ">Quiz details <FontAwesomeIcon className='ml-2' icon={faArrowRight} /></button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default QuizCart;