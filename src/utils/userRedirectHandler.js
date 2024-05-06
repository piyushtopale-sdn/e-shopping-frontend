import SecureLS from "secure-ls";
import { useNavigate } from "react-router-dom"
export const redirectUserTo = (redirectTo,params) => {
    const navigate = useNavigate()
    console.log("in redirectUserHandler");
    var ls = new SecureLS({ encodingType: "aes" });
    let token = ls.get("token");
    if (token) {
        switch (redirectTo) {
            case "DASHBOARD": navigate("/dashboard")
            case "ABOUT_US": navigate("/aboutUs")
            default: return
        }
    } else {
        navigate(`/login`)
    }
};








