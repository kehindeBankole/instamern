import React, { useReducer } from "react";
import { UserContext } from "./context";
import reducer from "./reducer";
import { Axios } from "axios";
function State(props) {
  const initState = {
    token: localStorage.getItem("token"),
    isAuth: null,
    load: true,
    user: null,
    error: null,
  };
  const [state, dispatch] = useReducer(reducer, initState);
  function loadUser(token) {
    if (localStorage.getItem("token")) {
      token = localStorage.getItem("token");
      fetch("/api/auth", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: "loadSuccess", payload: data });
        })
        .catch((error) => {
          dispatch({ type: "loadFail", payload: error });
        });
    }
  }
  function register(data) {
    fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      //
      .then((response) => response.json())
      .then((data) => {
        if(data.error){
          alert(data.error)
        }else{
          dispatch({ type: "registerSuccess", payload: data });
          loadUser();
        }
       
      })

      .catch((error) => {
        dispatch({ type: "registerFail", payload: error });
      });
  }
  function login(data) {
    fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      //
      .then((response) => response.json())
      .then((data) => {
        if(data.error){
          alert(data.error)
        }else{
          dispatch({ type: "loginSuccess", payload: data });
          loadUser();
        }
        
      })

      .catch((error) => {
        dispatch({ type: "loginFail", payload: error });
      });
  }
  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <UserContext.Provider
      value={{
        token: state.token,
        isAuth: state.isAuth,
        load: state.load,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default State;

// function register(data){
//   const config={
//     headers : {
//       "Content-Type": "application/json"
//     }
//   }
//   try {
//     const res = Axios.post('/api/user' , data , config)
//     dispatch({ type: "registerSuccess", payload: res.data });
//   } catch (error) {
//     dispatch({ type: "registerFail", payload: error });
//   }
//   }
