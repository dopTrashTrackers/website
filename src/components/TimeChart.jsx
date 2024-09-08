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
			className=' h-min w-3/6 bg-opacity-50 backdrop-blur-md shadow-xl rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.5 }}
			style={{backgroundColor:'#F5EDED'}}
        
		>
			<h2 className='text-xl font-semibold text-black mb-4'>Garbage Detection Frequency</h2>
			<div className='h-[360px]'>
				<ResponsiveContainer width='100%' height='100%'>
					<LineChart data={garbageDetectionData}>
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
