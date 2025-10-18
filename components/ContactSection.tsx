"use client";

import { motion } from "framer-motion";
import { Calendar, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-blue-50/30 to-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-5xl">Discutons de votre projet</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Je suis toujours intéressé par de nouveaux défis techniques et par
              l&apos;opportunité de contribuer à des projets innovants.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            <motion.a
              href="mailto:raknante@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group p-6 rounded-2xl border border-border bg-white hover:border-blue-600 hover:shadow-lg transition-all duration-300 flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground mb-1">Email</div>
                <div className="group-hover:text-blue-600 transition-colors">
                  raknante@gmail.com
                </div>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/mirindra-rakotomanga-8a9a49aa"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-6 rounded-2xl border border-border bg-white hover:border-blue-600 hover:shadow-lg transition-all duration-300 flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground mb-1">
                  LinkedIn
                </div>
                <div className="group-hover:text-blue-600 transition-colors">
                  Voir mon profil
                </div>
              </div>
            </motion.a>

            <motion.a
              href="tel:+261343182488"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group p-6 rounded-2xl border border-border bg-white hover:border-blue-600 hover:shadow-lg transition-all duration-300 flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground mb-1">
                  Téléphone
                </div>
                <div className="group-hover:text-blue-600 transition-colors">
                  +261 34 31 824 88
                </div>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group p-6 rounded-2xl border border-border bg-white flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground mb-1">
                  Localisation
                </div>
                <div>Antananarivo, Madagascar</div>
              </div>
            </motion.div>
          </div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="pt-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-700 text-sm">
                Disponible pour nouveaux projets
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
