
import React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Project {
  date: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  imageClassName?: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}