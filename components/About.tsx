import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-16" aria-label="About me">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <h1 className="inline-block bg-red-600 px-4 py-2 text-4xl sm:text-5xl font-bold tracking-tight text-white">
           Sihao Liu
          </h1>
          <h2 className="mt-2 text-xl sm:text-2xl font-medium text-slate-500">
            Ph.D. Student, AI for Large-scale Optimization
          </h2>
          <div className="mt-6 space-y-6 text-lg leading-relaxed text-slate-600 [&>p]:text-justify">
            <p>
              I am a Ph.D. student in the Department of Computer Science at North Carolina State University (NCSU), 
              advised by <a href="https://ruozhouy.github.io/" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-800 transition-colors duration-300 hover:text-red-600 underline decoration-red-600/30 underline-offset-4 hover:decoration-red-600"> Dr. Ruozhou Yu </a> 
              and co-advised by <a href="https://sites.google.com/ncsu.edu/xiaorui/" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-800 transition-colors duration-300 hover:text-red-600 underline decoration-red-600/30 underline-offset-4 hover:decoration-red-600"> Dr. Xiaorui Liu </a>. 
              My current research is focused on AI for large-scale Optimization.
            </p>
            <p>
              I obtained my master’s degree from the Guangdong University of Technology, China, 
              where I was advised by  <a href="https://sites.google.com/view/weihuahe/?pli=1" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-800 transition-colors duration-300 hover:text-red-600 underline decoration-red-600/30 underline-offset-4 hover:decoration-red-600"><b>Dr. Weihua He</b></a>. During my master's, 
              my research centered on leveraging Graph Neural Networks (GNNs) to solve combinatorial optimization problems on graphs. 
              I also completed my undergraduate studies at the Guangdong University of Technology.
            </p>
            
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center items-center">
          <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full max-w-md">
            <div className="col-span-2 row-span-2 rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
              <img
                src="https://p.sda1.dev/26/29430488b5c9de9a9ef9f4e3dee75e61/刘斯豪-ID%20photo.jpg"
                alt="Sihao Liu"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
              <img
                src="https://p.sda1.dev/26/81e5595dca81395e87c3f084c97d53d7/WechatIMG615 _1_.jpg"
                alt="NC State University campus"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
              <img
                src="https://p.sda1.dev/26/8afbab9ea52d71b51d08bb9c009a1b89/WechatIMG614.jpg"
                alt="Large-scale optimization concept"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
              <img
                src="https://p.sda1.dev/26/1810d250ee9bcf92acce030be152e9c3/WechatIMG613.jpg"
                alt="Graph Neural Network visualization"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
               <img
                src="https://p.sda1.dev/26/7b4a6666b3e0151b7eb676fc7b5a3d71/image.png"
                alt="AI research concept"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;