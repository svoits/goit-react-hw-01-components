import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';
import { FriendList } from './FridendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendItem
            key={id}
            avatar={avatar}
            username={name}
            isOnline={isOnline}
          />
        );
      })}
    </FriendList>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
