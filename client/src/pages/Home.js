import React, { useContext , useEffect } from "react";
import FormReg from "../components/FormReg";
import {UserContext} from '../context/context'
import "./Home.css";
function Home() {
  const context = useContext(UserContext)
  useEffect(() => {
  // context.loadUser()
  }, [])
  return (
    <>
      <div className="container-fluid" id="home">
        <div className="row">
          <div className="col-lg-6 bg d-md-block d-lg-block d-none col-md-6">
            {/* <div className="bg">6</div> */}7
          </div>
          <div className="col-lg-6 col-md-6">
            <FormReg/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
