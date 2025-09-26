import React from 'react';
import type { Project, Skill, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#/projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  // {
  //   date: '2025',
  //   title: 'TELGEN: Traffic Engineering with Generalizable GNNs',
  //   description: 'Built a GNN-based model in PyTorch/PyG, achieving 79.6% shorter training and 7× faster inference for traffic engineering tasks. Reproduced multiple baselines for fair experimental evaluation.',
  //   tags: ['GNN', 'PyTorch', 'PyG', 'Optimization', 'Traffic Engineering'],
  //   image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  //   link: '#',
  //   imageClassName: 'h-48 object-cover',
  // },
  {
    date: '2025',
    title: 'DSP-Transformer: An attention mechanism-based method',
    description: 'Published in Advances in Applied Mathematics, this work introduces an attention-based method for solving the minimum dominating set problem.',
    tags: ['Transformer', 'Optimization', 'Dominating Set Problem'],
    image: 'https://p.sda1.dev/27/c33e408dc167fa493ca1d0c3c3cfbc15/WX20250918-173322@2x.png',
    link: 'https://www.sciencedirect.com/science/article/pii/S019688582400033X',
    imageClassName: 'h-48 object-cover',
  },
  {
    date: '2024',
    title: 'CyBond Punk: Rethinking message passing via graph edge space',
    description: 'Introduced the insight that \'neighborhood aggregation captures information about edge cuts\', offering a new viewpoint in GNN research. Developed the core code for CyBond Punk.',
    tags: ['GNN', 'PyGeometric', 'Graph Theory'],
    image: 'https://p.sda1.dev/26/3bf3d4980b7e3d3fe1041e3be1e167a9/egde vector space.001.jpeg',
    link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5099962',
    imageClassName: 'h-48 object-cover',
  },
  {
    date: '2024',
    title: 'Develop a Deep-Learning Model to Predict Cancer Immunotherapy Response Using In-Born Genomes',
    description: 'Pioneered the design approach for solving the Dominating Set Problem (DSP) using GNN with RL, achieving computational efficiency up to 30× faster than traditional algorithms.',
    tags: ['GNN', 'Pytorch', 'PyGeometric', 'XGBoost'],
    image: 'https://p.sda1.dev/27/c33e408dc167fa493ca1d0c3c3cfbc15/WX20250918-173322@2x.png',
    link: 'https://www.sciencedirect.com/science/article/pii/S0096300324001899',
    imageClassName: 'h-48 object-contain bg-slate-10',
  },
  {
    date: '2024',
    title: 'Theoretical Insights in Random Dropout Method on GNNs',
    description: 'Developed the core code for FlexiDrop using PyTorch and PyTorch Geometric. Our method achieved the best results with an average improvement of 2.1% against reproduced baselines.',
    tags: ['GNN', 'Dropout', 'PyTorch',],
    image: 'https://p.sda1.dev/27/2262425067139571e24f80ce04dbb6e3/model.001.jpeg',
    link: '#',
    imageClassName: 'h-48 object-cover',
  },
  {
    date: '2023',
    title: 'Learn to solve dominating set problem with GNN and RL',
    description: 'Pioneered the design approach for solving the Dominating Set Problem (DSP) using GNN with RL, achieving computational efficiency up to 30× faster than traditional algorithms.',
    tags: ['GNN', 'RL', 'Python', 'Pytorch', 'PyGeometric'],
    image: 'https://p.sda1.dev/26/d4ead5e4006937218071c59c26370afc/DSP.jpg',
    link: 'https://www.sciencedirect.com/science/article/pii/S0096300324001899',
    imageClassName: 'h-48 object-contain bg-slate-10',
  },

];

const PythonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M11.59 4.025c-1.39.04-2.61.9-3.26 2.13l-3.32 6.03c-.23.4-.04.9.39 1.05.3.1.61-.03.8-.3l.7-1.28c.45-.82 1.3-1.34 2.22-1.34h1.74c.92 0 1.77.52 2.22 1.34l.7 1.28c.19.27.5.39.8.3.43-.15.62-.65.39-1.05l-3.32-6.03c-.62-1.13-1.74-1.93-3.03-2.13a2.7 2.7 0 00-.52-.04zm.01 3.55a.8.8 0 110-1.6.8.8 0 010 1.6zM12.4 19.975c1.39-.04 2.61-.9 3.26-2.13l3.32-6.03c.23-.4.04-.9-.39-1.05-.3-.1-.61.03-.8.3l-.7 1.28c-.45.82-1.3 1.34-2.22-1.34h-1.74c-.92 0-1.77-.52-2.22-1.34l-.7-1.28c-.19-.27-.5-.39-.8-.3-.43.15-.62-.65-.39 1.05l3.32 6.03c.62 1.13 1.74 1.93 3.03 2.13.17.03.35.04.52.04zm-.01-3.55a.8.8 0 110 1.6.8.8 0 010-1.6z" />
    </svg>
);

const PyTorchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12.83 2.333c-3.937 0-7.255 2.224-8.834 5.378a.69.69 0 00.596.98h16.48a.69.69 0 00.596-.98C20.086 4.557 16.768 2.333 12.83 2.333zM6.696 10.18a1.724 1.724 0 100 3.448 1.724 1.724 0 000-3.448zm10.609 0a1.724 1.724 0 100 3.448 1.724 1.724 0 000-3.448zM12.83 14.82c-4.922 0-9.25 3.199-9.25 7.18h18.5c0-3.981-4.328-7.18-9.25-7.18z" />
    </svg>
);

const TensorFlowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="m1.18 16.24l7.46 4.31l.01-8.62l-7.45-4.32l-.02 8.63zm8.59 4.31l7.45-4.31V7.62l-7.45-4.31v17.24zm8.58-4.31l7.47-4.31l-.02-8.63l-7.45 4.32v8.62z"/>
    </svg>
);

const SQLIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12 3c-4.42 0-8 1.79-8 4s3.58 4 8 4s8-1.79 8-4s-3.58-4-8-4zm0 6c-3.11 0-5.65-1.07-7.04-2.4A5.27 5.27 0 014 5a5.27 5.27 0 01.96-2.6C6.35 1.07 8.89 0 12 0s5.65 1.07 7.04 2.4A5.27 5.27 0 0120 5a5.27 5.27 0 01-.96 2.6C17.65 7.93 15.11 9 12 9zM4 13v4c0 2.21 3.58 4 8 4s8-1.79 8-4v-4c-1.81.7-4.1 1.15-6.52.4A17.9 17.9 0 0112 13a17.9 17.9 0 01-1.48.4c-2.42.75-4.71.3-6.52-.4zM12 19c-3.11 0-5.65-1.07-7.04-2.4A5.27 5.27 0 014 15v-1.17c1.42.54 3.53.86 6 .46V17h4v-2.71c2.47.4 4.58.08 6-.46V15c0 .92-.32 1.76-.84 2.48C17.65 17.93 15.11 19 12 19z" />
    </svg>
);

const GitIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M22.59 13.41l-3.17-3.17a.996.996 0 00-1.41 0l-1.59 1.59a1.99 1.99 0 00-2.83 0l-3-3a1.99 1.99 0 000-2.83l1.59-1.59a.996.996 0 000-1.41L8.59 1.41a.996.996 0 00-1.41 0L1.41 7.17a.996.996 0 000 1.41l3.17 3.17a.996.996 0 001.41 0l1.59-1.59a1.99 1.99 0 002.83 0l3 3a1.99 1.99 0 000 2.83l-1.59 1.59a.996.996 0 000 1.41l3.17 3.17a.996.996 0 001.41 0l5.77-5.77a.996.996 0 000-1.41zM11 14.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm-5 5c-.83 0-1.5-.67-1.5-1.5S5.17 16.5 6 16.5s1.5.67 1.5 1.5S6.83 19.5 6 19.5zm7-13c-.83 0-1.5-.67-1.5-1.5S12.17 3.5 13 3.5s1.5.67 1.5 1.5S13.83 6.5 13 6.5z" />
    </svg>
);


export const SKILLS: Skill[] = [
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'PyTorch', icon: <PyTorchIcon /> },
  { name: 'TensorFlow', icon: <TensorFlowIcon /> },
  { name: 'SQL', icon: <SQLIcon /> },
  { name: 'Git', icon: <GitIcon /> },
];