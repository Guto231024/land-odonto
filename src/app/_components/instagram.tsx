export function Instagram() {
  return (
    <section id="galeria-instagram" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
          Do meu Instagram
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 mx-auto max-w-2xl">
          Compartilho meu dia a dia odontológico, bastidores, dicas e evolução dos atendimentos. Vem ver meus últimos posts!
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Substitua com as URLs reais das imagens do Instagram */}
        <a
          href="https://instagram.com/amandalucchifov/p/EXEMPLO1"
          target="_blank"
          rel="noopener noreferrer"
          className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
        >
          <img
            src="insta1.jpg"
            alt="Post Insta 1"
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </a>
        <a
          href="https://instagram.com/amandalucchifov/p/EXEMPLO2"
          target="_blank"
          rel="noopener noreferrer"
          className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
        >
          <img
            src="insta2.jpg"
            alt="Post Insta 2"
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </a>
        <a
          href="https://instagram.com/amandalucchifov/p/EXEMPLO3"
          target="_blank"
          rel="noopener noreferrer"
          className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
        >
          <img
            src="insta3.jpg"
            alt="Post Insta 3"
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </a>
        <a
          href="https://instagram.com/amandalucchifov/p/EXEMPLO4"
          target="_blank"
          rel="noopener noreferrer"
          className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
        >
          <img
            src="insta4.jpg"
            alt="Post Insta 4"
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </a>
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://www.instagram.com/amandalucchifov/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-sky-500 dark:bg-sky-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-sky-700 dark:hover:bg-sky-500 transition"
        >
          Ver no Instagram
        </a>
      </div>
    </section>
  );
}