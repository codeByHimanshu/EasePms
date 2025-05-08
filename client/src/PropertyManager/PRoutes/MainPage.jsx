import React from 'react'
import HeaderP from '../Pcomponents/HeaderP'
import { Outlet } from 'react-router-dom';
function MainPage() {
  return(
    <div>
      <div>
        <div>
        {/* <LoginPage/> */}
          <HeaderP />
          <Outlet/>
        </div>
       
      </div>
    </div>
  );
}
export default MainPage;

// gibrish changesssssssssss
              