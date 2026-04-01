import Route from "./Route";

export const DashboardDropDown = [
  { name: "Analytics", path: "" },         
  { name: "E-commerce", path: "ecommerce" },
  { name: "Crypto", path: "crypto" },        
];

export const PagesDropDown = [
  { name: "Settings", path: `${Route.pages}/settings` },
  { name: "Projects", path: `${Route.pages}/projects` },
  { name: "Orders", path: `${Route.pages}/orders` },
  { name: "Pricing", path: `${Route.pages}/pricing` },
  { name: "Chat", path: `${Route.pages}/chat` },
  { name: "Blank Page", path: `${Route.pages}/blank` },
];

export const formDropDown = [
  { name: "Basic Inputs", path: `${Route.forms}/basic-inputs` },
  { name: "Form Layouts", path: `${Route.forms}/layouts` },
  { name: "Input Layouts", path: `${Route.forms}/input-layouts` },
];

export const uiElementDropDown = [
  { name: "Alerts", path: `${Route.uielement}/alerts` },
  { name: "Buttons", path: `${Route.uielement}/buttons` },
  { name: "Cards", path: `${Route.uielement}/cards` },
  { name: "Grid", path: `${Route.uielement}/grid` },
];

export const mapsDropDown = [
  { name: "Google Maps", path: `${Route.map}/google` },
  { name: "Vector Maps", path: `${Route.map}/vector` },
  { name: "Map Box", path: `${Route.map}/mapbox` },
];

export const chartDropDown = [
  { name: "Chart.js", path: `${Route.charts}/chartjs` },
  { name: "ApexCharts", path: `${Route.charts}/apexcharts` },
];