"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Plateforme de gestion d'incidents et de monitoring",
    category: "Télécom",
    description:
      "Centralisation de la gestion des incidents à l'échelle nationale avec collecte de données en temps réel de tous les équipements du réseau (2G → 4G, fibre optique, énergie).",
    impact: [
      "Collecte et agrégation de données multi-sources (télécom, fibre, énergie)",
      "Réduction du temps moyen de résolution de 40%",
      "Visibilité en temps réel sur l'ensemble du réseau national",
    ],
    stack: ["Node.js", "React", "Docker", "MariaDB", "ClickHouse", "RabbitMQ"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    title: "Outil de géomarketing et d'analyse GIS",
    category: "Géomarketing",
    description:
      "Outil de cartographie décisionnelle pour les équipes commerciales avec analyse territoriale.",
    impact: [
      "Aide à la décision sur les implantations",
      "Gain de précision sur les analyses territoriales",
      "Optimisation des campagnes marketing",
    ],
    stack: ["Mapbox", "Leaflet", "React", "PostgreSQL", "Node.js"],
    image:
      "https://plus.unsplash.com/premium_photo-1712822084839-8ab37ffba6fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=80&w=800",
  },
  {
    title: "Reporting Builder personnalisable",
    category: "Business Intelligence",
    description:
      "Moteur de création de rapports dynamiques permettant aux équipes de créer leurs propres analyses.",
    impact: [
      "Autonomie totale des utilisateurs métier",
      "Réduction de la charge sur les équipes BI",
      "Génération automatique de rapports",
    ],
    stack: ["Next.js", "NestJS", "Chart.js", "Supabase"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "Proptech – Gestion documentaire intelligente",
    category: "PropTech",
    description:
      "Automatisation de la classification et recherche documentaire dans l'immobilier avec IA.",
    impact: [
      "Division par 3 du temps de traitement",
      "Fiabilisation des bases contractuelles",
      "Extraction automatique des métadonnées",
    ],
    stack: ["Langchain", "FAISS", "Python", "Next.js", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    title: "Scraping & Data Enrichment",
    category: "Data Engineering",
    description:
      "Pipelines de scraping robustes pour consolidation de données multi-sources.",
    impact: [
      "Automatisation complète de la collecte",
      "Amélioration de la qualité des insights",
      "Nettoyage et normalisation automatisés",
    ],
    stack: ["Node.js", "Puppeteer", "Python", "Langchain", "FAISS", "OpenAI"],
    image:
      "https://plus.unsplash.com/premium_photo-1681586533774-1d9d42425712?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=80&w=800",
  },
  {
    title: "Réseau social événementiel",
    category: "Social Network",
    description:
      "Plateforme communautaire pour la création et gestion d'événements avec système de matching social.",
    impact: [
      "Système de notifications temps réel via WebSocket",
      "Gestion complète du cycle de vie des événements",
      "Interface utilisateur intuitive et responsive",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "WebSocket", "Supabase"],
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    title: "Marketplace de location de matériel audiovisuel",
    category: "Marketplace",
    description:
      "Plateforme de location de matériel audiovisuel entre professionnels avec gestion des disponibilités, réservations et paiements sécurisés.",
    impact: [
      "Système de calendrier de disponibilités en temps réel",
      "Gestion automatisée des cautions et assurances",
      "Tableau de bord loueurs avec suivi des revenus",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Stripe", "Redis"],
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
  },
  {
    title: "BTP – Génération de devis assistée par IA",
    category: "Construction",
    description:
      "Chiffrage automatique de travaux à partir d'images avec computer vision.",
    impact: [
      "Réduction du temps de devis de plusieurs heures à quelques minutes",
      "Fiabilité et cohérence accrue",
      "Validation humaine intégrée",
    ],
    stack: ["Python", "OpenCV", "Next.js", "NestJS", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1649209979970-f01d950cc5ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=800",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projets"
      className="py-24 px-6 bg-gradient-to-b from-white to-blue-50/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 space-y-4"
        >
          <h2 className="text-5xl">Projets Clés</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            De la conception à la mise en production, j'ai piloté des
            plateformes complexes couvrant télécom, géomarketing, proptech, IA
            et automatisation.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="flex flex-wrap gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
