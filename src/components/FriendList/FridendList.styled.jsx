import styled from '@emotion/styled';

export const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 270px;

  margin: 0 auto 50px;
`;

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 10px;

  padding: 10px;

  border-radius: 2px;
  box-shadow: 0px 1px 4px 1px rgba(189, 189, 189, 1);
`;

export const OnlineStatus = styled.span`
  display: block;
  width: 15px;
  height: 15px;

  background-color: ${props => (props.status ? 'green' : 'red')};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  padding: 6px;

  background-color: #e0e0e0;
  border-radius: 5px;
`;

export const Username = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
