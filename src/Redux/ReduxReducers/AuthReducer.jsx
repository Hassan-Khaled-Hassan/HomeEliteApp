
import { AddNewPass } from './../Types';
const Initial = {
//   createUser: [],
//   LoginUser: [],
//   ForgetPass: [],
//   verifyCode: [],
  UpdatePass: [],
  loading: true,
};
const AuthReducer = (state = Initial, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case AddNewPass:
      return {
        ...state,
        UpdatePass: action.payload,
      };
    default:
      return state;
  }
};
export default AuthReducer;
