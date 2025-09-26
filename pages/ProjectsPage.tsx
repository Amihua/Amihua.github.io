import React from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const ProjectsPage: React.FC = () => {
  return (
    <section aria-labelledby="projects-heading">
      <div className="text-center mb-20">
        <h1 id="projects-heading" className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
          Project Timeline
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
          A chronological journey through my key publications and projects, showcasing the evolution of my work.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto mt-12 px-4">
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 w-1 h-full bg-slate-200 transform md:-translate-x-1/2" aria-hidden="true"></div>

        <ul className="space-y-12">
          {PROJECTS.map((project, index) => (
            <li key={index} className="md:relative md:flex md:items-center">
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-6 h-6 bg-white border-4 border-red-600 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 mt-2 md:mt-0 z-10" aria-hidden="true"></div>
              
              {/* Card Container */}
              <div className={`w-full pl-16 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:order-2'}`}>
                  <a href={project.link} target="_blank" rel="noreferrer noopener" className="group flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-red-600/20 hover:-translate-y-1">
                      <div className="w-full md:w-2/5 flex-shrink-0 aspect-video overflow-hidden bg-slate-100">
                          <img
                              alt={`${project.title} screenshot`}
                              loading="lazy"
                              decoding="async"
                              className={`w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105 ${project.imageClassName?.replace(/h-\d+/g, '') || 'object-cover'}`}
                              src={project.image}
                          />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                          <time className="block text-sm font-semibold tracking-wider uppercase text-red-600">{project.date}</time>
                          <h3 className="mt-2 font-bold text-slate-900 text-xl">{project.title}</h3>
                          <p className="mt-3 text-base leading-relaxed text-slate-600">{project.description}</p>
                          <ul className="mt-auto pt-4 flex flex-wrap" aria-label="Technologies used:">
                          {project.tags.map((tag, tagIndex) => (
                              <li className="mr-1.5 mt-2" key={tagIndex}>
                              <div className="flex items-center rounded-full bg-slate-200/70 px-3 py-1 text-xs font-medium text-slate-700">
                                  {tag}
                              </div>
                              </li>
                          ))}
                          </ul>
                      </div>
                  </a>
              </div>

              {/* Spacer for desktop layout */}
              <div className="hidden md:block md:w-1/2"></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsPage;