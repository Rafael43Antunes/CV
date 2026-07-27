import FadeIn from "./fade-in";
import { Code2, Cloud, Network, Server, Database } from "lucide-react";


const links: Record<string, string> = {
  "C": "https://en.cppreference.com/w/c",
  "C++": "https://en.cppreference.com/w/cpp",
  "C#": "https://learn.microsoft.com/en-us/dotnet/csharp/",
  "Python": "https://www.python.org/",
  "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "Docker": "https://www.docker.com/",
  "Kubernetes": "https://kubernetes.io/",
  "Git": "https://git-scm.com/",
  "GitLab CI/CD": "https://docs.gitlab.com/ee/ci/",
  "Helm": "https://helm.sh/",
  "Trivy": "https://trivy.dev/",
  "Cisco IOS": "https://www.cisco.com/",
  "pfSense": "https://www.pfsense.org/",
  "Proxmox VE": "https://www.proxmox.com/",
  "TrueNAS": "https://www.truenas.com/",
  "GNS3": "https://www.gns3.com/",
  "VLANs": "https://en.wikipedia.org/wiki/VLAN",
  "Wireshark": "https://www.wireshark.org/",
  "Linux": "https://www.linux.org/",
  "Windows Server": "https://www.microsoft.com/en-us/windows-server",
  "GitHub": "https://github.com/",
  "SQL": "https://en.wikipedia.org/wiki/SQL",
};


export default function Skills() {
    return (
        <section id="skills" className="relative">
            <FadeIn>
            <div className="mx-auto max-w-4xl px-4 py-24 md:py-24">
                <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight">
                    Skills
                </h2>

                <p className="mt-3 text-center text-zinc-600">
                    Technologies and tools I've worked with.
                </p>

                <div className="mt-12 grid gap-6 md:grid-cols-2">

                    <SkillCard title="Programming" icon={<Code2 className="w-5 h-5" />}>
                        {["C", "C++", "C#", "Python", "JavaScript"].map(s => (
                            <Badge key={s} label={s} href={links[s]} />
                        ))}
                    </SkillCard>

                    <SkillCard title="DevOps & Cloud" icon={<Cloud className="w-5 h-5" />}>
                        {["Docker", "Kubernetes", "Git", "GitLab CI/CD", "Helm", "Trivy"].map(s => (
                            <Badge key={s} label={s} href={links[s]}/>
                        ))}
                    </SkillCard>

                    <SkillCard title="Networking & Infrastructure" icon={<Network className="w-5 h-5" />}>
                        {["Cisco IOS", "pfSense", "Proxmox VE", "TrueNAS", "GNS3", "VLANs", "Wireshark"].map(s => (
                            <Badge key={s} label={s} href={links[s]}/>
                        ))}
                    </SkillCard>

                    <SkillCard title="Systems & Tools" icon={<Server className="w-5 h-5" />}>
                        {["Linux", "Windows Server", "GitHub"].map(s => (
                            <Badge key={s} label={s} href={links[s]}/>
                        ))}
                    </SkillCard>

                    <SkillCard title="Databases" icon={<Database className="w-5 h-5" />}>
                       {["SQL"].map(s => (
                           <Badge key={s} label={s} href={links[s]}/>
                       ))}
                   </SkillCard>

                </div>   
            </div>
            </FadeIn>
        </section>
    );
}


function SkillCard({
    title,
    icon,
    children,
    highlight = false,
}: {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
    highlight?: boolean;
}) {
    return (
        <div
            className={`group rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                highlight
                    ? "border-accent/30 bg-accent-light/40 hover:border-accent"
                    : "border-border bg-white hover:border-accent/50"
            }`}
        >
            <div className="flex items-center gap-3">
                <span
                    className={`flex items-center justify-center w-9 h-9 rounded-lg transition-colors ${
                        highlight
                            ? "bg-accent text-white"
                            : "bg-surface-alt text-text-muted group-hover:bg-accent-light group-hover:text-accent"
                    }`}
                >
                    {icon}
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">{children}</div>
        </div>
  );
}

function Badge({ label, href }: { label: string; highlight?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-3 py-1 text-sm rounded-full border border-border text-text-muted transition-colors hover:border-accent hover:text-accent cursor-pointer"
    >
      {label}
    </a>
  );
}

