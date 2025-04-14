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

