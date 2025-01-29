import HeaderP from '../Pcomponents/HeaderP'
import ApexCharts from 'apexcharts'
import { useEffect } from "react";


function Navbar() {
    return (
        <div className='flex justify-between m-2 p-3 bg-gray-700'>
            <div className='m-1 p-2'>Guest Statistics</div>
            <div className='flex space-x-4 w-auto'>
                <div className='flex justify-between '>
                    <div className='m-1 p-2 bg-red-800 px-10 py-2 border rounded'>
                        From :<input type='date'></input>
                    </div>
                    <div className='m-1 p-2 bg-green-800 px-10 py-2 border rounded'>
                        To :<input type='date'></input>
                    </div>
                </div>
                <div className='flex flex-row space-x-1 '>
                    <div className='m-1 p-2 bg-pink-300 border rounded'>Online Agency</div>
                    <div className='m-1 p-2 bg-yellow-400 border rounded'>All Bookings</div>
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

function GuestStats() {
    return (
        <>
            <Navbar />
            <div className='mt-2 flex-col border m-4 p-4 bg-red-400 w-auto'>
                <div className=''><h2>Counteries your Guest are Coming from</h2>
                <div className=''>
                    <div className="">
                        <div className="w-full max-w-full h-auto flex"><Charts /></div>
                    </div>
                </div>
                
                </div>
                
            </div>
        </>
    )
}
export default GuestStats