"use client";

import React from 'react';
import { Layout, Typography } from 'antd';
import { Container } from './Container';

const { Header } = Layout;
const { Title } = Typography;

export const Navbar: React.FC = () => {
  return (
    <Header style={{ background: '#fff', padding: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', position: 'sticky', top: 0, zIndex: 10 }}>
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <Title level={3} style={{ margin: 0, color: '#1890ff' }}>SkillSwap</Title>
        </div>
      </Container>
    </Header>
  );
};
