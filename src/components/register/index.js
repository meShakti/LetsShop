import React, { useState } from "react";

const Register = () => {
	const [user , setUser] =useState({username:"",email:"",confirmPassword:"",password:""});
	const [errors , setError] = useState({name :"",email:"",confirmPassword:"",password:""});
	
	function validateFormFields() {
		const error={};
		let valid= true ;
		// username check for empty 
		if(user.username.trim().length==0){
			error.user = "User Name cannot be empty";
			valid=false;
		}
		// email check for empty field
		if(user.email.length==0){
			error.email = "Email cannot be empty";
			valid=false;
		}
		// email validation
		if(user.email.trim().length>0){
			let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if(!regEmail.test(user.email)){
				error.email="Invalid Email";
				valid = false;
			}
		}
		// check for Password with 5 to 11 characters long and must include special character ,number ,Capital and small letters
		if(user.password.length!=0){
			let regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,11}$/;
			if(!regPassword.test(user.password)){
				error.password ="Password must be 5 to 11 characters long .It must include special character, number, capital and small letters";
				valid=false;
			}
		}
		// check for empty field
		if(user.password.length==0){
			error.password = "Password cannot be empty";
			valid=false;
		}
		// check for empty field
		if(user.confirmPassword.length==0){
			error.confirmPassword = "Password cannot be empty";
			valid=false;
		}
		// if both password fields are not empty then check for equality
		if(user.password.length>0 && user.confirmPassword.length>0){
			if(user.password!==user.confirmPassword){
				error.confirmPassword = "Passwords dont match";
				valid=false;
			}
		}
			
		setError({name:error.user,email:error.email,confirmPassword:error.confirmPassword,password:error.password});

		return valid;
	}
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
              Create your account
					</h2>
				</div>
				<form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<label htmlFor="name" className="sr-only"> Name</label>
							<input  name="name"  value={user.name} onChange={(e) => { setUser({...user ,username: e.target.value}); setError({...errors,name:""});}} type="text"  className={`appearance-none rounded-none  relative block w-full px-3 py-2 mb-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  ${ (errors.name) ? "error-border":"border-gray-300"}`} placeholder="Name"/>
							<p className="error-message">{errors.name}</p>
						</div>
						<div>
							<label htmlFor="email-address" className="sr-only">Email address</label>
							<input  name="email" type="text"   value={user.email} onChange={(e) => { setUser({...user ,email: e.target.value}); setError({...errors,email:""});}} className={`appearance-none rounded-none relative block w-full  mb-4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${ (errors.email) ? "error-border":"border-gray-300"}`} placeholder="Email address"/>
							<p className="error-message">{errors.email}</p>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">Password</label>
							<input name="password" type="password" value={user.password} onChange={ e =>{ setUser( {...user,password:e.target.value}); setError({...errors,password:""});}} className={`appearance-none rounded-none relative  mb-4 block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${ (errors.password) ? "error-border":"border-gray-300"}`} placeholder="Password"/>
							<p className="error-message">{errors.password}</p>
						</div>
						<div>
							<label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
							<input name="confirmPassword" type="password" value={user.confirmPassword} onChange={ e =>{ setUser( {...user,confirmPassword:e.target.value}); setError({...errors,confirmPassword:""});}}  className={`appearance-none rounded-none relative  mb-4 block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${ (errors.confirmPassword) ? "error-border":"border-gray-300"}`} placeholder="Confirm Password"/>
							<p className="error-message">{errors.confirmPassword}</p>
						</div>
					</div>
      
					<div className="text-sm text-center">
            			Already have an account ? 
						<a href="/Login" className="font-medium text-indigo-600 ml-1 hover:text-indigo-500">
                 			Log in
						</a>
					</div>
					<div>
						<button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Create Account 
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;