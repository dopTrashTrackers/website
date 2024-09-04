import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

// Example garbage detection data
const garbageDetectionData = [
	{ date: "2024-01-01", detections: 50 },
	{ date: "2024-01-02", detections: 75 },
	{ date: "2024-01-03", detections: 60 },
    { date: "2024-02-05", detections: 125 },
    { date: "2024-02-06", detections: 130 },
   { date: "2024-02-07", detections: 140 },
   { date: "2024-02-08", detections: 150 },
   { date: "2024-02-09", detections: 160 },
   { date: "2024-02-10", detections: 155 },
	// Add more data here
];

const GarbageDetectionChart = () => {
	return (
		<motion.div
			className='bg-teal-950 h-min w-3/6 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.5 }}
        
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Garbage Detection Frequency</h2>
			<div className='h-[360px]'>
				<ResponsiveContainer width='100%' height='100%'>
					<LineChart data={garbageDetectionData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#f3f4f6' />
						<XAxis dataKey='date' stroke='#cffafe' />
						<YAxis stroke='#cffafe' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line
							type='monotone'
							dataKey='detections'
							stroke='#6366F1'
							strokeWidth={2}
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
