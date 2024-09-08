import React, {useRef} from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion, useInView } from 'framer-motion';


const cleanlinessData = [
  { name: 'Compliant', value: 160 },  
  { name: 'Non-Compliant', value: 40 }, 
];

const COLORS = ['#7c3aed', '#db2777'];
const CleanlinessComplianceChart = () => {
  const ref = useRef(null)
  const inView = useInView(ref)
  return (
    <motion.div
      ref={ref}
      className=' h-6/6 w-3/6 bg-opacity-50 backdrop-blur-md shadow-xl rounded-xl p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      style={{backgroundColor:'#F5EDED'}}
    >
      <h2 className='text-xl font-semibold text-black mb-10'>Post Office Cleanliness Compliance</h2>
      <div className='h-[360px] -ml-5'>
        {inView && <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              data={cleanlinessData}
              cx="50%"
              cy="50%"
              outerRadius={160}
              fill="#8884d8"
              dataKey="value"
              innerRadius={80}
              
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {cleanlinessData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgb(100, 130, 173)",
                borderColor: "#4B5563",
                borderRadius: "0.5rem",
              }}
              itemStyle={{ color: "#000000" }}
            />
            <Legend
              iconType="circle"
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{ color: "#e9d5ff" }}
            />
          </PieChart>
        </ResponsiveContainer>}
      </div>
    </motion.div>
  );
};

export default CleanlinessComplianceChart;
