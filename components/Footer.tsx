export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-muted-foreground">
            © {currentYear} Mirindra Rakotomanga.
          </div>

          <div className="flex gap-8">
            <a
              href="#hero"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Accueil
            </a>
            <a
              href="#projets"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projets
            </a>
            <a
              href="#compétences"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Compétences
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
