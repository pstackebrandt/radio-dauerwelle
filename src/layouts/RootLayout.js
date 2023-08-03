// file: RootLayout.js

//ReactRouter Imports
import { Outlet } from 'react-router-dom'
import TopNav from '../pages/top-nav';
import PageTitle from '../pages/page-title';
import BottomNav from '../pages/bottom-nav';

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
                <BottomNav />
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
