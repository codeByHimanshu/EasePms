
import PieCircleFour from "../Pcomponents/PieCircleFour";
import PieCircleOne from "../Pcomponents/PieCircleOne";
import PieCircleThree from "../Pcomponents/PieCircleThree";
import PieCircleTwo from "../Pcomponents/PieCircleTwo";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaCalendar } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { LuSmartphone } from "react-icons/lu";
import { AiFillMessage } from "react-icons/ai";
import { FaRegCreditCard } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

function Dashboard() {
  return (
    <>
      <div className="flex">
        <div className="w-fit  flex justify-between space-x-1 ">
          <div className="m-1">
            <div className="w-full rounded-none">
              <PieCircleOne
                label1={"Arrival"}
                label2={"Pending"}
                label3={"Arrived"}
              />
            </div>
            <div></div>
          </div>
          <div className="m-1">
            <div className="w-full rounded-none">
              <PieCircleTwo
                label1={"Departure"}
                label2={"Pending"}
                label3={"CheckOut"}
              />
            </div>
            <div></div>
          </div>
          <div className="m-1">
            <div className="w-full rounded-none">
              <PieCircleThree
                label1={"Arrival"}
                label2={"Pending"}
                label3={"Arrived"}
              />
            </div>
            <div></div>
          </div>
          <div className="m-1">
            <div className="w-full rounded-none">
              <PieCircleFour
                label1={"Room Status"}
                label2={"Vacant"}
                label3={"Sold"}
                label4={"Day Use"}
                label5={"Complimentary"}
                label6={"Blocked"}
              />
            </div>
          </div>
      
        </div>
      </div>
      <div className="flex justify-between space-x-2 shadow-md py-12 space-y-8">
        <div
          className="first w-1/2 flex flex-col shadow-md py-8 space-y-16  rounded-lg"
        >
          <div
            style={{ borderBottom: "1px solid gray" }}
            className="mx-1 w-auto"
          >
            Notifications
          </div>
          <div className="w-auto flex flex-row justify-between items-center px-4">
            <div className="flex space-x-2">
              <div className="text-xl text-gray-600 p-2 mx-2 my-2 bg-gray-200 rounded-lg">
                <LuCircleDollarSign />
              </div>
              <div>
                <div>0</div>
                <div>some text </div> 
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="text-xl text-gray-600 p-2 mx-2 my-2 bg-gray-200 rounded-lg">
                <FaCalendar />
              </div>
              <div>
                <div>0</div>
                <div>some text </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="text-xl text-gray-600 p-2 mx-2 my-2 bg-gray-200 rounded-lg">
                <FaClipboardCheck />
              </div>
              <div>
                <div>0</div>
                <div>some text </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-center px-4">
            <div className="flex space-x-2">
              <div className="text-xl text-gray-600 p-2 mx-2 my-2 bg-gray-200 rounded-lg">
                <FaBed />
              </div>
              <div>
                <div>0</div>
                <div>some text </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="text-xl text-gray-600 p-2 mx-2 my-2 bg-gray-200 rounded-lg">
                <LuSmartphone />
              </div>
              <div>
                <div>0</div>
                <div>some text</div>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="text-xl text-gray-600 p-2 mx-2 my-2 bg-gray-200 rounded-lg">
                <AiFillMessage />
              </div>
              <div>
                <div>0</div>
                <div>some text</div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-row justify-between items-center px-4">
            <div className="flex space-x-2">
              <div className="text-xl text-gray-600 p-2 mx-2 my-2 bg-gray-200 rounded-lg">
                <FaRegCreditCard />
              </div>
              <div>
                <div>0</div>
                <div>some text</div>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="text-xl text-gray-600 p-2 mx-2 my-2 bg-gray-200 rounded-lg">
                <AiOutlineLike />
              </div>
              <div>
                <div>0</div>
                <div>some text</div>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="text-xl text-gray-600 p-2 mx-2 my-2 bg-gray-200 rounded-lg">
                <FaFileAlt />
              </div>
              <div>
                <div>0</div>
                <div>some text</div>
              </div>
            </div>
          </div>
        </div>
        <div className="second w-1/2 bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-semibold">Activity Feed</div>
            <div>
              <select
                name="activityFilter"
                id="activityFilter"
                className="border border-gray-300 rounded-md p-2"
              >
                <option value="">Select Option</option>
                <option value="all">All Activities</option>
                <option value="recent">Recent Activities</option>
              </select>
            </div>
          </div>
          <div className="overflow-y-scroll h-64 bg-gray-100 rounded-md p-4">
            <div className="flex flex-col">
              <div>
                <div className="flex justify-between">
                  <div>
                    <span>some text here</span>
                    <p>2h ago</p>
                  </div>
                  <div>
                    <button className="bg-green-400 text-white p-1/2 px-1 py-1 rounded-sm">Arrived</button>
                  </div>
                </div>
              </div>  
              <div>
                <div className="flex justify-between">
                  <div>
                    <span>some text here</span>
                    <p>2h ago</p>
                  </div>
                  <div>
                    <button className="bg-black text-wh,  2 px-1 py-1 rounded-sm">Arrived</button>
                  </div>
                </div>
              </div>  
              <div>
                <div className="flex justify-between">
                  <div>
                    <span>some text here</span>
                    <p>2h ago</p>
                  </div>
                  <div>
                    <button className="bg-black text-white p-1/2 px-1 py-1 rounded-sm">Arrived</button>
                  </div>
                </div>
              </div>  
              <div>
                <div className="flex justify-between">
                  <div>
                    <span>some text here</span>
                    <p>2h ago</p>
                  </div>
                  <div>
                    <button className="bg-black text-white p-1/2 px-1 py-1 rounded-sm">Arrived</button>
                  </div>
                </div>
              </div>  
              <div>
                <div className="flex justify-between">
                  <div>
                    <span>some text here</span>
                    <p>2h ago</p>
                  </div>
                  <div>
                    <button className="bg-black text-white p-1/2 px-1 py-1 rounded-sm">Arrived</button>
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
