// import heroImg from "../../assets/hero.png"; // your image

function Hero({onGetStarted}) {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Manage Your Tasks Smarter
        </h1>
        <p>
          A simple and secure todo app to organize your daily work efficiently.
        </p>
        <button onClick={onGetStarted}>Get Started</button>
      </div>

      <div className="hero-right">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F013%2F259%2F687%2Foriginal%2Ftask-management-abstract-concept-project-manager-tool-business-software-productivity-online-platform-task-management-application-vector.jpg&f=1&nofb=1&ipt=a408e0af392566014940c93dcbf284e95d74d479a42006384693b6cf97665139"
          alt="todo app"
        />
      </div>
    </section>
  );
}

export default Hero;
