import React from "react";
import { Link } from 'react-router-dom'
import "./Signup.css"


function Signup(){

    return(
        <div className="Signup-Bg">
        <div  style={{
            textAlign : "center" , paddingTop : "20px"
        }}>

        
        <div className='d-flex justify-content-center align-items-center '>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-up</h2>
                <form action=''>


                <div className='mb-3'>
                        <label htmlFor='UserName'>UserName</label><br></br>
                        <input type="UserName" placeholder='Enter UserName' className='Form-control rounded-0'/>
                    </div>


                    <div className='mb-3'>

                        <label htmlFor='email'>Email</label><br></br>
                        <input type="email" placeholder='Enter Email' className='Form-control rounded-0'/>
                    </div>

                    

                    <div className='mb-3'>

                        <label htmlFor='contact number'>Contact Number</label><br></br>
                        <input type="contact number" placeholder='Enter contact number' className='Form-control rounded-0'/>
                    </div>


                    <div className='mb-3'>

                        <label htmlFor='company name'>Company Name</label><br></br>
                        <input type="company name" placeholder='Enter company name' className='Form-control rounded-0'/>
                    </div>


                    <div className='mb-3'>

                        <label htmlFor='user type'>User Type</label><br></br>
                        <input type="user type" placeholder='Enter user type' className='Form-control rounded-0'/>
                    </div>


                    <div className='mb-3'>

                        <label htmlFor='password'>Password</label><br></br>
                        <input type="password" placeholder='Enter password' className='Form-control rounded-0'/>
                    </div>


                    <div className='mb-3'>

                        <label htmlFor='confirm password'>Confirm Password</label><br></br>
                        <input type="confirm password" placeholder='Enter confirm password' className='Form-control rounded-0'/>
                    </div>

                    <button className='btn btn-success w-100 rounded-0'> <strong>Signup</strong></button>
                    <p>Agree To Our Terms & Conditions</p>
                    <Link to="/" className='btn btn-default border w-100 bg-light rounded-0'><strong>Login</strong></Link>
                
                </form>
             </div>
        </div>

        </div>

        </div>
    )
}

export default Signup;