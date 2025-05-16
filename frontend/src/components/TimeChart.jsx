import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { onValue } from "firebase/database";
import authService from "../firebaseMethods/auth";

// Example garbage detection data
const garbageDetectionData = [
	{ date: "2024-09-01", detections: 50 },
	{ date: "2024-09-03", detections: 75 },
	{ date: "2024-09-07", detections: 60 },
    { date: "2024-09-09", detections: 125 },
    { date: "2024-09-11", detections: 130 },
   { date: "2024-09-13", detections: 140 },
   { date: "2024-09-15", detections: 150 },
   { date: "2024-09-17", detections: 160 },
   { date: "2024-09-26", detections: 156 },
	// Add more data here
];

const GarbageDetectionChart = () => {
	const [detectionData, setDetectionData] = useState([]);
	const { slug } = useParams();

	useEffect(() => {
		const dataRef = authService.getRef(`postOffices/${slug}/garbageDetectionData`);

		const unsubscribe = onValue(dataRef, (snapshot) => {
			const data = snapshot.val();
			if (!data) {
				setDetectionData([]);
				return;
			}
			const updatedData = Object.entries(data).map(([date, value]) => ({
				date,
				detections: value.detections,
			}));
			setDetectionData(updatedData);
		});

		return () => {
			unsubscribe();
		};
	}, [slug]);

	return (
		<motion.div
			className='flex-1 bg-opacity-50 backdrop-blur-md shadow-xl rounded-xl p-6 pl-0 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.5 }}
			style={{backgroundColor:'#F5EDED'}}
        
		>
			<h2 className='text-xl font-semibold text-black mb-4 pl-6'>Garbage Detection Frequency</h2>
			<div className='h-[360px]'>
				<ResponsiveContainer width='100%' height='100%'>
					<LineChart data={detectionData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#000000' />
						<XAxis dataKey='date' stroke='#000000' />
						<YAxis stroke='#000000' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgb(100, 130, 173)",
								borderColor: "#4B5563",
								borderRadius: "0.5rem",
							}}
							itemStyle={{ color: "#000000" }}
						/>
						<Line
							type='monotone'
							dataKey='detections'
							stroke='#6366F1'
							strokeWidth={2}
							animationBegin={300}
							dot={{ fill: "#6366F1", strokeWidth: 4, r: 6 }}
							activeDot={{ r: 8 }}
						/>
                        <legend />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default GarbageDetectionChart;
