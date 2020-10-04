import React, { useState, useContext , useEffect} from "react";
import { useHistory } from 'react-router-dom'
import { UserContext } from "../context/context";

function FormReg(props) {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const history = useHistory()
  const context = useContext(UserContext)
  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  function register(e) {
    e.preventDefault();
    context.register(user)
  }
  useEffect(() => {
    if(context.isAuth){
      history.push('/posts')
    }
    if(context.error==="user already exsits"){
      history.push('/login')
    }
   
  }, [context.isAuth , history ])

  return (
    <div>
      <form>
        <div className="form-group">
          <label className="col-form-label" htmlFor="Name">
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="form-control form-control-lg"
            id="Name"
            placeholder="please enter name"
          />
        </div>
        <div className="form-group">
          <label className="col-form-label" htmlFor="Email">
            Email
          </label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            className="form-control form-control-lg"
            id="Email"
            placeholder="please enter email"
          />
        </div>
        <div className="form-group">
          <label className="col-form-label" htmlFor="Password">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="form-control form-control-lg"
            id="Password"
            placeholder="please enter your password"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={register}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default FormReg;
// useEffect(() => {
//   if(context.error==="user already exsits"&& context.isAuth===true){
//     history.push('/')
//     alert("hello")
//   }
//   if(context.isAuth===true && context.error!=="user already exsits"&&context.msg==="user saved successfully"){
//     history.push('/posts')
//   }
//   }, [context.error , context.isAuth])