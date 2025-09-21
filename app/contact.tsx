

export default function Contact() {
    return (
        <section id="contact" className="relative">
            <div className="mx-auto max-w-4xl px-4 py-24 md:py-24">
                <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight">
                    Contact
                </h2>
                <p className="mt-4 text-center text-zinc-600">
                    Interessado em falar comigo? Escolhe a forma que preferires:
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-20">
                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/351918962172"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contactar via WhatsApp"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-500/40"
                    >
                        <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 fill-current"
                        >
                            <title>WhatsApp</title>
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.672-1.612-.921-2.206-.242-.58-.487-.502-.672-.512l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.48 1.065 2.878 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.711.226 1.358.194 1.871.118.571-.085 1.758-.718 2.007-1.412.248-.694.248-1.289.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.033-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.514-5.254c0-5.45 4.436-9.884 9.887-9.884 2.641 0 5.122 1.03 6.988 2.897a9.823 9.823 0 0 1 2.897 6.987c-.003 5.45-4.437 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.163 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.87 11.87 0 0 0 5.735 1.463h.005c6.554 0 11.89-5.335 11.892-11.893a11.82 11.82 0 0 0-3.467-8.418"/>
                        </svg>
                        WhatsApp
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:rafa.oliveiraantunes@gmail.com"
                        aria-label="Contactar por Email"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-zinc-800 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-black/40"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 fill-current"
                        >
                            <path d="M1.5 5.75A2.25 2.25 0 0 1 3.75 3.5h16.5A2.25 2.25 0 0 1 22.5 5.75v12.5A2.25 2.25 0 0 1 20.25 20.5H3.75A2.25 2.25 0 0 1 1.5 18.25zm2.66-.25a.75.75 0 0 0-.66.75v.26l8.03 5.02 8.02-5.02V6.25a.75.75 0 0 0-.66-.75zm16.08 3.07-7.38 4.62a.75.75 0 0 1-.8 0L4.68 8.57v9.68c0 .414.336.75.75.75h12.96c.414 0 .75-.336.75-.75z" />
                        </svg>
                        Email
                    </a>
                </div>
             </div>
        </section>
    );
}