import React from 'react'
import { NavLink,Outlet} from 'react-router-dom'
function MainPage() {
  return(
    <div>
      <div>
        <div class="">
          <NavLink to="dashboard">Dashboard</NavLink>
          
        </div>
        <Outlet />
      </div>
    </div>
  );
}
export default MainPage;
