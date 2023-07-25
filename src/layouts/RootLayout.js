// file: RootLayout.js

//ReactRouter Imports
import { NavLink, Outlet } from 'react-router-dom'
import TopNav from '../pages/top-nav';
import PageTitle from '../pages/page-title';
import EyeCatcher from '../pages/eye-catcher';
import logo from '../images/logo.svg';

/**
 * Repräsentiert das Hauptlayout,
 * welches alle anderen Layouts
 * passend importiert und mithilfe von react-router
 * sicherstellt, dass die Inhalte anstelle
 * des Outlet Tags angezeigt werden.
 */
export default function RootLayout() {

    function Header() {
        const eyeCatchers = [
            {
              id: 0,
              imgSource: "/images/pexels-eric-esma-894156.jpg",
              header: "Samy Deluxe im Anmarsch",
              teaser: "Samy Delux hat eine neue Single veröffentlicht. Simon Desu produzierte die Beats",
              photoCredit: "Eric Esma"
            },
            {
              id: 1,
              imgSource: "/images/pexels-anete-lusina-5239964.jpg",
              header: "2Pac - Lebt",
              teaser: "Immer wieder gibt es Gerüchte das 2 Pac noch lebt. Neuste Sichtung in Texas...",
              photoCredit: "Anete Lusina"
            },
            {
              id: 2,
              imgSource: "/images/pexels-maria-pop-339805.jpg",
              header: "Eddie hat ausgedient!",
              teaser: "Eddie bekommt ein neues Design, Zombies sind nicht meher zeitgemäß!",
              photoCredit: "Maria Pop"
            },
          ];
        
        return (
            <header>
                <TopNav />

                <PageTitle />

                <EyeCatcher eyeCatchers={eyeCatchers}/>

                {/* todo check whether to use eye-catcher component */}
                <div className="current-eye-catcher">
                    <img src={logo} alt="Aktuelles Bild" />

                    <h2>Samy Deluxe im Anmarsch</h2>
                    <p>Samy Delux hat eine neue Single veröffentlicht. Simon Desu produzierte die Beats...<a href=" / ">weiterlesen</a></p>
                </div>

            </header>
        );
    }

    function MainContent() {
        return (
            <main>
                {/* todo Dokumentieren, was outlet genau macht. */}
                <Outlet />
            </main>
        );
    }

    function Footer() {
        return (

            <footer>
                <description>Footer von RH</description>
                <nav>
                    {/* todo use component bottom-nav */}
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Impressum</NavLink>
                    <NavLink to="/">Datenschutz</NavLink>
                </nav>
            </footer>
        );
    }

    return (
        <div className="root-layout">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}