import {produce } from "immer"; 
const initialState = {
    movies: [],
    isLoading: false,
    page: 0,
}

const reducer = (state = initialState, {type, payload}) => {
    return produce (state, (draft)=> {
        switch(type){
            case "FETCH_MOVIES":{
                draft.movies = [...draft.movies,payload];
                break
            }
            default: return draft;
        }
    })
}

export default reducer;