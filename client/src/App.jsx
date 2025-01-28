// App.js
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { AppRoutes } from "./PropertyManager/PRoutes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <AppRoutes />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;