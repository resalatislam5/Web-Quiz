import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import QuizDetails from './components/QuizDetails/QuizDetails';
import Statistics from './components/Statistics/Statistics';
import Main from './layout/Main/Main';

function App() {
  const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,
  children:[
    {path:'/',
    loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
    element:<Home></Home>},
    {path:'/home',
    loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
    element:<Home></Home>},
    {path:'/statistics', element:<Statistics></Statistics>},
    {path:'blog', element:<Blog></Blog>},
    {path:'quiz/:quizId',
    loader: ({params}) => {
      return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
    },
    element:<QuizDetails></QuizDetails>}
  ]
},
{path:'*', element:<div>This page are not available</div>}
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
