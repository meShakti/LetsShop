import React from "react";
import Style from "./addaddress.module.css";
import {IoIosHome, IoIosBusiness} from "react-icons/io";
const AddAddress = () => {

	return(
		<div>
			<form >
				<div>
					<input  className={Style.input} type="text" placeholder="Full Name*" required/>
					<input  className={Style.input} type="number" placeholder="Phone Number*" required/>
				</div>
				<div className={Style.address}>
					<input className={Style.input}  placeholder="Pincode *" required/>
					<input className={Style.state} placeholder="State *" required/>
					<input className={Style.city} placeholder="City *" required/>
					<input className={Style.input} placeholder="House No *" required/>
					<input className={Style.input} placeholder="Road name , Area*" required/>
				</div>
                
				<div className={Style.label}>
					<div className={Style.header}>Type of Address</div>
					<span className={Style.home}> <IoIosHome className={Style.icon}/>Home</span>
					<span className={Style.work}><IoIosBusiness  className={Style.icon}/>Work</span>
				</div>
				<button type="submit" className={Style.btn}>Save Address</button>
				<button type="submit" className={Style.btn__cancel}>Cancel</button>
			</form>
		</div>
	);
};

export default AddAddress;