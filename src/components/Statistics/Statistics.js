import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const Statistics = () => {
    const quiz = useLoaderData(); 
    return (
        <div>
            <LineChart width={730} height={250} data={quiz.data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend verticalAlign="top" height={36}/>
                <Line name="uv of pages" type="monotone" dataKey='total' stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Statistics;
