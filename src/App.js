import Header from "./Components/Header";
import './App.css';
import Navbar from "./Components/Navbar_Components/Navbar";
import Footer from "./Components/Footer";
import Blog from "./Components/Blogs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Blog />
      <Footer />
    </div>
  )
}

export default App;
