// App.js
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { AppRoutes } from "./PropertyManager/PRoutes/AppRoutes";
import { ChannelRoutes } from "./ChannelManager/Routes/ChannelRoutes";


function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <AppRoutes />
        <ChannelRoutes />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;

/*
{
            hotelid: req.user.hotelid,
            checkIn,
            checkOut,
            numNights,
            numRooms,
            reservationType,
            bookingSource,
            businessSource,
            marketCode,
            roomType,
            rateType,
            roomNumber,
            numAdults,
            priceforeachroom:room_rate_types[roomType].rate,
            numChildren,
            totalPrice:(room_rate_types[roomType].rate)*numRooms,
            fullname,
            email,
            phone,
            address,
            childrenname,
            childrenage,
            specialRequests,
            status,
["Confirm Booking", "Tentative", "Canceled"],
*/