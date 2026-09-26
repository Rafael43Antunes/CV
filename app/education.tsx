import FadeIn from "./fade-in";
import { useLanguage } from "./language";

export default function Education() {
    const { t } = useLanguage();
    return (
        <section id="education" className="relative">
            <FadeIn>
            <div className="mx-auto max-w-4xl px-4 py-24 md:py-24">
                <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight">
                    {t('education.title')}
                </h2>

                <div className="mt-12 flex flex-col items-center md:items-start gap-6">
                    <div className="w-full border-l-2 border-border pl-6">
                        <h3 className="text-xl md:text-2xl font-semibold">
                            Instituto Superior de Engenharia de Coimbra (ISEC)
                        </h3>
                        <p 
                            className="mt-1 text-zinc-700"
                            dangerouslySetInnerHTML={{ __html: t('education.course') }}
                        />
                        <p className="mt-1 text-zinc-600">
                            2022 - 2026
                        </p>
                        <p className="mt-2 text-zinc-700"
                            dangerouslySetInnerHTML={{ __html: t('education.spec') }}
                        />
                    </div>
                </div>
            </div>
            </FadeIn>
        </section>
    );
}

