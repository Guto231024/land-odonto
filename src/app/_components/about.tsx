export function About(){
    return(
        <section className="pt-10 overflow-hidden bg-ffff dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">

            <div>
                <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">Olá 👋 Eu sou
                    <br className="block sm:hidden" /> Amanda Lucchi
                </h2>
                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                Sou Amanda Lucchi, tenho 20 anos e sou acadêmica de Odontologia pela FAA. Ao longo da minha
                formação, desenvolvi grande interesse pela área de Harmonização Orofacial, onde pretendo me especializar 
                e construir minha trajetória profissional.
                </p>

                <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                    <span className="relative inline-block">
                        <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                    <span className="relative"> Tem alguma duvida? </span>
                    </span>
                    <br className="block sm:hidden" />Me chame no <a href="https://www.instagram.com/amandalucchifov/" title=""
                        className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">Instagram</a>
                </p>
            </div>

            <div className="relative">

            <img 
                className="w-72 md:w-80 lg:w-96 xl:w-[420px] 2xl:w-[400px] mx-auto rounded-full shadow-lg object-cover" src="foto.png" alt="Foto de Amanda Lucchi" 
                />
            </div>

        </div>
    </div>
</section>
    )
}