//ReactRouter Imports
import { NavLink, Outlet } from 'react-router-dom'
import TopNavBootstrap from '../pages/top-nav-bootstrap';
import BottomNav from '../pages/bottom-nav';
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
        return (
            <header>
                <div className='company-information-top-nav'>

                    {/* todo use component page-title */}
                    <div className="company-information">
                        <h1>HipDipDauerwelle</h1>
                        <p>Dein Radiosender auf Dauer...Welle</p>
                    </div>

                    {/* by Rh,  use TopNavBootstrap */}
                    {/* <TopNavBootstrap /> */}
                    <div className='top-nav'>
                        <nav>
                            <NavLink to="/">Willkommen</NavLink><br />
                            <NavLink to="playlist">Playlist</NavLink><br />
                            <NavLink to="/">Werbung buchen</NavLink><br />
                            <NavLink to="employees">Mitarbeiter</NavLink>
                        </nav>
                    </div>
                </div>

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
            <BottomNav />
        </div>
    );
}