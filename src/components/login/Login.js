import React, { useState } from "react";

const Login = () =>{
	const [user , setUser] = useState({email:"", password:""});
	const [errors , setError] = useState({email:"",password:""});
	
	// form validation
	function validateFormFields() {
		let valid= true ;
		const error = {};
		
		if(user.email.length==0){
			error.email = "*Required Email";
			valid = false;	
		}	
		if(user.email.length>0){
			let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if(!regEmail.test(user.email))
			{
				error.email="Invalid Email";
				valid = false;
			}  
		}
		if(user.password.length==0){
			error.password="*Required Password";
			valid = false;
		}	
		setError({email:error.email, password:error.password});
		return valid;
	}
	// form submit handle
	function handleSubmit(event) {
		let userDetails = validateFormFields();
		if(!userDetails){
			event.preventDefault();
		}
	}
	return(
		<div className=" flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
					</h2>
				</div>
				<form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
					<input type="hidden" name="remember" value="true"/>
					<div className="rounded-md shadow-sm-space-y-px">
						<div>
							<label htmlFor="email-address" className="sr-only">Email address</label>
							<input  name="email" value={user.email} onChange={(e) => { setUser({...user ,email: e.target.value}); setError({...errors,email:""});}}  className={`appearance-none rounded-none relative mb-1 block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${ (errors.email) ? "error-border":"border-gray-300"}` } placeholder="Email address"/>
							<p className="error-message">{errors.email}</p>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">Password</label>
							<input name="password" type="password" value={user.password} onChange={ e =>{ setUser( {...user,password:e.target.value}); setError({...errors,password:""});}} className={`appearance-none rounded-none mb-1 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${ (errors.password) ? "error-border":"focus:ring-indigo-500 focus:border-indigo-500"}`} placeholder="Password"/>
							<p className="error-message">{errors.password}</p>
						</div>
					</div>
      
					<div className="flex items-center justify-between">
						{/* <div className="flex items-center">
							<input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
							<label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
							</label>
						</div> */}
      
						<div className="text-sm">
							<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
							</a>
						</div>
					</div>
					<div className="text-sm">
            New User ? 
						<a href="/Register" className="font-medium text-indigo-600 ml-1 hover:text-indigo-500">
                 Register
						</a>
					</div>
					<div>
						<button type="submit"  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign in
						</button>
					</div>
				</form>
			</div>
		</div>
	);

};
export default Login;