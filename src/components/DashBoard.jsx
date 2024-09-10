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
      <div className='flex flex-row gap-4 p-4 mt-5 mb-4'>
        <GarbageTimeSeriesChart className='flex-1 h-[360px]' />
        <GarbageTypeBarChart className='flex-1 h-[360px]' />
      </div>

      {/* Bottom Row */}
      <div className='flex flex-row gap-4 p-4'>
        <GarbageDetectionTable className='flex-1 h-[360px]' />
        <CleanlinessComplianceChart className='flex-1 h-[360px]' />
      </div>
      <AlertSystem/>
    </div>
  );
};

export default DashBoard;
