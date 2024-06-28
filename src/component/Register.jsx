import axios from 'axios';
import { useState } from "react";

function Home(){
    const [uname,setuname]=useState('');
    const [mail,setmail]=useState('');
    const [pass,setpass]=useState('');
    function first(e)
    {
        setuname(e.target.value)
    }
    function second(e)
    {
        setmail(e.target.value)
        
    }
    function third(e)
    {
        setpass(e.target.value)
    }
    function test(){
        axios.post('http://localhost:5002/register',{
            uname,mail,pass
        })
        

    }
    return(
        <div style={{marginLeft:"468px"}}>
            <h1 style={{color:"red"}}>Register</h1>
            <h1>UserName</h1>
            <input type="text" placeholder="Enter user name" onChange={first}/>
            <h1>Email</h1>
            <input type="email" placeholder="Enter your Email" onChange={second}/>
            <h1>Password</h1>
            <input type="password" placeholder="Enter your password" onChange={third}/>
            <h1>Re Enter</h1>
            <input type="password" placeholder="Reenter your password"/>
            <div>
            <button type="submit" style={{color:"white",backgroundColor:"green",padding:"20px",marginTop:"30px",width:"181px",zIndex:"revert",borderRadius:"30px"}} onClick={test}>Submit</button></div>

        </div>






    );
}export default Home;