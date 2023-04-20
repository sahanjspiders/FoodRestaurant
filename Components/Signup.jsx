import { useRef } from "react";
import {Link , useNavigate} from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
  
  const YouserName = useRef()
  const YouserEmail = useRef()
  const YouserPassord = useRef()
//   const RepeatPassword = useRef()


       
  const navigate = useNavigate()

      let handleSubmit =(e)=>{
      e.preventDefault()

      const Alldata = { YouserName:YouserName.current.value,
        YouserEmail:YouserEmail.current.value,
    YouserPassord:YouserPassord.current.value,
// RepeatPassword:RepeatPassword.current.value
} 

if(Alldata.YouserName && Alldata.YouserEmail && Alldata.YouserPassord
    // && (YouserPassord ===RepeatPassword )
    ){
        axios.post('/Signup',Alldata)
        .then((res)=>{
            alert(res.data.message)
            navigate('/Signin')
        })
    }
else{
    alert('invalied credentials')
}


      
console.log(Alldata);
console.log(YouserName.current.value);
console.log(YouserEmail.current.value);
console.log(YouserPassord.current.value);

       }
  
    return (  
    <div>
        <div className="OutCon">
            <div className="Signup Card shadow-lg w-75 mx-auto mt-5 d-flex justify-content-around border border-dark rounded">
                    <form  onSubmit={handleSubmit} >
                        <center>
                        <h1 className="abc m-4"> Sign up </h1>
                        </center>
                        <div className="abcd mb-3">
                            <div className="abcd mb-2 ">
                            <i class='bx bxs-user '></i>
                            <input placeholder="Youser name"  name="YouserName"
                             ref={YouserName} type="text" className="input ml-2" />
                            </div>
                            <div className="abcd mb-3">
                            <i class='bx bxs-envelope'></i>
                            <input placeholder="Youser Email" name="YouserEmail"
                             ref={YouserEmail} type="email"  className="input" />
                            </div>
                            <div className="abcd mb-3">
                            <i class='bx bxs-lock'></i>
                            <input placeholder="Password" type="password" name="YouserPassord"
                             ref={YouserPassord}  className="input"/>
                            </div>
                            <div className="abcd mb-3">
                            <i class='bx bx-lock-alt'></i>
                            <input placeholder="Repeat Your password"   type="password"  className="input" />
                            </div>
                            <div className="check mt-5 d-flex ">
                            <input type="checkbox" className="" required /><h1></h1> <h6 className="Txt m-3"> i agree all statements in Terms of service</h6>
                            </div>
                            <div className="butten mb-4">
                            <button className="btn btn-primary mt-5"  type="submit"> Register </button> 
                            </div>

                            
                                                   
                        </div>
                         
                    </form>
                        <div className="images mt-5">
                            <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" alt="sing up image"/>
                   <Link to={'/Signin'}>
                            <h6 className="Hhh">all readady have a account</h6>
                   </Link> 
                        </div>
            </div>
        </div>
    </div>);
}
 
export default Signup;