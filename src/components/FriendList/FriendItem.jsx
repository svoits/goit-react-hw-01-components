import PropTypes from 'prop-types';
import {
  FriendListItem,
  OnlineStatus,
  Avatar,
  Username,
} from './FridendList.styled';

export const FriendItem = ({ avatar, username, isOnline }) => {
  return (
    <FriendListItem>
      <OnlineStatus status={isOnline}></OnlineStatus>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Username>{username}</Username>
    </FriendListItem>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
