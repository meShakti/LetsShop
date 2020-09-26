import React from "react";
import Style from "./address.module.css";
import {IoIosAdd} from "react-icons/io";
import AddAddress from "./addaddress/AddAddress";

const Addresses = ()=>{
    
	return(
		<div className={Style.container}>
			<div className={Style.addNewAddress}>
				{/*add new address component*/}
				<a href> <IoIosAdd className={Style.icon}/>Add New Address
					<AddAddress/>
				</a>
			</div>
			<div className={Style.addressCount}> 6  Saved Addresses</div>
			<div className={Style.addressList}>
				{/*address 0*/}
				<div className={Style.addressCard}>
					<div className={Style.options}>
						<div className={Style.menu}>
							<span >Edit</span>
							<span>Remove</span>
						</div>
					</div>
					<span className={Style.desktopLabel}>HOME</span>
					<p className={Style.name}>Preeti Rani</p>
					<span className={Style.mobileLabel}>HOME</span>
					<div className={Style.address}>New Road , Old bridge, New York</div>
					<div className={Style.contact}> 8883727291</div>
				</div>
				{/*address 1*/}
				<div className={Style.addressCard}>
					<div className={Style.options}>
						<div className={Style.menu}>
							<span >Edit</span>
							<span>Remove</span>
						</div>
					</div>
					<span className={Style.desktopLabel}>WORK</span>
					<p className={Style.name}>Mehul Chopra</p>
					<span className={Style.mobileLabel}>WORK</span>
					<div className={Style.address}>Captain James Road , New Bridge Road Canada </div>
					<div className={Style.contact}> 645646546</div>
				</div>
			</div>
		</div>
	);

};

export default Addresses;