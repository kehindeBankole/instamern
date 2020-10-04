export default function reducer(state, action) {
  switch (action.type) {
    case "loadSuccess":
      return {
        ...state,
        isAuth: true,
        load: false,
        user: action.payload,
      };
    case "registerSuccess":
    case "loginSuccess":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuth: true,
        load: false,
      };
    case "registerFail":
    case "loadFail":
    case "loginFail":
    case "logout":
      localStorage.removeItem("token");
      return {
        ...state,
        ...action.payload,
        token: null,
        isAuth: null,
        load: false,
        user:null,
        error: action.payload,
      };
    default:
      return state;
  }
}
