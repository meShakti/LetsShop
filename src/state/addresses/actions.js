import { UPDATE_ADDRESS_LIST } from "./types";

export const updateAddressList = (addresses) => {
	return ({ type: UPDATE_ADDRESS_LIST, payload: addresses });
};
