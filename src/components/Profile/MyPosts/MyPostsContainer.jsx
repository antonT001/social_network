import { connect } from 'react-redux';
import { profileAddPost, profileChangePostElement } from '../../../redux/profileSlice';
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProos = (dispatch) => {
  return {
    profileAddPost: () => {
      dispatch(profileAddPost())
    },
    profileChangePostElement: (text) => {
      dispatch(profileChangePostElement(text))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProos)(MyPosts)

export default MyPostsContainer;