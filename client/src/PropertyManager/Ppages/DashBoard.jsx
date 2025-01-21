import ChartP from "../Pcomponents/ChartP";
import PieCircleFour from "../Pcomponents/PieCircleFour";
import PieCircleOne from "../Pcomponents/PieCircleOne";
import PieCircleThree from "../Pcomponents/PieCircleThree";
import PieCircleTwo from "../Pcomponents/PieCircleTwo";

function Dashboard() {
  return (
    <div className="flex">
      <div className="w-fit  flex justify-between space-x-1 " >
        <div className="m-1" >
          <div className="w-full rounded-none" >
            <PieCircleOne label1={"Arrival"} label2={"Pending"} label3={"Arrived"} />
          </div>
          <div>
            
          </div>
        </div>
        <div className="m-1" >
          <div className="w-full rounded-none" >
            <PieCircleTwo label1={"Departure"} label2={"Pending"} label3={"CheckOut"} />
          </div>
          <div>
            
          </div>
        </div>
        <div className="m-1" >
          <div className="w-full rounded-none" >
            <PieCircleThree label1={"Arrival"} label2={"Pending"} label3={"Arrived"} />
          </div>
          <div>
            
          </div>
        </div>
        <div className="m-1" >
          <div className="w-full rounded-none" >
            <PieCircleFour label1={"Room Status"} label2={"Vacant"} label3={"Sold"} label4={"Day Use"} label5={"Complimentary"} label6={"Blocked"}/>
          </div>
        </div>
        <div className="m-1" >
          <div className="w-full rounded-none" >
            <ChartP/>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Dashboard;


