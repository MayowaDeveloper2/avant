import './globals.css';


import Navbar from './components/navbar';
import Hero from './components/hero';
import Bodysection from './components/bodysection';
import Footer from './components/footer';


export default function Home() {
  return (
    <main className="" >
      <Navbar />
      <Hero />
      <Bodysection />
      <Footer />
    </main>
  );
}