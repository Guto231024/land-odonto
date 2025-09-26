export function Instagram() {
  // Dados dos posts simulados
  const posts = [
    {
      img: "/post1.png",
      link: "https://www.instagram.com/amandalucchifov/p/DAL-KvXvAK5/?img_index=3",
      alt: "Post sobre tecidos",
      caption:
        "Explorando os tecidos orais sob o microscópio 🔬🦷. Essa prática foi essencial para compreender melhor a anatomia e fisiologia dos tecidos que tratamos no dia a dia da Odontologia.",
    },
    {
      img: "/post2.png",
      link: "https://www.instagram.com/p/DOrdQedAZ1O/?img_index=1",
      alt: "Escovação nas escolas",
      caption:
        "Projeto de escovação nas escolas 🦷✨. Levar educação em saúde bucal para as crianças é fundamental para a prevenção de doenças e promoção de bons hábitos desde cedo!",
    },
    {
      img: "/post3.png",
      link: "https://www.instagram.com/p/DH_abmusDWy/?img_index=1",
      alt: "Fases da odontogênese",
      caption:
        "Fases da odontogênese 🦷🔬. Entender o desenvolvimento dos dentes é essencial para diagnosticar e tratar alterações desde a infância até a vida adulta!",
    },
  ];

  return (
    <section
      id="instagram"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 flex flex-col"
    >
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
          Do meu Instagram
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Compartilho meu dia a dia odontológico, bastidores, dicas e evolução dos atendimentos. Vem ver meus últimos posts!
        </p>
      </div>

      {/* Grid de posts alinhados à esquerda */}
      <div className="max-w-7xl mx-auto flex flex-row gap-8 justify-start items-start flex-wrap">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="w-full sm:w-96 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden flex-shrink-0"
            style={{ maxWidth: 384 }}
          >
            {/* Cabeçalho com avatar e nome */}
            <div className="flex items-center px-4 py-3">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="/logo.png"
                alt="Amanda Lucchi"
              />
              <div className="ml-3">
                <p className="text-sm font-semibold text-gray-800 dark:text-white">amandalucchifov</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Postado recentemente</p>
              </div>
            </div>
            {/* Imagem do post */}
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={post.img}
                alt={post.alt}
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </a>
            {/* Legenda adaptada */}
            <div className="p-4">
              <p className="text-sm text-gray-800 dark:text-gray-200">
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Botão para o perfil */}
      <div className="mt-10 text-left max-w-7xl mx-auto">
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
