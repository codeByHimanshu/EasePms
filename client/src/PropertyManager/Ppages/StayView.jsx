import { useEffect } from "react";
import BookingCalendar from "../Pcomponents/BoookingCalendar";

const StayView = () => {

  useEffect(() => {
    const token = localStorage.getItem("access_token")
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/reservation/getallreservations", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },

        });
        console.log(response + "response from stayview");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log("Fetched data:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);



  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">

      <BookingCalendar />

      <h1> i am Stay View Page </h1>
    </div>
  );
};



export default StayView;

