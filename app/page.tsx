"use client";

import React from 'react';
import { User } from '../types';
import { Divider } from 'antd';
import { Container } from '../components/layout/Container';
import { HeroSection } from '../components/ui/HeroSection';
import { UserList } from '../components/ui/UserList';

const mockUsers: User[] = [
  {
    name: 'Alice Inwonderland',
    skillsOffered: ['React', 'TypeScript', 'Node.js', 'Next.js'],
    skillsWanted: ['Python', 'Machine Learning', 'Data Science']
  },
  {
    name: 'Bob Builder',
    skillsOffered: ['Python', 'Django', 'SQL', 'Docker'],
    skillsWanted: ['React', 'Next.js', 'UI/UX']
  },
  {
    name: 'Charlie Davis',
    skillsOffered: ['UI/UX Design', 'Figma', 'Adobe XD'],
    skillsWanted: ['HTML', 'CSS', 'JavaScript']
  },
  {
    name: 'David Smith',
    skillsOffered: ['SEO', 'Digital Marketing', 'Content Writing'],
    skillsWanted: ['Data Analytics', 'Excel']
  }
];

export default function Home() {
  return (
    <main style={{ padding: '40px 0' }}>
      <Container>
        <HeroSection />
        
        <Divider />
        
        <UserList users={mockUsers} />
      </Container>
    </main>
  );
}
