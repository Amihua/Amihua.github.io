import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 md:px-12 text-center text-sm text-slate-500">
            <p>
                Built with{' '}
                <a
                href="https://react.dev/"
                className="font-medium text-slate-600 transition-colors duration-300 hover:text-red-600 underline decoration-red-600/30 underline-offset-4 hover:decoration-red-600"
                target="_blank"
                rel="noreferrer noopener"
                >
                React
                </a>{' '}
                and{' '}
                <a
                href="https://tailwindcss.com/"
                className="font-medium text-slate-600 transition-colors duration-300 hover:text-red-600 underline decoration-red-600/30 underline-offset-4 hover:decoration-red-600"
                target="_blank"
                rel="noreferrer noopener"
                >
                Tailwind CSS
                </a>
                . Coded with passion and a lot of coffee.
            </p>
        </div>
    </footer>
  );
};

export default Footer;