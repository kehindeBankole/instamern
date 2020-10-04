import React , { useContext } from  "react";
import { UserContext } from "../context/context";
import {Link} from 'react-router-dom'
function Nav() {
    const context = useContext(UserContext)
    if(context.isAuth && context.error!=="user already exsits"){
      return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3">
          <a class="navbar-brand" href="/#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                {/* <a class="nav-link" href="/#">Home <span class="sr-only">(current)</span></a> */}
              </li>
              <li class="nav-item">
                {/* <a class="nav-link" href="/#">Link</a> */}
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login">sign in</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login" onClick={context.logout}>logout</Link>
              </li>
            </ul>
          </div>
        </nav>
          );
    }
   return null

}

export default Nav;
