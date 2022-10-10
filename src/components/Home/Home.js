import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Banner/Banner';
import QuizCart from '../../QuizCart/QuizCart';

const Home = () => {
    const quizs = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className='container md:mx-auto grid grid-cols-1 m-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-10'>
                {
                    quizs.data.map(quiz => <QuizCart key={quiz.id} quiz={quiz}></QuizCart>)
                }
            </div>
        </div>
    );
};

export default Home;