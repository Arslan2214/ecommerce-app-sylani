import "./App.scss";
import Router from "./pages/Router";
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const year = new Date().getFullYear();
  return (
    <>
      {/*  Header */}
        <Navbar />
      {/*  main */}
      <main>
        <Router />
      </main>
      {/*  Footer */}
      <Footer />
    </>
  );
}

export default App;
