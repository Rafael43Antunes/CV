
export default function Skills() {
    return (
        <section id="skills" className="relative">
            <div className="mx-auto max-w-4xl px-4 py-24 md:py-24">
                <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight">
                    Skills
                </h2>

                <p className="mt-3 text-center text-zinc-600">
                    Tecnologias e ferramentas que já utilizei.
                </p>

                <div className="mt-12 grid gap-8 md:grid-cols-2">

                    {/* Linguagens */}
                    <SkillCard title="Linguagens">
                        {["C", "C++", "JavaScript", "SQL"].map(s => (
                            <Badge key={s} label={s} />
                        ))}
                    </SkillCard>

                    {/* Frontend */}
                    <SkillCard title="Frontend">
                        {["HTML", "CSS", "Tailwind CSS", "Next.js"].map(s => (
                            <Badge key={s} label={s} />
                        ))}
                    </SkillCard>

                    <SkillCard title="Sistemas">
                        {["Linux", "Git", "GitHub"].map(s => (
                            <Badge key={s} label={s} />
                        ))}
                    </SkillCard>

                    <SkillCard title="Redes">
                        {["Cisco IOS", "GNS3", "Subnneting", "VLANs", "Wireshark"].map(s => (
                            <Badge key={s} label={s} />
                        ))}
                    </SkillCard>

                </div>   
            </div>
        </section>
    );
}


function SkillCard({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="border border-zinc-200 rounded-2xl p-5">
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">{children}</div>
        </div>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 text-sm border border-zinc-200 rounded-full">
      {label}
    </span>
  );
}