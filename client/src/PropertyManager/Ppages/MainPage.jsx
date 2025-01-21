import React from 'react'
import { NavLink,Outlet} from 'react-router-dom'
import HeaderP from '../Pcomponents/HeaderP'
function MainPage() {
  return(
    <div>
      <div>
        <div class="">
          <HeaderP />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
export default MainPage;
