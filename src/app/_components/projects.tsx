export function Projects() {
   return(
<section className="px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl">
    
    <div className="mb-16 text-center">
      <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">Atividades feitas</h2>
      <div className="mx-auto mt-6 h-1 w-20 bg-blue-600"></div>
    </div>

   
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      
      <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="h-64 overflow-hidden">
          <img src="dentes.png" alt="UI Design Project" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-gray-900 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-90">
          <div className="translate-y-8 transform transition-transform duration-300 group-hover:translate-y-0">
            <h3 className="text-2xl font-bold text-white">Modern UI Design</h3>
            <p className="mt-2 text-gray-300">Clean, minimalist interface design for a SaaS application.</p>
            <div className="mt-4 flex space-x-2">
              <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">UI/UX</span>
              <span className="rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold text-white">Figma</span>
            </div>
            <a href="#" className="mt-4 inline-flex items-center text-white transition-colors hover:text-blue-300">
              View Project
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>

      
      <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="h-64 overflow-hidden">
          <img src="https://placehold.co/600x400" alt="Mobile App Project" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-gray-900 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-90">
          <div className="translate-y-8 transform transition-transform duration-300 group-hover:translate-y-0">
            <h3 className="text-2xl font-bold text-white">Fitness Mobile App</h3>
            <p className="mt-2 text-gray-300">Cross-platform fitness tracking application with social features.</p>
            <div className="mt-4 flex space-x-2">
              <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">React Native</span>
              <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">Health</span>
            </div>
            <a href="#" className="mt-4 inline-flex items-center text-white transition-colors hover:text-blue-300">
              View Project
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>

      
      <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="h-64 overflow-hidden">
          <img src="https://placehold.co/600x400" alt="E-commerce Project" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-gray-900 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-90">
          <div className="translate-y-8 transform transition-transform duration-300 group-hover:translate-y-0">
            <h3 className="text-2xl font-bold text-white">E-commerce Platform</h3>
            <p className="mt-2 text-gray-300">Custom online store with integrated payment processing.</p>
            <div className="mt-4 flex space-x-2">
              <span className="rounded-full bg-yellow-600 px-3 py-1 text-xs font-semibold text-white">Shopify</span>
              <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">Payment</span>
            </div>
            <a href="#" className="mt-4 inline-flex items-center text-white transition-colors hover:text-blue-300">
              View Project
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

   
    <div className="mt-16 text-center">
      <a href="#" className="inline-flex items-center rounded-full border border-blue-600 px-8 py-3 text-base font-medium text-blue-600 transition-colors duration-300 hover:bg-blue-600 hover:text-white">
        
        <i className="fas fa-long-arrow-alt-right ml-3"></i>
      </a>
    </div>
  </div>
</section>
   )
}