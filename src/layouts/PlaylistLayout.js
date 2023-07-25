//ReactRouter Imports
import { Outlet } from 'react-router-dom'

export default function PlaylistLayout() {

    return (
            <div className="playlist-layout">
                <Outlet />
            </div>
    );
}