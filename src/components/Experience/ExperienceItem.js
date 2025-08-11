function ExperienceItem({ role, company, location, start, end, bullets = [], tags = [] }) {
    return (
      <article style={{ padding: "1rem 0", borderBottom: "1px solid #eee" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <h3 style={{ margin: 0 }}>{role} @ {company}</h3>
          <span style={{ fontSize: "0.9rem", color: "#666" }}>{start} – {end}</span>
        </header>
        <p style={{ margin: "0.25rem 0 0.75rem", color: "#555" }}>{location}</p>
  
        <ul style={{ margin: "0 0 0.75rem 1rem" }}>
          {bullets.map((b, i) => (
            <li key={i} style={{ lineHeight: 1.6 }}>{b}</li>
          ))}
        </ul>
  
        {tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {tags.map((t, i) => (
              <span
                key={i}
                style={{
                  fontSize: "0.8rem",
                  padding: "0.15rem 0.5rem",
                  border: "1px solid #ddd",
                  borderRadius: "999px"
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </article>
    );
  }
  
  export default ExperienceItem;
  