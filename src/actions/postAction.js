// import { FETCH_POSTS, NEW_POSTS } from '../actions/types';

// export const fetchPosts = () => dispatch => {
//         dispatch({
//             type: FETCH_POSTS,
//             payload: []
//         })
//     }

// export const postPage = () => dispatch => {
//     //...
//     dispatch({
//         type: FETCH_POSTS,
//         payload: []
//     })
// }

// export const newPost = () => dispatch => {
//     //...
//     dispatch({
//         type: NEW_POSTS,
//         payload: []
//     })
// }

/* in component
* import PropTypes from 'prop-types';
* import { connect } from 'react-redux';
* import { fetchPosts } '../actions/postAction';
* -> call: this.props.fetchPosts()
* Posts.propTypes = { fetchPost: propTypes.func.isRequired, posts: propTypes.array.isRequired}
* const mapStateToProps = state => ({ posts: state.posts.items})
* export default connect(mapStateToProps, {fetchPosts}) (Posts)
*/

/*
 *  comoinentWillMount
 *  componentWillRecieveProps
 *  push(item) -> add last
 *  unshift(item) -> add first
 */

 // https://medium.com/backticks-tildes/setting-up-a-redux-project-with-create-react-app-e363ab2329b8