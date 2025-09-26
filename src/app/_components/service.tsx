export function Service() {
  return (
  <section id="services" className="min-h-screen w-full overflow-y-auto px-4 py-20 sm:px-6 lg:px-8 bg-fffff overflow-x-hidden">
      <div className="mx-auto max-w-7xl">

        {/* Título principal */}
        <div className="mb-16 text-center">
          <h2 className="mt-2 text-4xl font-extrabold text-blue-900 sm:text-5xl">
            Histórias de Sorrisos
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Alguns momentos especiais que vivi durante meus atendimentos como estudante de odontologia.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        {/* Grid de cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl bg-white flex flex-col">
            <div className="h-56 sm:h-64 md:h-56 lg:h-64 overflow-hidden">
              <img
                src="atendimento1.png"
                alt="Primeiro atendimento odontológico"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-blue-900/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="translate-y-8 transform transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-2xl font-semibold text-white">Primeiro atendimento</h3>
                <p className="mt-2 text-gray-100 text-sm">
                  Comecei minha jornada atendendo meu namorado com limpeza e raio-x. Foi um momento muito especial e marcante!
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl bg-white flex flex-col">
            <div className="h-56 sm:h-64 md:h-56 lg:h-64 overflow-hidden">
              <img
                src="atendimento2.png"
                alt="Atendimento entre colegas"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-blue-900/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="translate-y-8 transform transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-2xl font-semibold text-white">Segundo atendimento odontológico</h3>
                <p className="mt-2 text-gray-100 text-sm">
                  Um atendimento muito especial. A paciente era uma menina encantadora e apresentava quatro incisivos — uma condição rara que chamou minha atenção. Foi um momento de muito aprendizado e cuidado.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl bg-white flex flex-col">
            <div className="h-56 sm:h-64 md:h-56 lg:h-64 overflow-hidden">
              <img
                src="atendimento3.png"
                alt="Atendimento escolar"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-blue-900/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="translate-y-8 transform transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-2xl font-semibold text-white">Atendimentos nas escolas</h3>
                <p className="mt-2 text-gray-100 text-sm">
                  Visitei escolas de São Francisco (Valença - RJ), realizando escovação supervisionada e conscientização sobre saúde bucal com as crianças.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a
            href="#contato"
            className="inline-block rounded-full bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition"
          >
            Agende um atendimento comigo 💙
          </a>
        </div>

      </div>
    </section>
  );
}
