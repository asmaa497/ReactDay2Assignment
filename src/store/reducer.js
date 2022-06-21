import { act } from "react-dom/test-utils";

const Initial_State={
    lang:1,
};
export default function languageReducer(state=Initial_State,action){
    switch(action.type){
        case "SET_LANGUAGE":
            return {
                ...state,
                lang:state.lang+1,
            };
            default:
                return state;
    }
}