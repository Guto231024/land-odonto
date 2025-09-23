export function About() {
    return (
      <section id="about" className="pt-28 pb-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 grid items-center grid-cols-1 md:grid-cols-2 gap-12">
          {/* Texto */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-snug">
              Olá 👋 Eu sou <br className="block sm:hidden" />
              Amanda Lucchi
            </h2>
  
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Tenho 20 anos e sou acadêmica de Odontologia pela FAA. Ao longo da minha
              formação, desenvolvi grande interesse pela área de Harmonização Orofacial, onde pretendo me especializar 
              e construir minha trajetória profissional cuidando de sorrisos com carinho e responsabilidade.
            </p>
  
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
              <span className="font-semibold text-sky-600">Tem alguma dúvida?</span> <br />
              Me chama no&nbsp;
              <a
                href="https://www.instagram.com/amandalucchifov/"
                className="text-sky-500 dark:text-sky-400 hover:underline"
                target="_blank"
              >
                Instagram
              </a>
              !
            </p>
          </div>
  
          {/* Foto */}
          <div className="flex justify-center md:justify-end">
            <img
              src="foto.png"
              alt="Foto de Amanda Lucchi"
              className="w-72 md:w-80 lg:w-96 xl:w-[420px] rounded-full shadow-xl object-cover"
            />
          </div>
        </div>
      </section>
    );
  }
  