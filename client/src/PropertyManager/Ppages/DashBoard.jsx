
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
        <div className="w-fit flex justify-between space-x-1 sm:w-full s  md:w-full lg:flex  lg:bg-green-600 lg:w-full sm:grid sm:grid-cols-1 new-class-piecircle">
          <div className="m-1">
            <div className="w-full rounded-none bg-red-500">
              pie circle one
            </div>
          </div>
          <div className="m-1">
            <div className="w-full rounded-none bg-green-800">
              pie circle two
            </div>
            <div></div>
          </div>
          <div className="m-1">
            <div className="w-full rounded-none bg-yellow-800">
              pie cirlce two
            </div>
            <div></div>
          </div>
          <div className="m-1">
            <div className="w-full rounded-none bg-black text-white ">
              pie circle four
            </div>
          </div>

        </div>
      </div>
      <div className="flex justify-between shadow-md py-12  sm:grid sm:grid-cols-1 sm:w-auto  lg:max-w-full lg:flex lg:space-x-2 bg-yellow-700 new-class">
        <div className="w-1/2 flex flex-col shadow-md py-8 space-y-16  rounded-lg bg-red-800 sm:w-full newclass-wf">
          <div
            style={{ borderBottom: "1px solid gray" }}
            className="mx-1 w-auto"
          >
            Notifications
          </div>
          <div className="w-auto flex flex-row justify-between items-center px-4 new-class">
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
          <div className="w-full flex flex-row justify-between items-center px-4 new-class">
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

          <div className="w-full flex flex-row justify-between items-center px-4 new-class">
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
        <div className="w-1/2 flex flex-col shadow-md py-8 space-y-16  rounded-lg bg-green-800 sm:w-full newclass-wf">
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-semibold">Activity Feed</div>
            <div className="">
              <select
                name="activityFilter"
                id="activityFilter"
                className="border border-gray-300 rounded-md "
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
                <div className="flex justify-between newclass-wf">
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
