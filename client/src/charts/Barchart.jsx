import React from "react";
import { Chart } from "react-google-charts";
import { useCart } from "../context/cart";

// const Cost = () => {
//   const [cart, setCart] = useCart();
//   try {
//     let cost = 0;
//     cart?.map((item) => {
//       cost = cost + item.price;
//     });
//     return cost * 100;
//   } catch (error) {
//     console.log(error);
//   }
// }
// let value = Cost();

export const data = [
  
  [  "Year", "Sales"],
  // [ "400, 200],
  [  "2016", 350],
  // ["2016",  value],
  ["2017",   250],
];

export const options = {
  // chart: {
  //   title: "Company Performance",
  //   subtitle: "Sales, Expenses, and Profit: 2014-2017",
  // },
  // colors: ["rgb(53, 138, 148)", "rgb(37, 11,165)", "#188310"],
};

export default function Barchart() {
  return (
    <div align="center"
    style={{margin: "25vh"}}
    ><Chart
    chartType="Bar"
    width="90%"
    height="450px"
    data={data}
    options={options}
  /></div>
    
  );
}
// import React from "react";
// import { useCart } from "../context/cart";
// // import classes from "./barchart.module.css";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";



// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// function BarChart() {
//   const [cart, setCart] = useCart();
//   const categorySales = cart?.map((item) => item.categorySales);
//   const labels = cart?.map((item) => item.name);

//   const state = {
//     labels: labels,
//     datasets: [
//       {
//         label: "Sales",
//         data: categorySales,
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(255, 159, 64, 0.2)",
//           "rgba(255, 205, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(201, 203, 207, 0.2)",
//         ],
//         borderColor: [
//           "rgb(255, 99, 132)",
//           "rgb(255, 159, 64)",
//           "rgb(255, 205, 86)",
//           "rgb(75, 192, 192)",
//           "rgb(54, 162, 235)",
//           "rgb(153, 102, 255)",
//           "rgb(201, 203, 207)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {};

//   return (
//     <div>
//       <Bar width={300} height={300} data={state} options={options} />
//       <p style={{ textAlign: "center" }}>Orders</p>
//     </div>
//   );
// }

// export default BarChart;
