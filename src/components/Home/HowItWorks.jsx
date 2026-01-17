
const steps = [
  { icon: "👤", text: "Sign up or Login" },
  { icon: "🗂️", text: "Create and manage tasks" },
  { icon: "🎯", text: "Stay productive every day" },
];

function HowItWorks() {
  return (
    <section className="how">
      <h2>How It Works</h2>

      <div className="how-grid">
        {steps.map((step, index) => (
          <div key={index} className="how-card">
            <span>{step.icon}</span>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
