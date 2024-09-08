import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,Cell } from 'recharts';
import { motion } from 'framer-motion';

// Example garbage type data
const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];
const garbageTypeData = [
  { type: 'Plastic', frequency: 45 },
  { type: 'Paper', frequency: 30 },
  { type: 'Organic', frequency: 25 },
  { type: 'Metal', frequency: 15 },
  { type: 'Glass', frequency: 50 },
  // Add more data as needed
];

const GarbageTypeBarChart = () => {
  return (
    <motion.div
      className=' h-min w-3/6 bg-opacity-50 backdrop-blur-md shadow-xl rounded-xl p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      style={{backgroundColor:'#F5EDED'}}
    >
      <h2 className='text-xl font-semibold text-black mb-4'>Garbage Type Frequency</h2>
      <div className='h-[360px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={garbageTypeData}>
            <CartesianGrid strokeDasharray='3 3' stroke='#000000' />
            <XAxis dataKey='type' stroke='#000000' />
            <YAxis stroke='#000000' />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgb(100, 130, 173)',
                borderColor: '#4B5563',
                borderRadius: "0.5rem",
              }}
              itemStyle={{ color: '#000000' }}
            />
            <Bar
              dataKey='frequency'
              barSize={30}
              radius={[5,5, 0, 0]}
              animationDuration={1000}
              animationBegin={300}
            >
            
                {garbageTypeData.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
			</Bar>

          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default GarbageTypeBarChart;
