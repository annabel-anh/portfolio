import './App.css'
import Hero from './components/sections/Hero.jsx'
import BackgroundGradient from './components/BackgroundGradients.jsx'
import About from './components/sections/About.jsx';
import Skills from './components/sections/Skills.jsx';
import Projects from './components/sections/Projects.jsx';
import Contact from './components/sections/Contact.jsx';
import Header from './components/Header.jsx';

function App() {
    return (
        <div className="bg-navy-blue text-beige font-inter">
            <Header />
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <Hero />
            </div>
            <div className={'flex flex-col gap-32 p-6 lg:px-12'}>
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
            </div>
        </div>
    )
}

export default App
