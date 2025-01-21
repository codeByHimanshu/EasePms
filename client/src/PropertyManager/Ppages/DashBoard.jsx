import PieCircleFour from "../Pcomponents/PieCircleFour";
import PieCircleOne from "../Pcomponents/PieCircleOne";
import PieCircleThree from "../Pcomponents/PieCircleThree";
import PieCircleTwo from "../Pcomponents/PieCircleTwo";

function Dashboard() {
  return (
    <div>
      dashborad
      <div className="graph wala div w-3/4  flex space-x-2">
        <div className="" >
          <div className="w-full" >
            <PieCircleOne label1={"Arrival"} label2={"Pending"} label3={"Arrived"} />
          </div>
          <div>
            <div className="flex mt-2">
            
            </div>
          </div>
        </div>
        <div className="" >
          <div className="w-full" >
            <PieCircleTwo label1={"Arrival"} label2={"Pending"} label3={"Arrived"} />
          </div>
          <div>
            <div className="flex mt-2">
            
            </div>
          </div>
        </div>
        <div className="" >
          <div className="w-full" >
            <PieCircleThree label1={"Arrival"} label2={"Pending"} label3={"Arrived"} />
          </div>
          <div>
            <div className="flex mt-2">
            
            </div>
          </div>
        </div>
        <div className="" >
          <div className="w-full" >
            <PieCircleFour label1={"Arrival"} label2={"Pending"} label3={"Arrived"} />
          </div>
          <div>
            <div className="flex mt-2">
            
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/4"></div>
    </div>
  );
}
export default Dashboard;


