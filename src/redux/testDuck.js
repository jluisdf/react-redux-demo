import axios from 'axios'

// utiles
// https://bezkoder.com/react-hooks-redux-crud/
// https://jasonwatmore.com/post/2020/03/02/react-hooks-redux-user-registration-and-login-tutorial-example

const initialData = {
    loading: false,
    array: [],
    error: null
}

// Types
const GET_DATA = "GET_DATA"
const GET_DATA_SUCCESS = "GET_DATA_SUCCESS"
const GET_DATA_ERROR = "GET_DATA_ERROR"

// Services
const getAll = () => {
    return axios.get("https://rickandmortyapi.com/api/character");
};

const get = id => {
    return axios.get(`https://rickandmortyapi.com/api/character/${id}`);
};

const TutorialService = {
    getAll,
    get,
}

// Reducer
export default function pokeReducer (state = initialData, action) {
    switch(action.type){
        case GET_DATA:
            return { ...state, loading: true, error: null }
        case GET_DATA_SUCCESS:
            return { ...state, array: action.payload, loading: false, error: null }
        case GET_DATA_ERROR:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

// Actions
export const retrieveData = () => async (dispatch) => {
    dispatch({ type: GET_DATA });
    try {
        const res = await TutorialService.getAll();
        dispatch({
            type: GET_DATA_SUCCESS,
            payload: res.data.results,
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: GET_DATA_ERROR,
            payload: err.message
        });
    }
};
