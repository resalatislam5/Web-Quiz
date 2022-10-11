import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto my-5'>
            <div className='shadow-lg p-5 rounded-lg'>
                <h1 className='text-xl font-semibold'>1. What is the purpose of react?</h1>
                <p className='py-1'>Ans: React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM</p>
            </div>
            <div className='shadow-lg p-5 rounded-lg'>
                <h1 className='text-xl font-semibold'>2. How does context api work?</h1>
                <p className='py-1'>Ans: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='shadow-lg p-5 rounded-lg'>
                <h1 className='text-xl font-semibold'>3. What is useRef</h1>
                <p className='py-1'>Ans: The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
        </div>
    );
};

export default Blog;