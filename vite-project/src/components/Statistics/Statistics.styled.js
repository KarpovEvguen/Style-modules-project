import styled from 'styled-components';

export const Section = styled.section`
  width: 320px;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  margin: 0;
  padding: 16px;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  color: #6b6b6b;
`;

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  flex: 1;
  padding: 12px 0;
  text-align: center;
  color: #fff;
  background-color: ${({ bg }) => bg};
`;

export const Label = styled.span`
  display: block;
  font-size: 14px;
`;

export const Percentage = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 500;
`;
