export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4 px-6 py-10">
      <h2 className="text-2xl font-semibold text-text-primary">
        Welcome to SubTerra
      </h2>
      <p className="text-text-secondary">
        Admin shell home. Open the marketplace with the search button on the
        bottom left to browse planned apps and integrations.
      </p>
      <div className="rounded-2xl border border-border-default bg-bg-secondary p-6">
        <p className="text-sm text-text-tertiary">
          APP <span className="text-accent-purple">ST</span> · audience{" "}
          <span className="text-accent-purple">admin</span> · GV-0002 dual-shell
          core (Nexus deferred)
        </p>
      </div>
    </div>
  );
}
