"use client";

import React from 'react';
import { Row, Col } from 'antd';
import { UserCard } from './UserCard';
import { User } from '../../types';

interface UserListProps {
  users: User[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <Row gutter={[24, 24]} justify="center">
      {users.map((user, index) => (
        <Col xs={24} sm={12} md={12} lg={8} xl={6} key={index}>
          <UserCard user={user} />
        </Col>
      ))}
    </Row>
  );
};
