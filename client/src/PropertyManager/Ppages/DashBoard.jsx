import PieCircleFour from "../Pcomponents/PieCircleFour";
import PieCircleOne from "../Pcomponents/PieCircleOne";
import PieCircleThree from "../Pcomponents/PieCircleThree";
import PieCircleTwo from "../Pcomponents/PieCircleTwo";

function Dashboard() {
  return (
    <div>
      dashborad
      <div className="graph wala div w-full  flex space-x-2">
        <div className="" style={{ height: '10px', width: '200px' }}>
        <PieCircleOne  />
        </div>
        <div className="" style={{ height: '10px', width: '200px' }}>
          <PieCircleTwo />
        </div>
        <div className="" style={{ height: '10px', width: '200px' }}>
          <PieCircleThree />
        </div>
        <div className="" style={{ height: '10px', width: '200px' }}>
          <PieCircleFour />
        </div>
        
      </div>
    </div>
  );
}
export default Dashboard;
