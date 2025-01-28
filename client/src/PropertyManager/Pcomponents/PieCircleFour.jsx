import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

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

export default function PieCircleFour({
  label1,
  label2,
  label3,
  label4,
  label5,
  label6,
}) {
  return (
    <Card className="p-4">
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
        <div className="flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <div
              className="w-2.5 h-2.5 bg-red-500 rounded-full "
              style={{ backgroundColor: "#50A5F1" }}
            ></div>

            <span className="">{label1}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-2">
              <div
                className="w-2.5 h-2.5  rounded-full"
                style={{ backgroundColor: "#0068FF" }}
              ></div>
              <span>{label2}</span>
              <span>{0}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className="w-2.5 h-2.5  rounded-full"
                style={{ backgroundColor: "#F8B505" }}
              ></div>
              <span>{label3}</span>
              <span>{0}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className="w-2.5 h-2.5 bg-red-500 rounded-full"
                style={{ backgroundColor: "#34C38F" }}
              ></div>
              <span>{label4}</span>
              <span>{0}</span>
            </div>
            <div className="flex items-center space-x-2 text-1xl">
              <div
                className="w-2.5 h-2.5 bg-red-500 rounded-full"
                style={{ backgroundColor: "#F46A6A" }}
              ></div>
              <span>{label5}</span>
              <span>{0}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
              <span>{label6}</span>
              <span>{0}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
