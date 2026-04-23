"use client";

import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export const HeroSection: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginBottom: 40 }}>
      <Title level={1}>Find Your Skill Partner</Title>
      <Paragraph type="secondary" style={{ fontSize: 18 }}>
        Exchange your skills with others. Teach what you know, learn what you want.
      </Paragraph>
    </div>
  );
};
