import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Hello! I'm Alice Yalakou",
    location: "Yaoundé, Cameroun",
    tagline: "and a Full-stack Web Developer",
    email: "yalakouam@gmail.com",
    availability: "Open for work",
    brand:
      "My passion for development galvanizes me to always want to learn, and to expand on the knowledge I already have. I reassure myself every day, \u0022 I'm coming! \u0022 get ready. ",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
