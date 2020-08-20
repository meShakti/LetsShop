import React from "react";




export default function imageSlider() {
	return (
        
		<div className="bg-red-100 h-screen flex flex-col justify-center items-center">
  
			<div className="max-w-lg">
   
				<template x-for="slide in slides" key="slide">
					<div
						className="p-24 font-bold text-5xl h-64 flex items-center bg-red-900 text-black rounded-lg">
						<span className="w-12 text-center">ndbshhbfjsh</span>
						<span className="text-teal-300">/hghjgj</span>
						<span className="w-12 text-center">fdhgkjgh</span>
					</div>
				</template>
    
				{/* <!-- Prev/Next Arrows --> */}
				<div className="absolute inset-0 flex">
					<div className="flex items-center justify-start w-1/2">
						<button 
							className="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-12 h-12 -ml-6">
          &#8592;
						</button>
					</div>
					<div className="flex items-center justify-end w-1/2">
						<button 
							className="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow rounded-full w-12 h-12 -mr-6"
						>
          &#8594;
						</button>
					</div>        
				</div>

				{/* <!-- Buttons --> */}
				<div className="absolute w-full flex items-center justify-center px-4">
					<template x-for="slide in slides" key="slide">
						<button
							className="flex-1 w-4 h-2 mt-4 mx-2 mb-0 rounded-full 'bg-orange-600' overflow-hidden transition-colors duration-200 ease-out hover:bg-teal-600 hover:shadow-lg">

						</button>
					</template>
				</div>
			</div>
  
		</div>

	);
}
