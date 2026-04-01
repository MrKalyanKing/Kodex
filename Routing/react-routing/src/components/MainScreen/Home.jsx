import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebar/sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      {/* Navbar - Fixed height at top */}
      <div className="h-16 w-full flex-shrink-0">
        <Navbar />
      </div>

      {/* Main body area below navbar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Constant height scrollable if needed */}
        <Sidebar />

        {/* Dynamic content area */}
        <main className="flex-1 overflow-y-auto relative bg-gray-100">
          <div className="p-8 h-full min-h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;

