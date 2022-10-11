import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Question = ({ques}) => {
    // const [count, setCount] = useState(0);
    const {correctAnswer,question,options} =ques;
    const handleques = (option) =>{
        if(option === correctAnswer){
            toast.success('🦄 Correct Answer ', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else{
            toast.error('🦄 Wrong answer', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }
    // console.log(ques)
    // console.log(options)
    return (
        <div>
             <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                />
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            />
            <h3>{question}</h3>
            {
               options.map(option => {
                return (
                    <div> 
                        <input onClick={() =>handleques(option)}  type="radio" name="ques" value={option}/>
                        <label>{option}</label>
                    </div>
                )
               })
            }
        </div>
    );
};

export default Question;