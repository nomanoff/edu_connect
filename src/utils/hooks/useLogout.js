import { destroyCookie } from "nookies";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import ROUTES from "../../routes/routes";
import { resetAcademySlice } from "../redux/academySlice";
import { resetAdminSlice } from "../redux/adminSlice";
import { resetAuthSlice } from "../redux/authSlice";

// This hook handles user logout
function useLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logUserOut = async () => {
    try {
      // go home!
      navigate(ROUTES.HOME);

      // remove cookies:
      destroyCookie(null, "token");

      dispatch(resetAcademySlice());
      dispatch(resetAdminSlice());
      dispatch(resetAuthSlice());
    } catch (error) {
      console.error("Logout error 🐛: ", error.message);
    }
  };

  return { logUserOut };
}

export default useLogout;
