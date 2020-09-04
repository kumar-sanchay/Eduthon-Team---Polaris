export const ADD_USER = "ADD_USER"; // action types

export function addUser(user) {
	// console.log(user);
	return {
		type: ADD_USER,
		payload: user
	};
}
