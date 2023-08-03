// file name: App.js

// Importiere Routing-Funktionen und Komponenten aus der react-router-dom Bibliothek
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/app.css';

//Layouts
import RootLayout from "../layouts/RootLayout";
import PlaylistLayout from "../layouts/PlaylistLayout";

// Importiere die Seitenkomponenten
import Welcome from "../pages/Welcome";
import Employees from "../pages/Employees";
import Playlist from "../pages/playlist";
import Advertisement from "../pages/advertisement";
import EyeCatcher from '../pages/eye-catcher';

import Error from "../pages/errors/Error";
import NotFound from "../pages/NotFound";

// Importiere eine Funktion, um Mitarbeiterdaten abzurufen
import { getEmployees } from '../logic/RestHandler';


/*
* Portierung:
* Welcome == Startseite mit News und Bei uns Werben
* Employees == Mitarbeiter
* NotFound == Wenn eine URL angefragt wird die nicht existiert wird diese Seite aufgerufen.
* errors == Error wird immer dann aufgerufen wenn ein Servefehler auftritt
 */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
      
      {/* Start temporarily with Employees page */}
      {/* <Route index element={<Welcome />} /> */}
      <Route index element={<Employees />} loader={getEmployees} />
      {/* <Route index element={<Employees />} /> */}

      <Route path="welcome" element={<Welcome />} />

      <Route path="eyecatcher" element={<EyeCatcher />} />
      
      <Route path="playlist" element={<PlaylistLayout />}>
        <Route index element={<Playlist />} />
      </Route>

      <Route path="advertisement" element={<Advertisement />} />
      
      <Route path="employees" element=<Employees /> loader={getEmployees} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

/**
Baut die Internet Seite des Radiosenders
HipDipDauerwelle auf und gibt das zurueck.

@returns HTML-Code der WebApp
 */
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
