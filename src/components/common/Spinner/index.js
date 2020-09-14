import React from "react";
import * as SpinnerStyle from "./index.module.css";
//CSS spinner for application

const Spinner = () => {
	return (
		<div className={SpinnerStyle["loader-container"]+" pt-5"}>
			<div className={SpinnerStyle.ispinner}>
				<div className={SpinnerStyle["ispinner-blade"]} />
				<div className={SpinnerStyle["ispinner-blade"]} />
				<div className={SpinnerStyle["ispinner-blade"]} />
				<div className={SpinnerStyle["ispinner-blade"]} />
				<div className={SpinnerStyle["ispinner-blade"]} />
				<div className={SpinnerStyle["ispinner-blade"]} />
				<div className={SpinnerStyle["ispinner-blade"]} />
				<div className={SpinnerStyle["ispinner-blade"]} />
				<div className={SpinnerStyle["ispinner-blade"]} />
				<div className={SpinnerStyle["ispinner-blade"]} />
				<div className={SpinnerStyle["ispinner-blade"]} />
				<div className={SpinnerStyle["ispinner-blade"]} />
			</div>
		</div>
	);
};
export default Spinner;
