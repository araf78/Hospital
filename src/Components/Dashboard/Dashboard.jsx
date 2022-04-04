import React from 'react';
import { LineChart, Line, YAxis, XAxis, PieChart, Pie, CartesianGrid, Tooltip, BarChart, Bar} from 'recharts';

const Dashboard = () => {
   const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (
        <div className="grid gap-2 grid-cols-2 grid-rows-1 p-10">
           <div className="ml-20">
                 <LineChart width={600} height={250} data={data}  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                     <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                 <XAxis dataKey="month"/>
                 <YAxis/>
                 <Tooltip/>
                <Line dataKey="investment" stroke="#8884d8"/> 
                <Line dataKey="sell" stroke="#82ca9d"></Line>
                 </LineChart>
           </div>
           <div>
               <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <Bar dataKey="investment" fill="#8884d8"/>
                    <Bar dataKey="revenue" fill="#82ca9d"/>
                     <YAxis />
                      <Tooltip />
               </BarChart>
           </div>
           <div>
                <PieChart width={800} height={300}  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <Pie data={data} dataKey="sell" nameKey="month" cx="50%" cy="50%" outerRadius={70} fill="#8884d8"></Pie>
                    <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={80} outerRadius={100} fill="#82ca9d" label ></Pie>
                    <Tooltip/>
                </PieChart>
           </div>
        </div>
    );
};
export default Dashboard;
