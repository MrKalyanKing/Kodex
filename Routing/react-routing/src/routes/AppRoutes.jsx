import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Home from "../components/MainScreen/Home";

// Dashboard Pages
import Analytics from "../pages/dashboard/Analytics";
import Ecommerce from "../pages/dashboard/Ecommerce";
import Crypto from "../pages/dashboard/Crypto";

// Pages
import Settings from "../pages/Pages/Settings";
import Projects from "../pages/Pages/Projects";
import Orders from "../pages/Pages/Orders";
import Pricing from "../pages/Pages/Pricing";
import Chat from "../pages/Pages/Chat";
import Blank from "../pages/Pages/Blank";

// UI Elements
import Alerts from "../pages/ui/Alerts";
import Buttons from "../pages/ui/Buttons";
import Cards from "../pages/ui/Cards";
import Grid from "../pages/ui/Grid";

// Forms
import BasicInputs from "../pages/Forms/BasicInputs";
import FormLayouts from "../pages/Forms/FormLayouts";
import InputLayouts from "../pages/Forms/InputLayouts";

// Charts
// import ChartJS from "../pages/Charts/ChartJS";
import ChartJS from "../pages/Charts/Chartjs";
import ApexCharts from "../pages/Charts/ApexCharts";

// Maps
import GoogleMap from "../pages/maps/GoogleMap";
import VectorMap from "../pages/maps/VectorMap";
import MapBox from "../pages/maps/MapBox";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {/* Dashboard */}
        <Route index element={<Analytics />} />
        <Route path="ecommerce" element={<Ecommerce />} />
        <Route path="crypto" element={<Crypto />} />

        {/* Pages */}
        <Route path="pages">
          <Route path="settings" element={<Settings />} />
          <Route path="projects" element={<Projects />} />
          <Route path="orders" element={<Orders />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="chat" element={<Chat />} />
          <Route path="blank" element={<Blank />} />
        </Route>

        {/* UI Elements */}
        <Route path="uielement">
          <Route path="alerts" element={<Alerts />} />
          <Route path="buttons" element={<Buttons />} />
          <Route path="cards" element={<Cards />} />
          <Route path="grid" element={<Grid />} />
        </Route>

        {/* Forms */}
        <Route path="forms">
          <Route path="basic-inputs" element={<BasicInputs />} />
          <Route path="layouts" element={<FormLayouts />} />
          <Route path="input-layouts" element={<InputLayouts />} />
        </Route>

        {/* Charts */}
        <Route path="charts">
          <Route path="chartjs" element={<ChartJS />} />
          <Route path="apexcharts" element={<ApexCharts />} />
        </Route>

        {/* Maps */}
        <Route path="map">
          <Route path="google" element={<GoogleMap />} />
          <Route path="vector" element={<VectorMap />} />
          <Route path="mapbox" element={<MapBox />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;