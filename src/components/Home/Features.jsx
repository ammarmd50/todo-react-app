
const features = [
  { icon: "🔐", text: "Secure Authentication" },
  { icon: "📝", text: "Create & Manage Tasks" },
  { icon: "✅", text: "Mark Tasks Completed" },
  { icon: "⚡", text: "Fast & Responsive UI" },
];

function Features() {
  return (
    <section className="features">
      <h2>Features</h2>

      <div className="feature-grid">
        {features.map((item, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{item.icon}</div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
