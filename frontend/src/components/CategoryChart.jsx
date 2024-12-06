import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,Cell } from 'recharts';
import { motion } from 'framer-motion';
import authService from '../firebaseMethods/auth';
import { useParams } from 'react-router-dom';
import { onValue } from 'firebase/database';

// Example garbage type data
const COLORS = [
  "#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B",
  "#EF4444", "#3B82F6", "#F97316", "#22D3EE", "#A3E635",
  "#D946EF", "#14B8A6", "#F43F5E", "#EAB308", "#4ADE80",
  "#FB923C", "#60A5FA", "#A78BFA", "#F87171", "#34D399",
  "#FBBF24", "#C084FC", "#9CA3AF", "#6B7280", "#4B5563",
  "#1F2937", "#111827", "#9CA3AF", "#6B7280"
];

const GarbageTypeBarChart = () => {
  const { slug } = useParams();
  const [garbageTypeData, setGarbageTypeData] = useState([]);
  const [fontSize, setFontSize] = useState('14px');

  useEffect( () => {
    const dataRef = authService.getRef(`postOffices/${slug}/garbageTypeData`);

    const unsubscribe = onValue(dataRef, (snapshot) => {
      const items = snapshot.val() ? Object.values(snapshot.val()) : [];
      const categories = {
        Plastic: [
          "Clear plastic bottle",
          "Other plastic bottle",
          "Plastic bag wrapper",
          "Other plastic wrapper",
          "Plastic film",
          "Single-use carrier bag",
          "Straw",
          "Other plastic"
        ],
        Metal: ["Bottle cap", "Drink can", "Other can", "Pop tab", "Aluminium foil"],
        Glass: ["Broken glass", "Glass bottle"],
        Paper: ["Paper bag", "Paper"],
        "Food Waste": ["Food waste"],
        Other: [
          "Cigarette",
          "Unlabeled litter",
          "Food Carton",
          "Food container",
          "Cup",
          "Crisp packet",
          "Garbage bag",
          "Lid",
          "Other Carton",
          "Other container",
          "Styrofoam piece"
        ],
      };
      
      const data = Object.entries(categories).map(([category, types]) => {
        const frequency = items
          .filter(item => types.includes(item.type))
          .reduce((sum, item) => sum + item.frequency, 0);
        return { type: category, frequency };
      });
      
      console.log(data);
      setGarbageTypeData(data);
    });

    const handleResize = () => {
      if (window.innerWidth < 600) {
        setFontSize('8px');
      } else if (window.innerWidth < 900) {
        setFontSize('10px');
      } else {
        setFontSize('14px');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      unsubscribe();
    }
  },[]);

  return (
    <motion.div
      className='flex-1 bg-opacity-50 backdrop-blur-md shadow-xl rounded-xl pr-6 pt-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      style={{backgroundColor:'#F5EDED'}}
    >
      <h2 className='text-xl font-semibold text-black mb-4 pl-6'>Garbage Type Frequency</h2>
      <div className='h-[360px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={garbageTypeData}>
            <CartesianGrid strokeDasharray='3 3' stroke='#000000' />
            <XAxis height={25} dataKey='type' stroke='#000000' tick={{ angle: 0, textAnchor: 'middle', fontSize }} interval={0}/>
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
              barSize={40}
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
