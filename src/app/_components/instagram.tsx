export function Instagram() {
  return (
    <section
      id="instagram"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
          Do meu Instagram
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 mx-auto max-w-2xl">
          Compartilho meu dia a dia odontológico, bastidores, dicas e evolução dos atendimentos. Vem ver meus últimos posts!
        </p>
      </div>

      {/* Simulação de post do Instagram */}
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
        {/* Cabeçalho com avatar e nome */}
        <div className="flex items-center px-4 py-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="/logo.png" // <- Salve a foto de perfil como "avatar.jpg" na pasta public
            alt="Amanda Lucchi"
          />
          <div className="ml-3">
            <p className="text-sm font-semibold text-gray-800 dark:text-white">amandalucchifov</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Postado recentemente</p>
          </div>
        </div>

        {/* Imagem do post */}
        <a
          href="https://www.instagram.com/amandalucchifov/p/DAL-KvXvAK5/?img_index=3"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src="/post1.png" // <- Certifique-se que esta imagem está na pasta public
            alt="Post sobre tecidos"
            className="w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </a>

        {/* Legenda adaptada */}
        <div className="p-4">
          <p className="text-sm text-gray-800 dark:text-gray-200">
            Explorando os tecidos orais sob o microscópio 🔬🦷. Essa prática foi essencial para compreender melhor a anatomia e fisiologia dos tecidos que tratamos no dia a dia da Odontologia.
          </p>
        </div>
      </div>

      {/* Botão para o perfil */}
      <div className="mt-10 text-center">
        <a
          href="https://www.instagram.com/amandalucchifov/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-sky-500 dark:bg-sky-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-sky-700 dark:hover:bg-sky-500 transition"
        >
          Ver mais no Instagram
        </a>
      </div>
    </section>
  );
}
