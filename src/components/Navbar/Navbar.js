import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Divider = styled.li`
  margin: 0px 5px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0px;
  display: inline-flex;
`;

export default function Navbar() {
  return (
    <div>
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        <Divider>|</Divider>
        <li>
          <Link to="about">About</Link>
        </li>
      </List>
    </div>
  );
};
