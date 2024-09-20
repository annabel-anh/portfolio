import './App.css';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Skills from './components/sections/Skills.jsx';
import Projects from './components/sections/Projects.jsx';
import Contact from './components/sections/Contact.jsx';
import Header from './components/Header.jsx';
import BackgroundGradient from './components/BackgroundGradients.jsx';

function App() {
    return (
        <div className="bg-navy-blue text-beige font-inter relative isolate">
            <Header/>
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <Hero/>
            </div>
            <div className={"relative isolate"}>
                <BackgroundGradient
                    top={'top-[calc(100%-13rem)] sm:top-200'}
                    left={'left-[calc(30%-11rem)] sm:left-[calc(30%-30rem)]'}
                    rotate={"90deg"}
                />
                <div className={'flex flex-col gap-32 p-6 lg:px-12'}>
                    <About/>
                    <Skills/>
                    <Projects/>
                    <BackgroundGradient
                        top={'top-50 sm:top-[calc(100%-50rem)]'}
                        left={'left-[calc(100%-13rem)] sm:left-[calc(100%-13rem)]'}
                        rotate={"120deg"}
                    />
                    <Contact/>
                </div>
            </div>

        </div>

    );
}

export default App;
