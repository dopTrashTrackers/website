// DashBoard.jsx
import React, { useEffect } from 'react';
import GarbageTimeSeriesChart from './TimeChart';
import GarbageTypeBarChart from './CategoryChart';
import CleanlinessComplianceChart from './CleanlinessComplianceChart';
import GarbageDetectionTable from './DetectionTimeTable';
import Alertcard from './Alertcard';
import Socialmedia from './Socialmedia';
import Table from './Table';
import AvgResponseTimeCard from './Averagerestime';
import PerformaceCard from './PerformaceCard'; 
import RankCard from './RankCard';
import Alert from './Alert';

const DashBoard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      id="dashboardTop"
      className="flex flex-col gap-4 min-h-fit opacity-80 text-black w-full"
      style={{ backgroundColor: '#B4D4FF' }}
    >
     
     <div className="flex justify-between px-4 py-2">
  <div className="flex-1 mx-2">
    <Alertcard />
  </div>
  <div className="flex-1 mx-2">
    <AvgResponseTimeCard />
  </div>
  <div className="flex-1 mx-2">
    <PerformaceCard />
  </div>
  <div className="flex-1 mx-2">
    <RankCard />
  </div>
</div>



      {/* Middle Row */}
      <div className="flex flex-col md:flex-row gap-4 p-4 pb-0 mt-5 mb-4 w-full">
        <GarbageTypeBarChart />
        <GarbageTimeSeriesChart />
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row gap-4 p-4 w-full">
        <GarbageDetectionTable />
        <CleanlinessComplianceChart />
      </div>

      <Table />
      <Socialmedia />
      <Alert />
    </div>
  );
};

export default DashBoard;
