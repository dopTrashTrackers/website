import React, {useRef} from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion, useInView } from 'framer-motion';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { onValue } from "firebase/database";
import authService from "../firebaseMethods/auth";


const cleanliness = [
  { name: 'Compliant', value: 0 },  
  { name: 'Non-Compliant', value: 0 }, 
];

const COLORS = ['#7c3aed', '#db2777'];
const CleanlinessComplianceChart = () => {
  const ref = useRef(null)
  const inView = useInView(ref)
  const { slug } = useParams();
  const [cleanlinessData, setCleanlinessData] = useState(cleanliness);

  useEffect(() => {
    const compliantRef = authService.getRef(`postOffices/${slug}/compliant`);
    const nonCompliantRef = authService.getRef(`postOffices/${slug}/non-compliant`);

    const unsubscribe = onValue(compliantRef, (snapshot) => {
      const data = snapshot.val();
      setCleanlinessData((prevData) => {
        const updatedData = [...prevData];
        updatedData[0].value = data || 0; // Update the compliant value
        return updatedData;
      });
    });

    const unsubscribe2 = onValue(nonCompliantRef, (snapshot) => {
      const data = snapshot.val();
      setCleanlinessData((prevData) => {
        const updatedData = [...prevData];
        updatedData[1].value = data || 0; // Update the non-compliant value
        return updatedData;
      });
    });

    return () => {
      unsubscribe();
      unsubscribe2();
    };
  }, [slug]);
  return (
    <motion.div
      ref={ref}
      className='md:w-1/2 w-full bg-opacity-50 backdrop-blur-md shadow-xl rounded-xl p-6 border border-gray-700'
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
