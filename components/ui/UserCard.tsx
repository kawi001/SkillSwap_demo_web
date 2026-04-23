"use client";

import { Card, Space, Typography } from 'antd';
import React from 'react';
import { User } from '../../types';
import { SkillTag } from './SkillTag';
import { Button } from './Button';

const { Title, Text } = Typography;

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Card 
      style={{ width: '100%', maxWidth: 350, margin: '16px auto', borderRadius: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }} 
      hoverable
      actions={[
        <Button type="primary" key="connect">Connect</Button>
      ]}
    >
      <Title level={4} style={{ marginBottom: 24 }}>{user.name}</Title>
      
      <div style={{ marginBottom: '24px' }}>
        <Text type="secondary" strong>Skills Offered</Text>
        <div style={{ marginTop: '8px' }}>
          <Space size={[0, 8]} wrap>
            {user.skillsOffered.map((skill, index) => (
              <SkillTag key={index} skill={skill} type="offered" />
            ))}
          </Space>
        </div>
      </div>

      <div>
        <Text type="secondary" strong>Skills Wanted</Text>
        <div style={{ marginTop: '8px' }}>
          <Space size={[0, 8]} wrap>
            {user.skillsWanted.map((skill, index) => (
              <SkillTag key={index} skill={skill} type="wanted" />
            ))}
          </Space>
        </div>
      </div>
    </Card>
  );
};
