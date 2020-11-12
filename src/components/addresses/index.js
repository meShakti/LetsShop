import React, { useEffect, useState } from "react";
import Style from "./address.module.css";
import Proptypes from "prop-types";
import { IoIosAdd } from "react-icons/io";
import AddAddress from "./addaddress/AddAddress";
import { useAddressList } from "../../state/addresses/hooks";
import AsyncRenderer from "../common/AsyncRenderer";
import EmptyAlert from "../EmptyAlert/EmptyAlert";

const AddressItem = ({ item }) => {
	return (
		<div className={Style.addressCard}>
			<div className={Style.options}>
				<div className={Style.menu}>
					<span>Edit</span>
					<span>Remove</span>
				</div>
			</div>
			<span className={Style.desktopLabel}>{item.type}</span>
			<p className={Style.name}>{item.name}</p>
			<span className={Style.mobileLabel}>{item.type}</span>
			<div className={Style.address}>{item.addressLine}</div>
			<div className={Style.contact}>{item.contactNumber}</div>
		</div>
	);
};
const Addresses = () => {
	const [list, loading, requestAddress] = useAddressList();
	const [showAddressForm, setAddressForm] = useState(false);
	useEffect(() => {
		getAddressList();
	}, []);
	const getAddressList = async () => {
		await requestAddress();
	};
	const showAddAdress = () => {
		setAddressForm(!showAddressForm);
	};
	return (
		<div className={Style.container}>
			<div className={Style.addNewAddress}>
				{/*add new address component*/}
				<button onClick={showAddAdress}>
					{!showAddressForm && (
						<>
							<IoIosAdd className={Style.icon} />
              Add New Address
						</>
					)}
					{showAddressForm && <>Close</>}
				</button>
				{showAddressForm && <AddAddress />}
			</div>
			<div className={Style.addressCount}> {list.length} Saved Addresses</div>
			<div className={Style.addressList}>
				<AsyncRenderer isLoading={loading}>
					<>
						{list.map((address) => {
							return <AddressItem key={address.id} item={address} />;
						})}
						{!list.length && <EmptyAlert />}
					</>
				</AsyncRenderer>
			</div>
		</div>
	);
};

AddressItem.propTypes = {
	item: Proptypes.shape({
		type: Proptypes.string,
		name: Proptypes.string,
		addressLine: Proptypes.string,
		contactNumber: Proptypes.string,
	}),
};
export default Addresses;
