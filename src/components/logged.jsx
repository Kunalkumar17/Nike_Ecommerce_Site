import { useState } from "react";

const  Logged = () => {

    const [ User , setUser ] = useState('not logged');

            return (
                <ul>
                    <li>{User}</li>
                </ul>

            )
        }


export default Logged;