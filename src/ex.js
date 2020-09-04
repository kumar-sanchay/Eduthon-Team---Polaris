import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./store/action";
const Count = () => {
	// console.log(state);
	const count = useSelector((state) => state);
	// console.log(count);
	const dispatch = useDispatch();

	return (
		<main>
			<button onClick={() => dispatch(addUser("mohit"))}>Add to count</button>
		</main>
	);
};
export default Count;
