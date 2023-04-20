import axios from 'axios'
import { useRef } from 'react'
import {Link,useNavigate} from 'react-router-dom'

const Signin = () => {



    const YouserName = useRef()
    const YouserPassord = useRef()

    const navigate = useNavigate()
             

           let  handleSubmit=(e)=>{
            e.preventDefault()


 const AllSingin = {YouserName:YouserName.current.value,
    YouserPassord:YouserPassord.current.value}

axios.post('/Signin',AllSingin)
.then((res)=>{
    alert(res.data.message)
    if(res.data.message === 'login successful')
    {
        navigate('/Home')
    }
})

           }

    return (  
    <div>
        <div className="OutCon">
            <div className="Signup Card shadow-lg w-75 mx-auto mt-5 d-flex flex-row-reverse justify-content-around border border-dark rounded">
                    <form onSubmit={handleSubmit} >
                        <center>
                        <h1 className="abc m-4"> Sign In </h1>
                        </center>
                        <div className="abcd mb-3">
                            <div className="abcd mb-2 ">
                            <i class='bx bxs-user '></i>
                            <input placeholder="Youser name" type="text" name='YouserName'  ref={YouserName} className="input ml-2" />
                            </div>
                           
                            <div className="abcd mb-3">
                            <i class='bx bxs-lock'></i>
                            <input placeholder="Password" type="password" name='YouserPassord' ref={YouserPassord}  className="input"/>
                            </div>
                           
                            <div className="check mt-5 d-flex ">
                            <input type="checkbox" className="" required /><h1></h1> <h6 className="Txt m-3"> i agree all statements in Terms of service</h6>
                            </div>
                            <div className="butten mb-4">
                            <button className="btn btn-primary mt-5" type='submit'>Login</button> 
                            </div>

                            
                                                   
                        </div>
                         
                    </form>
                        <div className="images mt-5">
                            <img src=" https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg" alt="sing up image"/>
                      <Link to={'/Signup'}>
                         <h6> To create new account</h6>
                      </Link>                   
                   
                   
                        </div>
            </div>
        </div>
    </div>);
}
 
export default Signin;