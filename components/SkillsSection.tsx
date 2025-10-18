"use client";

import { motion } from "framer-motion";
import { Code2, Heart, Layers, Lightbulb, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Techniques",
    skills: [
      "Fullstack JS (Next.js, NestJS)",
      "Python",
      "SQL/NoSQL",
      "IA appliquée",
      "Cloud & DevOps",
    ],
  },
  {
    icon: Layers,
    title: "Architecture",
    skills: [
      "Scalabilité",
      "Microservices",
      "APIs",
      "Gestion de la dette technique",
    ],
  },
  {
    icon: Users,
    title: "Management",
    skills: [
      "Recrutement",
      "Mentoring",
      "Revue de code",
      "Stratégie technique",
      "Delivery agile",
    ],
  },
  {
    icon: Lightbulb,
    title: "Produit",
    skills: [
      "Conception orientée valeur",
      "Compréhension métier",
      "UX fonctionnelle",
    ],
  },
  {
    icon: Heart,
    title: "Soft skills",
    skills: [
      "Autonomie et rigueur organisationnelle",
      "Communication efficace en équipe",
      "Approche analytique et résolution de problèmes",
      "Vision long terme",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="compétences" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 space-y-4"
        >
          <h2 className="text-5xl">Compétences & Valeurs</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Une approche équilibrée entre excellence technique, vision produit
            et leadership humain.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl border border-border bg-white hover:border-blue-600/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 inline-flex p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mb-3">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-blue-600 mt-1.5">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-12 text-white"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl mb-4">Vision & Philosophie</h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Je crois que la technologie doit être au service de la clarté, pas
              de la complexité. Mon objectif en tant qu'Engineering Manager est
              de construire des systèmes simples, performants et utiles, tout en
              faisant grandir les personnes qui les créent.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
