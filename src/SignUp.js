import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./SignUp.css"
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined"
import ButtonSecondary from './ButtonSecondary'
import ButtonPrimary from './ButtonPrimary'
import { useDispatch } from 'react-redux'
import { auth } from './firebase'
import { login } from './features/userSlice'

function SignUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fName, setfName] = useState('')
    const [lName, setlName] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()




    const signUp = (e) => {
        e.preventDefault();


        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: fName,
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: fName,
                }))
                history.push('/teslaaccount')
            }) 
        })
        .catch((error) => 
            alert(error.message)
        )
    }


  return (
    <div className="signUp">
      <div className="signup_header">
          <div className="signup_logo">
              <Link>
                <img
                    // className="header_logoImg" 
                    src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" 
                    alt=""/>
              </Link>
          </div>
          <div className="signup_language">
            <LanguageOutlinedIcon /> <span>en-US</span>
          </div>
      </div>
      <div className="signup_info">
          <h1>Create Account</h1>
          <form className="signup_form">
          <label htmlFor="fName">First Name</label>
            <input 
                type="text" 
                id="fName" 
                value={fName} 
                onChange={(e) => 
                setfName(e.target.value)}
            />
            <label htmlFor="lName">Last Name</label>
            <input 
                type="text" 
                id="lName" 
                value={lName} 
                onChange={(e) => 
                setlName(e.target.value)}
            />
            <label htmlFor="email">Email Address</label>
            <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={(e) => 
                setEmail(e.target.value)}
            />
            <label htmlFor="email">Password</label>
            <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e) => 
                setPassword(e.target.value)}
            />
            <ButtonPrimary name='Create Account' type="submit" onClick={signUp}/>
          </form>
          <div className="signup_divider">
              <hr/> <span>OR</span> <hr/>
          </div>
          <Link to= "/login" className="signup_buttonSecondary">
            <ButtonSecondary name='Sign IN' />
          </Link>
      </div>
    </div>
  )
}

export default SignUp
