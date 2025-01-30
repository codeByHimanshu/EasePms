import HeaderP from '../Pcomponents/HeaderP'
import ApexCharts from 'apexcharts'
import { useEffect } from "react";
import React, { useMemo } from "react";
import dynamic from "next/dynamic";

import {
    Card,
    CardBody,
    Typography,
    Button,
    CardFooter,
} from "@material-tailwind/react";

import { TEChart } from "tw-elements-react";


const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


import merge from "deepmerge";


function Navbar() {
    return (
        <div className='flex justify-between m-2 p-3 bg-gray-100 rounded border'>
            <div className='m-1 p-2'>Guest Statistics</div>
            <div className='flex space-x-4 w-auto'>
                <div className='flex justify-between '>
                    <div className='m-1 p-2 bg-white px-10 py-2 border rounded'>
                        From :<input type='date'></input>
                    </div>
                    <div className='m-1 p-2 bg-white px-10 py-2 border rounded'>
                        To :<input type='date'></input>
                    </div>
                </div>
                <div className='flex flex-row space-x-1 '>
                    <div className='m-1 p-2 bg-blue-600 border rounded'>Online Agency</div>
                    <div className='m-1 p-2 bg-gray-400 border rounded'>All Bookings</div>
                </div>
            </div>
        </div>
    )
}
function Charts() {
    useEffect(() => {
        if (document.getElementById("line-chart") && typeof ApexCharts !== "undefined") {
            const options = {
                chart: {
                    height: "100%",
                    maxWidth: "100%",
                    type: "line",
                    fontFamily: "Inter, sans-serif",
                    dropShadow: { enabled: false },
                    toolbar: { show: false },
                },
                tooltip: { enabled: true, x: { show: false } },
                dataLabels: { enabled: false },
                stroke: { width: 6, curve: "smooth" },
                grid: {
                    show: true,
                    strokeDashArray: 4,
                    padding: { left: 2, right: 2, top: -26 },
                },
                series: [
                    { name: "Code", data: [6500, 6418, 6456, 6526, 6356, 6456], color: "#1A56DB" },
                    { name: "Code", data: [6456, 6356, 6526, 6332, 6418, 6500], color: "#7E3AF2" },
                ],
                legend: { show: false },
                xaxis: {
                    categories: ["01 Feb", "02 Feb", "03 Feb", "04 Feb", "05 Feb", "06 Feb", "07 Feb"],
                    labels: {
                        show: true,
                        style: {
                            fontFamily: "Inter, sans-serif",
                            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
                        },
                    },
                    axisBorder: { show: false },
                    axisTicks: { show: false },
                },
                yaxis: { show: false },
            };

            const chart = new ApexCharts(document.getElementById("line-chart"), options);
            chart.render();

            return () => chart.destroy();
        }
    }, []);

    return (
        <div className="max-w-sm w-full bg-white rounded-lg px-9 shadow-sm dark:bg-gray-800 p-4 md:p-6">
            <div className="flex justify-between mb-5">
                <div className="grid gap-4 grid-cols-2">
                    <div>
                        <h5 className="inline-flex items-center text-gray-500 dark:text-gray-400 leading-none font-normal mb-2">
                            Country
                        </h5>
                        <p className="text-gray-900 dark:text-white text-2xl leading-none font-bold">42.3k</p>
                    </div>
                    <div>
                        <h5 className="inline-flex items-center text-gray-500 dark:text-gray-400 leading-none font-normal mb-2">
                            Growth
                        </h5>
                        <p className="text-gray-900 dark:text-white text-2xl leading-none font-bold">$5.40</p>
                    </div>
                </div>
            </div>
            <div id="line-chart"></div>
        </div>
    );
}

