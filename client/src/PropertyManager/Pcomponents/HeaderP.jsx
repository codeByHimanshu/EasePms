import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export default function HeaderP() {
  const [openNav, setOpenNav] = useState(false);
  const [showQuickReservation, setShowQuickReservation] = useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleAddReservationClick = () => {
    setShowQuickReservation(true);
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium text-gray-600"
      >
        <NavLink to="dashboard">Dashboard</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium text-gray-600"
      >
        <NavLink to="reservations">Reservations</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium text-gray-600"
      >
        <a href="#" className="flex items-center">
          Rates
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium text-gray-600"
      >
        <a href="#" onClick={handleAddReservationClick}>
          AddReservation
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium text-gray-600 relative group"
      >
        <a href="#" className="flex items-center">
          Options
        </a>
        <div className="dropdown-content mt-2 hidden absolute bg-white shadow-lg rounded-lg group-hover:block">
          <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center z-20">
            <ul>
              <li className="p-2 w-full m-2 hover:bg-gray-100">
                <a href="#">Room View</a>
              </li>
              <li className="p-2 w-full m-2 hover:bg-gray-100">
                <a href="#">Guest Reviews</a>
              </li>
              <li className="p-2 w-full m-2 hover:bg-gray-100">
                <a href="#">AddReservations</a>
              </li>
              <li className="p-2 w-full m-2 hover:bg-gray-100">
                <a href="#">Reservations</a>
              </li>
            </ul>
            <ul>
              <li className="p-2 w-full m-2 hover:bg-gray-100">
                <a href="#">Rates</a>
              </li>
              <li className="p-2 w-full m-2 hover:bg-gray-100">
                <a href="#">Stay View</a>
              </li>
              <li className="p-2 w-full m-2 hover:bg-gray-100">
                <a href="#">Analytics</a>
              </li>
              <li className="p-2 w-full m-2 hover:bg-gray-100">
                <a href="#">Dashboard</a>
              </li>
            </ul>
          </div>
        </div>
      </Typography>
    </ul>
  );

  const QuickReservation = () => {
    const [checkinDate, setCheckinDate] = useState("");
    const [checkoutDate, setCheckoutDate] = useState("");
    const [rooms, setRooms] = useState(1);

    const handleDateChange = (e, type) => {
      const value = e.target.value;
      if (type === "checkin") {
        setCheckinDate(value);
        if (checkoutDate && new Date(value) >= new Date(checkoutDate)) {
          setCheckoutDate("");
        }
      } else {
        setCheckoutDate(value);
      }
    };

    const currentDate = new Date().toISOString().slice(0, 16);

    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
       <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Quick Reservation</h2>
          <form>
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Check-in Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={checkinDate}
                    onChange={(e) => handleDateChange(e, "checkin")}
                    min={currentDate}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Check-out Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={checkoutDate}
                    onChange={(e) => handleDateChange(e, "checkout")}
                    min={checkinDate || currentDate}
                    disabled={!checkinDate}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Number of Rooms
                  </label>
                  <input
                    type="number"
                    className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    min="1"
                    max="10"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mt-8 mb-4">Rate & Room Plans</h3>
            {Array.from({ length: rooms }, (v, index) => (
              <div key={index} className="grid grid-cols-6 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Room Type
                  </label>
                  <input
                    id="room-type"
                    name="roomType"
                    list="roomTypeOptions"
                    className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Select Room Type"
                  />
                  <datalist id="roomTypeOptions">
                    <option value="Delux Room" />
                    <option value="Suit Room" />
                    <option value="Twin With Bathroom" />
                    <option value="Executive Room" />
                    <option value="Standard Room" />
                    <option value="Bussiness Room" />
                  </datalist>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Rate Plan
                  </label>
                  <input
                    id="ratePlan"
                    name="ratePlan"
                    list="ratePlanOptions"
                    className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Select Rate Plan"
                  />
                  <datalist id="ratePlanOptions">
                    <option value="EP" />
                    <option value="CP" />
                  </datalist>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Room Number
                  </label>
                  <input
                    id="room-number"
                    name="roomNumber"
                    list="roomNumberOptions"
                    className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Select Room Number"
                  />
                  <datalist id="roomNumberOptions">
                    <option value="101" />
                    <option value="102" />
                    <option value="103" />
                    <option value="104" />
                    <option value="105" />
                    <option value="106" />
                    <option value="107" />
                    <option value="108" />
                    <option value="109" />
                    <option value="110" />
                    <option value="111" />
                  </datalist>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Adults
                  </label>
                  <input
                    id="adults"
                    name="adults"
                    list="adultsOptions"
                    className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Select Adults"
                  />
                  <datalist id="adultsOptions">
                    <option value="1" />
                    <option value="2" />
                    <option value="3" />
                  </datalist>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Children
                  </label>
                  <input
                    id="children"
                    name="children"
                    list="childrenOptions"
                    className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Select Children"
                  />
                  <datalist id="childrenOptions">
                    <option value="1" />
                    <option value="2" />
                  </datalist>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Total Amount
                  </label>
                  <input
                    id="total-amount"
                    name="totalAmount"
                    className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Total Amount"
                  />
                </div>
              </div>
            ))}
            <h3 className="text-xl font-semibold mt-8 mb-4">Guest Information</h3>
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4">
            <button onClick={() => setShowQuickReservation(false)} className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-600"> 
               <NavLink to="addreservation">
              More Options
            </NavLink>
            </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar className="mx-auto max-w-full px-4 py-2 lg:px-8 lg:py-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-bold text-4xl text-blue-700"
          >
            EasePms <sub className="text-sm">By DigiPants</sub>
          </Typography>
          <div className="hidden items-center gap-x-2 lg:flex">
            <div className="relative flex w-full gap-2 md:w-max">
              <Input
                type="search"
                placeholder="Search"
                containerProps={{
                  className: "min-w-[288px]",
                }}
                className="!border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div className="!absolute left-3 top-[13px]">
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                    fill="#CFD8DC"
                  />
                  <path
                    d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                    stroke="#CFD8DC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <Button size="md" className="rounded-lg bg-blue-700">
              Search
            </Button>
          </div>
          <hr className="mb-3 mt-6 hidden w-full lg:block" />
          <IconButton
            variant="text"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
          <div className="hidden lg:block">{navList}</div>
        </div>
        <Collapse open={openNav}>
          <div className="container mx-auto">
            {navList}
            <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
              <div className="relative w-full gap-2 md:w-max">
                <Input
                  type="search"
                  placeholder="Search"
                  containerProps={{
                    className: "min-w-[288px]",
                  }}
                  className="!border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <div className="!absolute left-3 top-[13px]">
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                      fill="#CFD8DC"
                    />
                    <path
                      d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                      stroke="#CFD8DC"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <Button size="md" className="mt-1 rounded-lg sm:mt-0">
                Search
              </Button>
            </div>
          </div>
        </Collapse>
      </Navbar>
      {showQuickReservation && <QuickReservation />}
    </>
  );
}
