import React from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-16" aria-label="Selected projects">
      <h2 className="inline-block bg-red-600 px-4 py-2 text-3xl font-bold tracking-tight text-white sm:text-4xl mb-12">
        Selected Publications &amp; Projects
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.slice(0, 2).map((project: Project, index: number) => (
          <li key={index} className="group">
             <a href={project.link} target="_blank" rel="noreferrer noopener" className="block rounded-lg overflow-hidden shadow-md bg-white transition-all duration-300 hover:shadow-xl hover:shadow-red-600/20 hover:-translate-y-1">
                <div className="overflow-hidden">
                    <img
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        decoding="async"
                        className={`w-full border-b border-slate-200 transition-transform duration-300 group-hover:scale-105 ${project.imageClassName || 'h-48 object-cover'}`}
                        src={project.image}
                    />
                </div>
                <div className="p-6">
                    <h3 className="font-semibold text-slate-900 text-lg">
                        {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-slate-600">{project.description}</p>
                    <ul className="mt-4 flex flex-wrap" aria-label="Technologies used:">
                        {project.tags.map((tag, tagIndex) => (
                        <li className="mr-1.5 mt-2" key={tagIndex}>
                            <div className="flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-900">
                            {tag}
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-12 text-center">
          <a href="#/projects" className="group inline-flex items-center rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50">
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
          </a>
        </div>
    </section>
  );
};

export default Projects;