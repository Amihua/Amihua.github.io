import React from 'react';
import { SKILLS } from '../constants';
import type { Skill } from '../types';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="scroll-mt-16" aria-label="Skills">
      <h2 className="inline-block bg-red-600 px-4 py-2 text-3xl font-bold tracking-tight text-white sm:text-4xl mb-12">
        Skills
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 text-center">
        {SKILLS.map((skill: Skill, index: number) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center p-4 rounded-lg transition-colors hover:bg-slate-100"
          >
            <div className="text-slate-500 group-hover:text-red-600 transition-colors">
              {skill.icon}
            </div>
            <p className="mt-2 text-sm font-medium text-slate-700">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;