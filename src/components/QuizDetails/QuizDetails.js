import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const quizs = useLoaderData();
    const {name,questions} = quizs.data;
    return (
        <div className='my-5 container mx-auto'>
            <h1 className='text-3xl text-center font-bold'>{name}</h1>
            <div>
                {
                    questions.map(question =><Question key={question.id} ques={question}></Question>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;