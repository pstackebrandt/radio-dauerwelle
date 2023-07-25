//ReactRouter Imports
import { NavLink, Outlet } from 'react-router-dom'

export default function PlaylistLayout() {

    function MainContent() {
        return (
            <main>
                {/* todo Dokumentieren, was outlet genau macht. */}
                <Outlet />
            </main>
        );
    }

    return (
        <div className="root-layout">
            <MainContent />
        </div>
    );
}