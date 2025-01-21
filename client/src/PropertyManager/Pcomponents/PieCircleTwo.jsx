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
    series: [44, 55, 13, 43, 22],
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
      colors: ["#596d86","#0360e7"],
      legend: {
        show: false,
      },
    },
  };
  
  export default function PieCircleTwo() {
    return (
      <Card>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
        >
          <div>
            <Typography
              variant="small"
              color="gray"
              className="max-w-sm font-normal"
            ></Typography>
          </div>
        </CardHeader>
        <CardBody className="mt-4 grid place-items-center px-2">
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
    );
  }
  