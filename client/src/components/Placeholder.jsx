// Shared placeholder until the real page is built in a later step.
export function Placeholder({ title, note }) {
  return (
    <section className="page">
      <div className="card hero-card">
        <h1>{title}</h1>
        <p className="muted">{note || "This page will be built in a later step."}</p>
      </div>
    </section>
  );
}
