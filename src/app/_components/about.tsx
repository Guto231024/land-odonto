export function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center bg-white dark:bg-gray-800 py-10 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid items-center grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Texto */}
        <div className="order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-snug text-center md:text-left">
            Olá 👋 Eu sou <br className="block sm:hidden" />
            Amanda Lucchi
          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center md:text-left">
            Tenho 20 anos e sou acadêmica de Odontologia pela FAA. Ao longo da minha
            formação, desenvolvi grande interesse pela área de Harmonização Orofacial,
            onde pretendo me especializar e construir minha trajetória profissional
            cuidando de sorrisos com carinho e responsabilidade.
          </p>

          <p className="mt-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 text-center md:text-left">
            <span className="font-semibold text-sky-600">Tem alguma dúvida?</span> <br />
            Me chama no&nbsp;
            <a
              href="https://www.instagram.com/amandalucchifov/"
              className="text-sky-500 dark:text-sky-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            !
          </p>
        </div>

        {/* Foto */}
        <div className="flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0">
          <img
            src="foto.png"
            alt="Foto de Amanda Lucchi"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] rounded-full shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
