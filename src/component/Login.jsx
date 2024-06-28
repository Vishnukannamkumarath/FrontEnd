import { useState } from "react";

function Run(){
    const [name1 ,setname1]= useState('');
    const [pass,setpass]=useState('');
    const [result,setresult]=useState('')
    const [repass,setrepass]=useState('')
    const [error,seterror]=useState(false)
    function hello(e){
        setname1(e.target.value);
        hai(e)
    }
    function hai(e){
        setpass(e.target.value);
    }
    function repeat(e){
        setrepass(e.target.value)
    }
    function test(){
        if (pass==repass){
            setresult({name1,pass})
            seterror(false)
        }
        else{
            seterror(true)
        }
       
    }


    
    return(

        <div style={{padding:"50px",border:"5px solid black"}}>
        <h1>Login</h1>
        <h1>UserName</h1>
        <input type="text" placeholder="Enter userName" onChange={hello} />
        <h1>Password</h1>
        <input type='password' placeholder="Enter your password" onChange={hai}/>
        <h1>ReEnter</h1>
        <input type="password" placeholder="Re enter password" onChange={repeat}/>    
        <div style={{flexDirection:"column",display:"flex",width:"100px",height:"30px",padding:"20px"}}></div>
        {error==true?<p style={{color:"red"}}>You password does not match</p>:<>{result.name1} {result.pass}</>}
        {error==true?<p>Your field is empty</p>:''}
        <button style={{backgroundColor:"green",color:"white",padding:"30px",marginLeft:"30px"}} onClick={test} >Submit</button>
        {/* <h1>your username={result.name1}</h1>
        <h2>your password={result.pass}</h2> */}
        </div>



    )
}export default Run;
