import {useState} from "react"
import { useContext } from "react";
import { loginContext } from "../context/context";
export default function Login() {
    const [contex, setcontex] = useState({email:"",password:""});
    const {setlogin}=useContext(loginContext)
 const userf=(e)=>{
const {name,value}=e.target
setcontex({...contex,[name]:value})
 }
 const submi=(e)=>{
   e.preventDefault()
setlogin(contex.email)
 }
    return(
    <>
    <form onSubmit={submi}>
  <div className="form-group mx-auto">
    <label >Email address</label>
    <input type="email" className="form-control"  placeholder="Enter email" name="email" onChange={userf} value={contex.email}/>
    <small  className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control"  placeholder="Password" name="password" value={contex.password}  onChange={userf}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </>
  )
}