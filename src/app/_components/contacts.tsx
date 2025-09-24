export function Contacts() {
  return (
    <section
      id="contacts"
      className="h-screen w-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 sm:text-5xl">
          Vamos conversar?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Se você quer agendar um atendimento, tirar dúvidas ou apenas bater um papo
          sobre odontologia, estou à disposição! 💙
        </p>

        <div className="mt-10">
          <a
            href="https://wa.me/+5524981128435"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
          >
            📲 Falar no WhatsApp
          </a>
        </div>

        <p className="mt-6 text-gray-500 text-sm">
          Ou me chame no Instagram:&nbsp;
          <a
            href="https://www.instagram.com/amandalucchifov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            @amandalucchifov
          </a>
        </p>
      </div>
    </section>
  );
}
