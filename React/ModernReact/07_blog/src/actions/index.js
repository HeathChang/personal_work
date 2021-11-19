import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
    return async (dispatch) => {
        const res = await jsonPlaceholder.get('/posts');
        dispatch({ type: 'FETCH_POSTS', payload: res })

        // return {
        //     type: 'FETCH_POSTS',
        //     payload: res
        // }
    }
}

export default fetchPosts;