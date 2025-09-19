export function Hero(){
    return(
        <section>

            <article>
            <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 dark:bg-gray-900">
                <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
                    <div className="flex items-center justify-between">
                        <button>
                        <div className="flex items-center space-x-2 absolute top-4 left-4">
                            <h2 className="text-sky-600 dark:text-white font-bold text-2xl">
                                Amanda Lucchi Silvestre
                            </h2>
                        </div>
                        </button>
                        <div className="hidden lg:block">
                            <ul className="flex space-x-10 text-base font-bold text-sky-400 dark:text-white">
                                <li
                                    className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <a href="#">Atividades Realizadas</a>
                                </li>
                                <li
                                    className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <a href="#">Atendimentos</a>
                                </li>
                                <li
                                    className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <a href="#">Contatos</a>
                                </li>
                            </ul>
                        </div>
                        
                        
                    </div>
                </nav>
            </div>
            </article>
        </section>
    )
}