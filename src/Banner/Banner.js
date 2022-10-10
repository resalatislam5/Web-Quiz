import React from 'react';
// import image from '../../public/banner.jpg'
const Banner = () => {
    return (
        <div className='my-8'>
            <div className='grid grid-cols-2 container mx-auto items-center'>
                <div>
                    <img className='w-full' src='https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cXVpenxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="img" />
                </div>
                <div className='mx-auto'>
                    <h1 className='text-3xl font-bold'>Web Development Roadmaps</h1>
                    <p className='text-2xl font-semibold'>*Front-End Roadmap</p>
                    <p className='text-lg'>1. HTML</p>
                    <p className='text-lg'>2. CSS</p>
                    <p className='text-lg'>3. JavaScript</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;