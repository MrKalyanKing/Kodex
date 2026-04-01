import React, { useState } from 'react'
import { ChartSpline, LayoutDashboard, NotebookText, MoveRight, Columns3, FileText, Activity, MapPin } from 'lucide-react';
import { DashboardDropDown, PagesDropDown, formDropDown, uiElementDropDown, mapsDropDown, chartDropDown } from '../utils/data';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false)
    const [showDashboard, setShowDashboard] = useState(true)
    const [showPages, setShowPages] = useState(false)
    const [showUI, setShowUI] = useState(false)
    const [showForms, setShowForms] = useState(false)
    const [showCharts, setShowCharts] = useState(false)
    const [showMaps, setShowMaps] = useState(false)

    const DropdownSection = ({ title, icon, items, isOpen, toggle }) => (
        <>
            <div className='flex justify-between p-2 items-center'>
                <div onClick={toggle} className='cursor-pointer flex gap-2 items-center transition-colors hover:text-blue-500'>
                    <span>{icon}</span>
                    {!collapsed && <h1 className='font-bold'>{title}</h1>}
                </div>
                {!collapsed && (
                    <div>
                        <span onClick={toggle} className={`font-bold cursor-pointer transition-transform duration-200 inline-block ${isOpen ? 'rotate-180' : ''}`}>
                            ^
                        </span>
                    </div>
                )}
            </div>
            {!collapsed && isOpen && (
                <div className='p-2'>
                    <ul className='cursor-pointer '>
                        {items.map((item, idx) => (
                            <li key={idx} className='p-2 rounded bg-blue-100 hover:bg-blue-200 mb-2 transition-all'>
                                <Link className='flex items-center gap-4' to={`/${item.path}`}> 
                                    <MoveRight size={16} /> 
                                    <span className="text-sm font-medium">{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );

    return (
        <div className={`${collapsed ? "w-[80px]" : "w-[260px]"} bg-white min-h-screen border-r border-gray-200 shadow-sm transition-all duration-300`}>
            <div className="flex justify-between items-center p-4 border-b border-gray-100 mb-4">
                {!collapsed && <h1 className='cursor-pointer font-bold text-xl text-blue-600'>Kalyan.io</h1>}
                <button 
                    onClick={() => setCollapsed((prev) => !prev)} 
                    className='p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500'
                > 
                    <Columns3 size={20} /> 
                </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(100vh-100px)] px-2">
                <DropdownSection 
                    title="Dashboard" 
                    icon={<LayoutDashboard size={20} />} 
                    items={DashboardDropDown} 
                    isOpen={showDashboard} 
                    toggle={() => setShowDashboard(!showDashboard)} 
                />

                <DropdownSection 
                    title="Pages" 
                    icon={<NotebookText size={20} />} 
                    items={PagesDropDown} 
                    isOpen={showPages} 
                    toggle={() => setShowPages(!showPages)} 
                />

                <DropdownSection 
                    title="UI Elements" 
                    icon={<ChartSpline size={20} />} 
                    items={uiElementDropDown} 
                    isOpen={showUI} 
                    toggle={() => setShowUI(!showUI)} 
                />

                <DropdownSection 
                    title="Forms" 
                    icon={<FileText size={20} />} 
                    items={formDropDown} 
                    isOpen={showForms} 
                    toggle={() => setShowForms(!showForms)} 
                />

                <DropdownSection 
                    title="Charts" 
                    icon={<Activity size={20} />} 
                    items={chartDropDown} 
                    isOpen={showCharts} 
                    toggle={() => setShowCharts(!showCharts)} 
                />

                <DropdownSection 
                    title="Maps" 
                    icon={<MapPin size={20} />} 
                    items={mapsDropDown} 
                    isOpen={showMaps} 
                    toggle={() => setShowMaps(!showMaps)} 
                />
            </div>
        </div>
    )
}

export default Sidebar