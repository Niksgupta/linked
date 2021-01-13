import React, {useState} from "react";
import {useHistory, Link} from "react-router-dom"
import {Form, Button, Col} from "react-bootstrap"
import { auth } from "./firebase";
import Home from "./Home"

function Register(){
   
  const history = useHistory('');

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const register = (event)=>{
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then((auth)=>{
      console.log(gender)

      if(auth.user){
        auth.user.updateProfile({
          displayName: firstname + " " + lastname
        })
        .then((s)=>{
          history.push("/Home")
        })
      }
    })
    .catch((e)=>{
      alert(e.message)
    })

  }





  return(
    <div className="App">
      <div className="register-heading">
          
          <img
            className="imglogo"
            src="https://cdn.worldvectorlogo.com/logos/facebook-5.svg"
            alt ="logo"
          />
      </div>
     
      <div className="first">
        <Form onSubmit = {register} >
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom01">
            <label className="label">First Name</label>
              <Form.Control 
              required 
              type="text" 
              // id="firstname"
              name="firstname"
              onChange= {(e)=> setFirstname(e.target.value)}
              placeholder="First name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
            <label className="label">Last Name</label>
              <Form.Control 
                required 
                type="text" 
                name="lastname"
                onChange= {(e)=> setLastname(e.target.value)}
                placeholder="Last name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom01">
            <label className="label">Email Address</label>
              <Form.Control 
              required
              name="email"
              onChange= {(e)=> setEmail(e.target.value)}
              type="email" 
              placeholder="Email Address" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom03">
            <label className="label">Password</label>
              <Form.Control
                required 
                name="password"
                onChange= {(e)=> setPassword(e.target.value)}
                type="password"
                placeholder="Set Password"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Password.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="formGridState">
            <label className="label">Gender</label>
              <Form.Control as="select" defaultValue="Choose...">
              onChange= {(e)=> setGender(e.target.value)}

                <option>Male</option>
                <option>Female</option>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            
              <input type="checkbox" required 
               onChange = {(e)=> setGender(e.target.value)}
              feedback="You must agree before submitting." /> 
              <label className="agree">Agree to terms and conditions </label>
          </Form.Group>

          <Button type="submit">SignUp</Button>
          <Link to ="/Login">
                         <h6 className="bottom">Already have an Account ? Log In</h6>
                        </Link>
        </Form>
      </div>
      </div>
  )
}
export default Register;