import React, { useState } from 'react';
import {isEmpty} from 'lodash'
import axios from 'axios'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
}
from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux'
import './login.css'
import { login } from '../slices/loginSlice';
function Login() {
  
const [error,setError] = useState ({
  emailError:undefined,
  passwordError:undefined
})
const dispatch = useDispatch()
const loginState = useSelector(state=>state.loginSlice)

const loginStateHandle = (e) => {
  dispatch(login({name:e.target.name,value:e.target.value}))
}
const validation = () =>{
  setError({})
  let status = true
  if(isEmpty(loginState.email)){    
       setError({emailError:'Please Fill the Email field'})
       return status = false
  }
  if(isEmpty(loginState.password)){
       setError({passwordError:'Please Fill the Password field'})
       return status = false
  }
  if(!(loginState.password.length > 6)){
    setError({passwordError:'Password should be more than 6 character'})
    return status = false
  }
  return status =true
}


const submitHandle = async () => {
  if(validation()){
    const url = `http://localhost:3001/api/v1/login`
    const response = await axios.post(url,loginState)
    console.log(response);
  }
}

  return (
    <MDBContainer className='my-5'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='4'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>

            <MDBCardBody>

              <p style={{color:'red',padding:"0px",margin:"0px"}}>{error?.emailError ? error?.emailError : '' }</p>
              <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' name="email" onChange={loginStateHandle}/>
              <p style={{color:'red',padding:"0px",margin:"0px"}}>{error?.passwordError ? error?.passwordError : '' }</p>
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' name="password" onChange={loginStateHandle}/>
              <MDBBtn className="mb-4 w-100" onClick={submitHandle}>Sign in</MDBBtn>

            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
  );
}

export default Login;