function AreaChart({ height = 350, series, colors, options }) {
    const chartOptions = useMemo(() => {
        return {
            colors,
            ...merge(
                {
                    chart: {
                        height: height,
                        type: "area",
                        zoom: { enabled: false },
                        toolbar: { show: false },
                    },
                    title: { show: "" },
                    dataLabels: { enabled: false },
                    legend: { show: false },
                    markers: {
                        size: 0,
                        strokeWidth: 0,
                        strokeColors: "transparent",
                    },
                    stroke: {
                        curve: "smooth",
                        width: 2,
                    },
                    grid: {
                        show: true,
                        borderColor: "#EEEEEE",
                        strokeDashArray: 5,
                        xaxis: { lines: { show: true } },
                        padding: { top: 5, right: 20 },
                    },
                    tooltip: { theme: "light" },
                    yaxis: {
                        labels: {
                            style: {
                                colors: "#757575",
                                fontSize: "12px",
                                fontFamily: "inherit",
                                fontWeight: 300,
                            },
                        },
                    },
                    xaxis: {
                        axisTicks: { show: false },
                        axisBorder: { show: false },
                        labels: {
                            style: {
                                colors: "#757575",
                                fontSize: "12px",
                                fontFamily: "inherit",
                                fontWeight: 300,
                            },
                        },
                    },
                    fill: {
                        type: "gradient",
                        gradient: {
                            shadeIntensity: 1,
                            opacityFrom: 0,
                            opacityTo: 0,
                            stops: [0, 100],
                        },
                    },
                },
                options || {}
            ),
        };
    }, [height, colors, options]);

    return <Chart type="area" height={height} series={series} options={chartOptions} />;
}
function ChartsExample5() {
    return (
        <section className="m-10">
            <Card>
                <CardBody className="!p-2">
                    <div className="flex gap-2 flex-wrap justify-between px-4 !mt-4">
                        <Typography variant="h3" color="blue-gray">
                            $127,092.22
                        </Typography>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-1">
                                <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                                <Typography variant="small" className="font-normal text-gray-600">
                                    2022
                                </Typography>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                                <Typography variant="small" className="font-normal text-gray-600">
                                    2023
                                </Typography>
                            </div>
                        </div>
                    </div>
                    {/** Chart */}
                    <AreaChart
                        colors={["#4CAF50", "#2196F3"]}
                        options={{
                            xaxis: {
                                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                            },
                        }}
                        series={[
                            { name: "2022 Sales", data: [0, 200, 180, 350, 500, 680, 800, 800, 880, 900, 680, 900] },
                            { name: "2023 Sales", data: [200, 160, 150, 260, 600, 790, 900, 660, 720, 800, 500, 800] },
                        ]}
                    />
                </CardBody>
                <CardFooter className="flex gap-6 flex-wrap items-center justify-between">
                    <div>
                        <Typography variant="h6" color="blue-gray">
                            Annual Sales Performance
                        </Typography>
                        <Typography variant="small" className="font-normal text-gray-600 mt-1">
                            Year-to-Date sales comparison
                        </Typography>
                    </div>
                    <Button variant="outlined">View report</Button>
                </CardFooter>
            </Card>
        </section>
    );
}

function ChartBarHorizontal() {
    return (
        
        <TEChart
            type="bar"
            data={{
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                ],
                datasets: [
                    {
                        label: "Traffic",
                        data: [30, 15, 62, 65, 61, 65, 40],
                    },
                ],
            }}
            options={{
                indexAxis: "y",
                scales: {
                    x: {
                        stacked: true,
                        grid: {
                            display: true,
                            borderDash: [2],
                            zeroLineColor: "rgba(0,0,0,0)",
                            zeroLineBorderDash: [2],
                            zeroLineBorderDashOffset: [2],
                        },
                        ticks: {
                            color: "rgba(0,0,0, 0.5)",
                        },
                    },
                    y: {
                        stacked: true,
                        grid: {
                            display: false,
                        },
                        ticks: {
                            color: "rgba(0,0,0, 0.5)",
                        },
                    },
                },
            }}
            darkOptions={{
                indexAxis: "y",
                scales: {
                    x: {
                        stacked: true,
                        grid: {
                            display: true,
                            color: "#555",
                            borderDash: [2],
                            zeroLineColor: "rgba(0,0,0,0)",
                            zeroLineBorderDash: [2],
                            zeroLineBorderDashOffset: [2],
                        },
                        ticks: {
                            color: "#fff",
                        },
                    },
                    y: {
                        stacked: true,
                        grid: {
                            display: false,
                        },
                        ticks: {
                            color: "#fff",
                        },
                    },
                },
            }}
        />
    );
}

function GuestStats() {
    return (
        <>
            <Navbar />
            <div className='mt-2 flex-col  m-4 p-4  w-auto'>
                <div className=''><h2>Counteries your Guest are Coming from</h2>
                    <div className='flex '>
                        <div> <ChartsExample5 /></div>
                        <div> <ChartsExample5 /></div>
                    </div>
                    <div className='flex flex-row'>
                        <div className="flex ml-5">
                            <div className='w-full border max-w-full h-auto flex shadow'><ChartBarHorizontal /></div>
                            <div className="w-full border max-w-full h-auto flex shadow "><Charts /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GuestStats






