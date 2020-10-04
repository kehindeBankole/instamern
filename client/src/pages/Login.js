import React,{ useState, useContext , useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import {UserContext} from '../context/context'
import './Login.css'
function Login(props) {
    const [user, setUser] = useState({ email: "", password: "" });
    const history = useHistory()
    const context = useContext(UserContext)
    function handleChange(e) {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    }
    function login(e) {
      e.preventDefault();
      context.login(user)
    }
    useEffect(() => {
      if(context.isAuth){
        history.push('/posts')
      }
   // history.push('/')
    context.loadUser()
    }, [context.isAuth , history])
    //
    return (
      <div>
        <form>
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
            onClick={login}
          >
           LOGIN
          </button>
        </form>
      </div>
    );
  }

export default Login
