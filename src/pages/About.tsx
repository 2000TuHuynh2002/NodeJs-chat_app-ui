import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>About page</p>
      <Link to="/">About</Link>
    </div>
  );
}

export default About;