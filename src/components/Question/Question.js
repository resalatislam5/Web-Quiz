import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
const Question = ({ques}) => {
    const {correctAnswer,question,options, id} =ques;
    const handleQues = (option) =>{
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
    const handleAns = () =>{
            console.log(correctAnswer)
            toast.success(`${correctAnswer}`, {
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
    return (
        <div className=''>
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
           <div className='flex shadow-lg p-10 m-4 '>
           <div >
            <h3 className='text-xl font-bold pb-3'>{question}</h3>
            {
               options.map(option => {
                return (
                    <div> 
                        <input onClick={() =>handleQues(option)} id={option}  type="radio" name="ques" value={option}/>
                        <label className='ml-1' for={option}>{option}</label>
                    </div>
                )
               })
            }
            </div>
            <div className=''>
                    <FontAwesomeIcon onClick={() =>handleAns()} className='pl-3' icon={faEye} />
            </div>
           </div>
        </div>
    );
};

export default Question;