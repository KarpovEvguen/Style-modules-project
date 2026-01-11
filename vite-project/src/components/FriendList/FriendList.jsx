import {
  FriendListUl,
  FriendItem,
  Status,
  Avatar,
  Name,
} from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendListUl className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendItem key={id} className="item">
          <Status
            className="status"
            $isOnline={isOnline}
          />
          <Avatar
            className="avatar"
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <Name className="name">{name}</Name>
        </FriendItem>
      ))}
    </FriendListUl>
  );
};

export default FriendList;
