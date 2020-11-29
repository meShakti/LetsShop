import React, { useEffect } from "react";
import Style from "./list.module.css";
import Proptypes from "prop-types";
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
			<input type="radio" name='address' id={item.id}  checked/>
			<div className="p-0 m-0 pl-10  -mt-5">
				<label htmlFor={item.id} className={Style.name}>
					{item.name}
				</label>
				<span className={Style.typeLabel}>{item.type}</span>
				<div className={Style.address}>{item.addressLine}</div>
				<div className={Style.contact}>{item.contactNumber}</div>
			</div>
		</div>
	);
};
const Addresses = () => {
	const [list, loading, requestAddress] = useAddressList();
	useEffect(() => {
		getAddressList();
	}, []);
	const getAddressList = async () => {
		await requestAddress();
	};
	return (
		<div className={Style.container}>
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
		id: Proptypes.string
	}),
};
export default Addresses;
