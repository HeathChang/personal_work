import _ from 'lodash'
import jsonPlaceholder from "../apis/jsonPlaceholder";

//To avoid over-fetching problems, make new action creator that calls old action creator and dispatch it 
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    // const userIds= _.uniq (_.map(getState().posts, 'userId'))
    //getState().posts에서 key가 userId인 애들 중에, unique한 값들만 저장
    // userIds.forEach(id => dispatch(fetchUser(id)))
    //값을 하나씩 뽑아, fetchUser를 dispatch한다. 

    _.chain(getState().posts)
     .map('userId')
     .uniq()
     .forEach(id => dispatch(fetchUser(id)))
     .value()
     //value(): end _.chain()
}


export const fetchPosts = () => async (dispatch) => {
    const res = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: res.data })

    // return {
    //     type: 'FETCH_POSTS',
    //     payload: res
    // }
}


export const fetchUser = (id) => async dispatch => {
    const res = await jsonPlaceholder.get(`/users/${id}`)
    dispatch({ type: 'FETCH_USER', payload: res.data })
    //thunk를 사용했기 때문에, function를 return 할 수 있어진다.
    //(기존은 action object만 return 가능했음)
}

//Did not work 
// export const fetchUser = function (id) {
//     return _.memoize(async function(dispatch) {
//         const res = await jsonPlaceholder.get(`/users/${id}`)
//         dispatch({ type: 'FETCH_USER', payload: res.data })
//     })
// };


export default fetchPosts;