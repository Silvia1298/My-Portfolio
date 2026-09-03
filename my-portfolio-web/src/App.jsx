import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Form from './pages/Form';

export default function App() {
	return (
		<div className="app-shell">
			<Navbar />
			<main className="page-content">
				<Home />
                <About />
				<Projects />
				<Form />
			</main>
			<Footer />
		</div>
	);
}
