import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginValidation';
import Validation from'./LoginValidation';
import "./Login.css"




function Login (){
    const [values, setValues]=useState({
        UserName: '',
        password: ''
    })


    const [errors, setErrors] = useState({})
    const handleInput= (event) => {
        setValues(prev  => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit= (event) =>{
        event.preventDefault();
        setErrors(Validation(values));
    }

    

    return(
        <div className='Login-Bg'>
        <div  style={{
            textAlign : "center" , paddingTop : "150px"
        }}>
         <div className='d-flex justify-content-center align-items-center'> 
        
            <div className='bg-white p-3 rounded w-25'>
                <h2>Log-in</h2>
                <form action="" onSubmit={handleSubmit}>


                <div className='mb-3'>
                        <label htmlFor='UserName'>UserName</label><br></br>
                        <input type="UserName" placeholder='Enter UserName' name='UserName'
                        onChange={handleInput}
                        className='Form-control rounded-0'/>

                        {errors.UserName && <span className='text-danger'>{errors.UserName}</span>}
                    </div>


                    <div className='mb-3'>

                        <label htmlFor='password'>password</label><br></br>
                        <input type="password" placeholder='Enter password' name='password'
                        onChange={handleInput}
                        className='Form-control rounded-0'/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>

                    <button type='submit' className='btn btn-success w-100 rounded-0'> <strong>Log In</strong></button>
                    <p>Agree To Our Terms & Conditions</p>
                    <Link to="/Signup" className='btn btn-default border w-100 bg-light rounded-0'><strong>Signup</strong></Link>
                    <Link to="/HomePage" className='btn btn-default border w-100 bg-light rounded-0'><strong>Back To HomePage</strong></Link>
                </form>
             </div>

        </div>
        </div>
        
        </div>
    )
}

export default Login;