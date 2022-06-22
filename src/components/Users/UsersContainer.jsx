import React from 'react';
import { connect } from 'react-redux';
import { setUsers, usersFollow, usersUnfollow } from '../../redux/usersSlice';
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        usersFollow: (userId) => {
            dispatch(usersFollow(userId))

        },
        usersUnfollow: (userId) => {
            dispatch(usersUnfollow(userId))
        },
        setUsers: (users) => {
            dispatch(setUsers(users))
        }

    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;