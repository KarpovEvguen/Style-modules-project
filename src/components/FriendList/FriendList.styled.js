import styled from 'styled-components';

export const FriendListUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 340px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 12px;

  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Status = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 12px;

  background-color: ${({ $isOnline }) =>
    $isOnline ? '#4caf50' : '#f44336'};
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 6px;
  margin-right: 16px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  color: #000;
`;
