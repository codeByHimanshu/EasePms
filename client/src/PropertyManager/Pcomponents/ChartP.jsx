// import React, { Component } from "react";
// import Chart from "react-apexcharts";

// class ChartP extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           id: "basic-bar"
//         },
//         xaxis: {
//           categories: ["Clean", "HkAssign", "Dirty", "Block"]
//         }
//       },
//       series: [
//         {
//           name: "series-1",
//           data: [30, 40, 45, 50]
//         }
//       ]
//     };
//   }

//   render() {
//     return (
//       <div className="app">
//         <div className="row">
//           <div className="mixed-chart">
//             <Chart
//               options={this.state.options}
//               series={this.state.series}
//               type="bar"
//               width="400"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default ChartP;