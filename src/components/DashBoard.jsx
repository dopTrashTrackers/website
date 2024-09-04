import React from 'react';
import GarbageTimeSeriesChart from './TimeChart';
import GarbageTypeBarChart from './CategoryChart';
import GarbageDetectionMap from './GarbageDetectionMap';
import CleanlinessComplianceChart from './CleanlinessComplianceChart';
import GarbageDetectionTable from './DetectionTimeTable';

const DashBoard = () => {
  return (
    <div className='flex flex-col gap-4 h-screen bg-teal-900 text-gray-100 w-full'>
      {/* Background */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 opacity-80' />
        <div className='absolute inset-0 backdrop-blur-sm' />
      </div>

      {/* Top Row */}
      <div className='flex flex-row gap-4 p-4'>
        <GarbageTimeSeriesChart className='flex-1 h-[360px]' />
        <GarbageTypeBarChart className='flex-1 h-[360px]' />
      </div>

      {/* Bottom Row */}
      <div className='flex flex-row gap-4 p-4'>
        <GarbageDetectionMap className='flex-1 h-[360px]' />
        <CleanlinessComplianceChart className='flex-1 h-[360px]' />
      </div>
      <div className='flex p-4'>
        <GarbageDetectionTable/>
      </div>
    </div>
  );
};

export default DashBoard;
