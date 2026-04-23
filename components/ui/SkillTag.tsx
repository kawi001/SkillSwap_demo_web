"use client";

import { Tag } from 'antd';
import React from 'react';

interface SkillTagProps {
  skill: string;
  type: 'offered' | 'wanted';
}

export const SkillTag: React.FC<SkillTagProps> = ({ skill, type }) => {
  const color = type === 'offered' ? 'blue' : 'green';
  return <Tag color={color} style={{ borderRadius: 4 }}>{skill}</Tag>;
};
