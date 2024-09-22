import React, { useEffect } from 'react';
import GarbageTimeSeriesChart from './TimeChart';
import GarbageTypeBarChart from './CategoryChart';
import CleanlinessComplianceChart from './CleanlinessComplianceChart';
import GarbageDetectionTable from './DetectionTimeTable';
import AlertSystem from './Alert';

const DashBoard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div id="dashboardTop" className='flex flex-col gap-4 min-h-fit opacity-80 text-black w-full' style={{backgroundColor:'#B4D4FF'}}>
      {/* Top Row */}
      <div className='flex flex-col md:flex-row gap-4 p-4 mt-5 mb-4 w-full'>
        <GarbageTimeSeriesChart />
        <GarbageTypeBarChart />
      </div>

      {/* Bottom Row */}
      <div className='flex flex-col md:flex-row gap-4 p-4 w-full'>
        <GarbageDetectionTable />
        <CleanlinessComplianceChart />
      </div>
      <AlertSystem/>
    </div>
  );
};

export default DashBoard;
