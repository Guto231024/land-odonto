export function Projects() {
  return (
    <section id="projects" className="h-screen w-screen overflow-y-auto px-4 py-20 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">

        {/* Título */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">Atividades feitas</h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-blue-600 rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Durante a graduação, desenvolvi diversas atividades práticas que marcaram minha formação. Veja algumas delas:
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800">
            <div className="h-64 overflow-hidden">
              <img
                src="dentes.png"
                alt="Trabalho com dentes de cera"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="translate-y-8 transform transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-2xl font-bold text-white">Dentes em cera</h3>
                <p className="mt-2 text-gray-300 text-sm">
                  Modelagem anatômica de dentes em cera no primeiro período da faculdade. Importante para o estudo das estruturas dentárias.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 (MEIO CINZA) */}
          <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100 dark:bg-gray-800">
            <div className="h-64 overflow-hidden">
              <img
                src="moldagem.png"
                alt="Prática laboratorial"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="translate-y-8 transform transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-2xl font-bold text-white">Moldagem no Alginato</h3>
                <p className="mt-2 text-gray-300 text-sm">
                Realizando moldagem com alginato, um procedimento essencial para a confecção de modelos precisos. Uma etapa importante que exige cuidado, agilidade e técnicas fundamentais para a prática clínica na Odontologia.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 (BRANCO) */}
          <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800">
            <div className="h-64 overflow-hidden">
              <img
                src="vacuo.png"
                alt="Anatomia dental"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="translate-y-8 transform transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-2xl font-bold text-white">Placa a Vácuo</h3>
                <p className="mt-2 text-gray-300 text-sm">
                 Participei da confecção de placas utilizando a técnica de vácuo-formagem, aplicada em moldeiras,
                  contenções e placas de bruxismo. Essa prática me deu experiência direta no laboratório e contato real com 
                  procedimentos que fazem parte do dia a dia clínico da Odontologia.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
