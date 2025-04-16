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
 hotelid: { type: String, ref: "UserLogin" },
    roomname: {
        type: [String],
        required: true,
        index: true
    },
    pricepernight: { type: Number, required: true },
    roomnumber: { type: Number, required: true },
    adults: {
        type: Number,
        required: true,
        min: 1,
    },
    children: {
        type: Number,
        default: 0,
        min: 0,
    },

    isavailable: {
        type: Boolean,
        default: true
    },
    images: {
        type: [String],
        default: []
    },
    roomnumber: {
        type: Number,
        unique: true,
        required: true
    },
    amenties: {
        type: [String],
        required: true,
    },
    roomtype: {
        enum: ["EP", "CP"]
    }
*/