export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-foreground/10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-foreground/60 sm:flex-row sm:px-8 md:px-12 lg:px-24">
        <span>© {year} Jaryl Ong</span>
        <span>
          UI components by{" "}
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 underline-offset-4 hover:underline"
          >
            shadcn/ui
          </a>
        </span>
      </div>
    </footer>
  );
}
