export function Hero() {
    return (
      <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-sm z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1> <a href="#about" className="text-xl font-bold text-sky-600 dark:text-white">
            Amanda Lucchi Silvestre
          </a> </h1>
          <ul className="hidden lg:flex space-x-10 text-base font-semibold text-sky-500 dark:text-white">
            <li>
              <a href="#projects" className="hover:underline hover:text-sky-600">
                Atividades Realizadas
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline hover:text-sky-600">
                Atendimentos
              </a>
            </li>
            <li>
              <a href="#instagram" className="hover:underline hover:text-sky-600">
                Post do Instagram
              </a>
            </li>
            <li>
              <a href="#contacts" className="hover:underline hover:text-sky-600">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  