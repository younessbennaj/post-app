import axios from 'axios';


export const fetchData = () => {
    return async dispatch => {

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

        dispatch(
            (() => {
                return {
                    type: 'FETCH_API_DATA',
                    payload: { data: response.data }
                }
            })()
        )
    }

}