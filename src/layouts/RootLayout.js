// file: RootLayout.js

//ReactRouter Imports
import { NavLink, Outlet } from 'react-router-dom'
import TopNav from '../pages/top-nav';
import PageTitle from '../pages/page-title';
import EyeCatcher from '../pages/eye-catcher';
import logo from '../images/logo.svg';

import EyeCatcherWithData from '../data/eye-catcher-with-data';

/**
 * Repräsentiert das Hauptlayout,
 * welches alle anderen Layouts
 * passend importiert und mithilfe von react-router
 * sicherstellt, dass die Inhalte anstelle
 * des Outlet Tags angezeigt werden.
 */
export default function RootLayout() {

    function Header() {
        
        return (
            <header>
                <TopNav />

                <PageTitle />

                <EyeCatcherWithData />
                
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