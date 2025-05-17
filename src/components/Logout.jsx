import { useNavigate } from "react-router-dom";
import { backendUrl } from "../App";

function Logout() {
    const navigate = useNavigate();
    const logout = async() =>{

            try{
                const res = await fetch(backendUrl+'/logout' , {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json' },
                credentials: 'include'
            });
            const data = await res.json();
            console.log(data)
            if(data === 'cookie deleted'){
                navigate('/')
            }
            }
            catch(err) {
            }
        }
        logout();
    }

export default Logout;