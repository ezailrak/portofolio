"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  impact: string[];
  stack: string[];
  image: string;
  delay?: number;
}

export function ProjectCard({
  title,
  category,
  description,
  impact,
  stack,
  image,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="group relative flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white border border-border shadow-sm hover:shadow-xl transition-all duration-300 h-full">
        {/* Image */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl group-hover:text-blue-600 transition-colors">
                {title}
              </h3>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transform duration-300" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {/* Impact */}
          <div className="space-y-2">
            <p className="text-sm opacity-70">Impact :</p>
            <ul className="space-y-1">
              {impact.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs border border-blue-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
