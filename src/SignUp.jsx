import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './assets/signup.jpg'

const SignUp = ({email,password,setEmail, setPassword}) => {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [passwordConfirmation,setPasswordConfirmation] = useState('')


    const signup = require('./assets/signup.jpg');

    const navigate = useNavigate()


    const handleSignUp = (e) => {
        e.preventDefault();
        // console.log(firstName +" " + lastName+" "+ email+" "+password+" "+passwordConfirmation)

        const createUser = async() => {
            fetch('/signup',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    first_name: firstName,
                    last_name:lastName,
                    email:email,
                    password:password,
                    password_confirmation:passwordConfirmation 
                }),
            }).then(r =>{
                if (r.ok) {
                    // r.json().then((user) =>setUser(user));
                    navigate('/home')
                  } else {
                    // r.json().then((err) => setErrors(err.errors));
                    
                  }
                });

                }
    
            // QUESTION 1//
            // I want to be able to automatically login the user after signup, and show the Homecomponent?
            // ANSWER
            // after a user signs up, the browser session id gets updated with the user id which is the primary key of the newly created user. Therefore, rerouting to the login page is not
            // necessary. 

            // to route the user to the home component from here using react router dom
            // when the user hit the home page they should be greeted with top head lines, their name. the login/ signup icon should be replaced with logout. a search bar should exist for 
            // search capabilites. 
            
            
        

    
       createUser()

    }

   
//   useEffect(() => {
//         createUser();
//       },[]);




    return ( 
 <>
 <section className="relative"><div className="container px-4 mx-auto mt-10">
  <div className="max-w-md mx-auto lg:mx-0 py-18">
    <div className="mb-6">
      <span className="text-sm font-semibold uppercase">
        <span>create an</span>
        <span className="text-green-500">account</span>
      </span>
    </div>
    <form action="" onSubmit={handleSignUp}>
      <div className="mb-4">
        <label className="block text-sm leading-6 mb-2" for="">First Name</label>
        <input className="block w-full p-4 font-heading text-gray-300 placeholder-gray-300 bg-gray-50 rounded outline-none" value={firstName} onChange={(e) => setFirstName(e.target.value)}
        type="text" placeholder="Type first name" contenteditable="false"/></div>
      <div className="mb-4">
        <label className="block text-sm leading-6 mb-2" for="">Last Name</label>
        <input className="block w-full p-4 font-heading text-gray-300 placeholder-gray-300 bg-gray-50 rounded outline-none" value={lastName} onChange={(e) => setLastName(e.target.value)}
        type="text" placeholder="Type last name" contenteditable="false"/></div>
      <div className="mb-4">
        <label className="block text-sm leading-6 mb-2" for="">E-mail address</label>
        <input className="block w-full p-4 font-heading text-gray-300 placeholder-gray-300 bg-gray-50 rounded outline-none" value={email} onChange={(e) => setEmail(e.target.value)}
        type="email" placeholder="Type e-mail" contenteditable="false"/></div>
      <div className="mb-4">
        <label className="block text-sm leading-6 mb-2" for="">Password</label>
        <input className="block w-full p-4 font-heading text-gray-300 placeholder-gray-300 bg-gray-50 rounded outline-none" value={password} onChange={(e) => setPassword(e.target.value)}
        type="password" placeholder="Type password" contenteditable="false"/></div>
      <div className="mb-6">
        <label className="block text-sm leading-6 mb-2" for="">Password Confirmation</label>
        <input className="block w-full p-4 font-heading text-gray-300 placeholder-gray-300 bg-gray-50 rounded outline-none" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}
        type="password" placeholder="Repeat password" contenteditable="false"/></div>
      <div className="flex items-center mb-6">
        <input className="w-4 h-4" type="checkbox" value=""/><label className="ml-4 text-sm" for="">
        <span>By signing up, you agree to our</span>
        <a className="font-medium hover:underline" href="#">Terms,</a><a className="font-medium hover:underline" href="#">Data Policy,</a><a className="font-medium hover:underline" href="#">and Cookies Policy</a>
        </label>
      </div>
      <div className="text-right">
        <button className="block w-full py-4 px-6 text-center font-heading font-medium text-base text-white bg-green-500 hover:bg-green-600 border border-green-500 hover:border-green-600 rounded-sm transition duration-200" type="submit" >Get Started</button>
      </div>
    </form>
  </div>
  </div>
  <div className="relative lg:absolute top-0 right-0 lg:w-1/2 h-112 lg:h-full">
    <img className="absolute top-0 left-0 w-full h-full object-cover" src={signup} alt=""/><div className="absolute bottom-0 left-0 p-8 lg:p-20">
    <p className="max-w-md text-lg leading-8 text-white" contenteditable="false">Save articles as collections, summarize into your own words, edit/delete as your understanding  grows</p>
    </div>
  </div>
    <h3 className="max-w-sm font-heading text-3xl sm:text-4xl text-white mb-4" contenteditable="false">Read | Explain | Source | Talk</h3>
</section>
 </>
     );
}
 
export default SignUp;