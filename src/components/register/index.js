import React from "react";

const Register = () => {

	return(
		<div className=" flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your account
					</h2>
				</div>
				<form className="mt-8 space-y-6" action="#" method="POST">
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<label htmlFor="name" className="sr-only"> Name</label>
							<input  name="name" type="text"  required className="appearance-none rounded-none  relative block w-full px-3 py-2 mb-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name"/>
						</div>
						<div>
							<label htmlFor="email-address" className="sr-only">Email address</label>
							<input  name="email" type="email"  required className="appearance-none rounded-none relative block w-full  mb-4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">Password</label>
							<input name="password" type="password"  required className="appearance-none rounded-none relative  mb-4 block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
						</div>
						<div>
							<label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
							<input name="confirmPassword" type="password"  required className="appearance-none rounded-none relative  mb-4 block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password"/>
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