import { FETCH_POSTS, NEW_POSTS } from '../actions/types';

// export const fetchPosts = () => dispatch => {
//         dispatch({
//             type: FETCH_POSTS,
//             payload: []
//         })
//     }
export const showStartPage = () => dispatch => {
        //...
        dispatch({
            type: FETCH_POSTS,
            payload: []
        })
    }

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