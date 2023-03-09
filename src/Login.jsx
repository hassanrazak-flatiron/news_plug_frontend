import { useNavigate } from "react-router-dom";

const Login = ({email, password, setEmail, setPassword, setSearch, setSource, setUser}) => {

    const navigate = useNavigate()

    const handleLogIn = async(e) =>{
        e.preventDefault();
        fetch('/login',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email: email,
                password:password 
            }),
        }).then(r =>
          {
            if (r.ok) {
                r.json().then((r) => setUser(r));
                // navigate('/home')
              } else {
                // r.json().then((err) => setErrors(err.errors));
                
              }
            }
            )
            .then(navigate("/home")).then(setSearch(""));
    }




    return (    
        <>
    <section className="relative py-16 bg-gray-50">
  <div className="absolute top-0 left-0 w-full h-96 bg-gray-100"></div>
  <div className="relative container px-4 mx-auto">
    <div className="max-w-xl mx-auto py-10 px-8 sm:px-20 bg-white rounded-md">
      <div className="mb-6">
        {/* <span className="text-sm font-semibold uppercase">Sign in</span> */}
        <h4 className="max-w-xs font-heading text-3xl sm:text-4xl mt-2">Login Now</h4>
      </div>
      <form onSubmit = {handleLogIn} action="">
        <div className="mb-4">
          <label className="block text-sm leading-6 mb-2" for="">E-mail address</label>
          <input className="block w-full p-4 font-heading text-gray-300 placeholder-gray-300 bg-gray-50 rounded outline-none" value={email} onChange={(e)=>setEmail(e.target.value)}
          type="email" placeholder="hr@1.com"/>
        </div>
        <div className="mb-6">
          <label className="block text-sm leading-6 mb-2" for="">Password</label>
          <input className="block w-full p-4 font-heading text-gray-300 placeholder-gray-300 bg-gray-50 rounded outline-none" value={password} onChange={(e)=>setPassword(e.target.value)}
          type="password" placeholder="123"/>
        </div>
        <div className="text-right mb-6">
          <button className="block w-full py-4 px-6 text-center font-heading font-medium text-base text-white bg-green-500 hover:bg-green-600 border border-green-500 hover:border-green-600 rounded-sm transition duration-200" type="submit">Sign in</button>
        </div>
        <a className="block font-heading text-center hover:underline mb-6" href="#">Forgot password</a>
        
        
      </form>
    </div>
  </div>
</section>
        </>
     );
}
 
export default Login;