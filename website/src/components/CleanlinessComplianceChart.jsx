import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';


const cleanlinessData = [
  { name: 'Compliant', value: 80 },  
  { name: 'Non-Compliant', value: 20 }, 
];

const COLORS = ['#7c3aed', '#db2777'];
const CleanlinessComplianceChart = () => {
  return (
    <motion.div
      className='bg-teal-950 h-6/6 w-3/6 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h2 className='text-xl font-semibold text-gray-100 mb-10'>Post Office Cleanliness Compliance</h2>
      <div className='h-[360px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              data={cleanlinessData}
              cx="50%"
              cy="50%"
              outerRadius={160}
              fill="#8884d8"
              dataKey="value"
              
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {cleanlinessData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend
              iconType="circle"
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{ color: "#e9d5ff" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CleanlinessComplianceChart;
