import React from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-50/80 backdrop-blur-sm sticky top-0 z-40 w-full border-b border-slate-200/80">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-8 md:px-12 flex items-center justify-between h-16">
        <div className="flex items-baseline space-x-4">
          <h1 className="text-xl font-semibold tracking-tight text-slate-900">
            <a href="#top">Sihao Liu</a>
          </h1>
          <h2 className="hidden sm:block text-sm text-slate-500">
            NC State University · Department of Computer Science
          </h2>
        </div>
        
        <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-6">
                {NAV_LINKS.map((link: NavLink) => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors">
                    {link.name}
                </a>
                ))}
            </nav>
            <div className="flex items-center space-x-4">
                <a className="text-slate-500 hover:text-red-600 transition-colors" href="https://github.com/Amihua" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                    <span className="sr-only">GitHub</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                </a>
                <a className="text-slate-500 hover:text-red-600 transition-colors" href="https://www.linkedin.com/in/sihao-liu-1a9726217/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                    <span className="sr-only">LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.8 0-1.32.53-1.54 1.05-.08.18-.1.42-.1.66V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.28.91 3.28 4.3v5.14z"></path></svg>
                </a>
                <a className="text-slate-500 hover:text-red-600 transition-colors" href="https://scholar.google.com/citations?user=sOaoO9MAAAAJ&hl=en" target="_blank" rel="noreferrer noopener" aria-label="Google Scholar">
                    <span className="sr-only">Google Scholar</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true"><path d="M5.242 13.769L0 9.5L12 0l12 9.5l-5.242 4.269C17.548 11.249 14.978 9 12 9s-5.548 2.249-6.758 4.769zM12 10c-3.196 0-6 2.522-6 5.625c0 1.634.707 3.09 1.833 4.1L12 24l4.167-4.275A5.579 5.579 0 0 0 18 15.625C18 12.522 15.196 10 12 10z"></path></svg>
                </a>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;