import { ADD_USER } from "./action";

function userDataReducer(state = { users: [] }, action) {
	// console.log(action);
	switch (action.type) {
		case ADD_USER:
			return Object.assign({}, state, {
				users: [...state.users, action.payload]
			});
		default:
			return state;
	}
}

export default userDataReducer;
