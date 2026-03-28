import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section id="work" className="flex flex-col w-full bg-background relative border-y border-border-subtle scroll-mt-20">
      <div className="flex border-b border-border-subtle bg-surface-raised/30">
        <div className="w-full p-3 pl-4 flex items-center">
           <h2 className="text-[10px] font-semibold tracking-widest uppercase text-foreground-tertiary">Experience</h2>
        </div>
      </div>
      
      {EXPERIENCE.map((exp, idx) => (
        <div key={idx} className="flex flex-col sm:flex-row border-b border-border-subtle last:border-b-0">
          <div className="w-full sm:w-40 shrink-0 sm:border-r border-border-subtle p-4 pl-4 flex flex-col justify-start border-b sm:border-b-0">
             <span className="text-sm font-mono text-foreground-secondary">{exp.period}</span>
             <span className="text-xs font-mono text-foreground-tertiary mt-1">{exp.type}</span>
          </div>
          
          <div className="w-full p-5 flex flex-col">
             <h3 className="text-base font-medium text-foreground">{exp.company}</h3>
             <p className="text-sm text-foreground-secondary mb-4">{exp.role}</p>

             <ul className="flex flex-col gap-2 mb-6">
               {exp.points.map((point, i) => (
                 <li key={i} className="text-sm text-foreground-secondary flex gap-3">
                   <span className="text-foreground-tertiary text-xs mt-0.5">▸</span>
                   <span className="leading-relaxed">{point}</span>
                 </li>
               ))}
             </ul>

             <div className="flex flex-wrap gap-2 mt-auto">
               {exp.stack.map((tech) => (
                 <span
                   key={tech}
                   className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-surface border border-border text-foreground-secondary"
                 >
                   {tech}
                 </span>
               ))}
             </div>
          </div>
        </div>
      ))}
    </section>
  );
}
