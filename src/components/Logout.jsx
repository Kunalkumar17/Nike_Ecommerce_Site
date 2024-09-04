import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    const logout = async() =>{

            try{
                const res = await fetch('http://localhost:3000/logout' , {
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