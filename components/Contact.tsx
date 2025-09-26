import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-16" aria-label="Contact">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="inline-block bg-red-600 px-4 py-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Get In Touch
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out. I'll do my best to get back to you!
        </p>
        <a
          href="mailto:sliu78@ncsu.edu"
          className="group mt-8 inline-block rounded-full bg-red-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;