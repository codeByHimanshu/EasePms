import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
  import Chart from "react-apexcharts";
  import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
  
  const chartConfig = {
    type: "pie",
    width: 100,
    height: 100,
    series: [50, 50, 13, 43, 22],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "hmlo hmlo",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#0068FF", "#F8B505", "#34C38F", "#F46A6A", "#50A5F1"],
      legend: {
        show: false,
      },
    },
  };
  

 export default function PieCircleThree({ label1, label2, label3 }) {
   return (
     <Card className="p-4" style={{ zIndex: -1 }}>
       <CardHeader
         floated={false}
         shadow={false}
         color="transparent"
         className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
       >
         <div className="text-black text-lg">
           {label1}
           <Typography
             variant="small"
             color="gray"
             className="max-w-sm font-normal"
           ></Typography>
         </div>
       </CardHeader>
       <div className="flex space-x-2 ">
         <div>
           <CardBody className="mt-4 grid place-items-center px-2">
             <Chart {...chartConfig} />
           </CardBody>
         </div>
         <div className="flex flex-col ">
           <div className="flex items-center">
             <div className="flex items-center space-x-2">
               <div
                 style={{
                   width: "8px",
                   height: "8px",
                   backgroundColor: "#0068FF",
                   borderRadius: "50%",
                 }}
               ></div>
               <span>{label2}</span>
             </div>
           </div>
           <div className="flex items-center">
             <div className="flex items-center space-x-2">
               <div
                 style={{
                   width: "8px",
                   height: "8px",
                   backgroundColor: "#F8B505",
                   borderRadius: "50%",
                 }}
               ></div>
               <span>{label3}</span>
               <span>{0}</span>
             </div>
           </div>
         </div>
       </div>
     </Card>
   );
 }
 
  