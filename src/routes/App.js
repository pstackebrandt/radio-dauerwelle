//ReactRouter Imports
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/app.css';

import ShowSenderTeam from '../show-sender-team';
import EyeCatcher from '../pages/eye-catcher';
import PageTitle from '../pages/page-title';
import BottomNav from '../pages/bottom-nav';

//Layouts
import RootLayout from "../layouts/RootLayout";
import PlaylistLayout from "../layouts/PlaylistLayout";

//Pages
import Welcome from "../pages/Welcome";
import Error from "../pages/errors/Error";
import Employees from "../pages/Employees";
import NotFound from "../pages/NotFound";
import Playlist from "../pages/playlist";
import Advertisement from "../pages/advertisment";

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
      <Route index element={<Welcome />} />
      
      <Route path="eyecatcher" element={<EyeCatcher />} />
      
      <Route path="playlist" element={<PlaylistLayout />}>
        <Route index element={<Playlist />} />
      </Route>

      <Route path="advertisement" element={<Advertisement />} />
      
      <Route path="employees" element={<Employees />} />

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

/* function Header() {

  
  return (
    <header>
      <TopNavBar />
      <PageTitle />
      <EyeCatcher eyeCatchers={eyeCatchers} />
    </header>
  );
} */

/*   function MainContent() {
    const radioNews = [
      {
        id: 0,
        header: "Spotify und AI",
        text: "1) Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      },
      {
        id: 1,
        header: "Ist die DSGVO der Absturz für Streaming Services?",
        text: "2) Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      },
      {
        id: 2,
        header: "Asking Alexandria - Tourbericht",
        text: "3) Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      },
      {
        id: 3,
        header: "Fender SDM neu am Markt",
        text: "4) Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      }
    ]

    const sportNews = [
      {
        id: 4,
        header: "Fußball - Neues Ball Design sorgt für unmut",
        text: "1) Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      },
      {
        id: 5,
        header: "Handball - Handballer sind mit Ihrem neuen Bal zufrieden",
        text: "2) Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      },
      {
        id: 6,
        header: "Formel 1 - Neue Motortechnik die Revolutioniert",
        text: "3) Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      },
      {
        id: 7,
        header: "Stabhochspringer Verband ordnet sich neu",
        text: "4) Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      }
    ]

    const allEmployees = [
      {
        "id": "0",
        "name": {
          "firstName": "Rocky",
          "lastName": "Rhythmus"
        },
        "role": "Music Producer",
        "hobbies": ["Tanzen", "Schlagzeugspielen", "Bergsteigen"],
        "favoriteMusic": ["Rock", "Funk", "Jazz"],
        "salary": "50.000€",
        "address": {
          "street": "Groovestraße",
          "houseNumber": "42",
          "zipCode": "12345",
          "city": "Rhythmusstadt",
          "stateProvince": "Rhythmusland",
          "country": "Soundien"
        }
      },
      {
        "id": "1",
        "name": {
          "firstName": "Melody",
          "lastName": "Harmonie"
        },
        "role": "Hostess",
        "hobbies": ["Singen", "Malen", "Yoga"],
        "favoriteMusic": ["Pop", "Indie", "Klassik"],
        "salary": "40.000€",
        "address": {
          "street": "Harmonieweg",
          "houseNumber": "7a",
          "zipCode": "56789",
          "city": "Taktstadt",
          "stateProvince": "Harmonieprovinz",
          "country": "Melodienien"
        }
      },
      {
        "id": "2",
        "name": {
          "firstName": "Mike",
          "lastName": "Klang"
        },
        "role": "Tontechniker",
        "hobbies": ["Heimkino", "BBQ", "Vintage-Audio-Geräte"],
        "favoriteMusic": ["Electronica", "Hip-Hop"],
        "salary": "45.000€",
        "address": {
          "street": "Soundallee",
          "houseNumber": "11",
          "zipCode": "98765",
          "city": "Klangstadt",
          "stateProvince": "Beatsland",
          "country": "Audiopolis"
        }
      },
      {
        "id": "3",
        "name": {
          "firstName": "Sally",
          "lastName": "Frequenz"
        },
        "role": "Nachrichtensprecherin",
        "hobbies": ["Reisen", "Fotografie", "Rätsel lösen"],
        "favoriteMusic": ["Folk", "Ambient", "Country"],
        "salary": "42.000€",
        "address": {
          "street": "Schwingenweg",
          "houseNumber": "23",
          "zipCode": "54321",
          "city": "Klangstadt",
          "stateProvince": "Beatsland",
          "country": "Frequenzien"
        }
      },
      {
        "id": "4",
        "name": {
          "firstName": "Max",
          "lastName": "Vinyl"
        },
        "role": "Musikredakteur",
        "hobbies": ["Plattensammeln", "Skaten", "Cocktailmixen"],
        "favoriteMusic": ["Indie", "Punk", "Reggae"],
        "salary": "38.000€",
        "address": {
          "street": "Schallstraße",
          "houseNumber": "78",
          "zipCode": "32198",
          "city": "Melodienburg",
          "stateProvince": "Harmonieprovinz",
          "country": "Tuneasia"
        }
      },
      {
        "id": "5",
        "name": {
          "firstName": "Tina",
          "lastName": "Rhythma"
        },
        "role": "Moderatorin",
        "hobbies": ["Fitness", "Kochen", "Tanz"],
        "favoriteMusic": ["Pop", "Dance", "R&B"],
        "salary": "39.000€",
        "address": {
          "street": "Taktweg",
          "houseNumber": "15",
          "zipCode": "87654",
          "city": "Rhythmusstadt",
          "stateProvince": "Rhythmusland",
          "country": "Groovestan"
        }
      },
      {
        "id": "6",
        "name": {
          "firstName": "Dave",
          "lastName": "Echo"
        },
        "role": "DJ",
        "hobbies": ["Reisen", "Fotografie", "Geschichte studieren"],
        "favoriteMusic": ["Techno", "Trance", "House"],
        "salary": "48.000€",
        "address": {
          "street": "Klanggasse",
          "houseNumber": "99",
          "zipCode": "23456",
          "city": "Soundopolis",
          "stateProvince": "Beatsland",
          "country": "Acoustica"
        }
      },
      {
        "id": "7",
        "name": {
          "firstName": "Clara",
          "lastName": "Symphony"
        },
        "role": "Musikjournalistin",
        "hobbies": ["Lesen", "Wandern", "Klavierspielen"],
        "favoriteMusic": ["Klassik", "Jazz", "World"],
        "salary": "41.000€",
        "address": {
          "street": "Melodiendamm",
          "houseNumber": "3b",
          "zipCode": "78901",
          "city": "Harmonieburg",
          "stateProvince": "Harmonieprovinz",
          "country": "Audiophilia"
        }
      },
      {
        "id": "8",
        "name": {
          "firstName": "Leo",
          "lastName": "Bassline"
        },
        "role": "Sounddesigner",
        "hobbies": ["Snowboarden", "Videospiele", "Gärtnern"],
        "favoriteMusic": ["Hip-Hop", "Dubstep", "Trap"],
        "salary": "47.000€",
        "address": {
          "street": "Rhythmusallee",
          "houseNumber": "55",
          "zipCode": "34567",
          "city": "Rhythmusstadt",
          "stateProvince": "Rhythmusland",
          "country": "Beatstan"
        }
      },
      {
        "id": "9",
        "name": {
          "firstName": "Grace",
          "lastName": "Crescendo"
        },
        "role": "Programmleiterin",
        "hobbies": ["Kunsthandwerk", "Yoga", "Kochen"],
        "favoriteMusic": ["Klassik", "Folk", "Blues"],
        "salary": "55.000€",
        "address": {
          "street": "Harmoniestraße",
          "houseNumber": "1",
          "zipCode": "01234",
          "city": "Melodienburg",
          "stateProvince": "Harmonieprovinz",
          "country": "Musicland"
        }
      }
    ];

    function ShowPost(currentPost) {
      return (
        <div key={currentPost.id} className="news-post">
          <h3>{currentPost.header}</h3>
          <p>{currentPost.text}</p>
        </div>
      );
    }

    function ShowNews() {
      return (
        <>
          <div className="current-news">
            {radioNews.map(currentPost => ShowPost(currentPost))}
          </div>

          <div className="current-news">
            {sportNews.map(currentPost => ShowPost(currentPost))}
          </div>
        </>
      );
    }

    function NewsSection() {
      return (
        <div>
          <h2>HipDipDauerwelle News</h2>
          <ShowNews />
        </div>

      );
    }

    function BookCommercials() {
      return (
        <div className="book-commercials">
          <h2>Bei uns Werben</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

          <div className="book-commercials-img">
            Bild
          </div>
        </div>
      );
    }

    return (
      <main>
        <NewsSection />
        <BookCommercials />
        <ShowSenderTeam employees={allEmployees} />
      </main>
    );
  } */

/*   function Footer() {
    return (
      <footer>
        <BottomNav />
      </footer>
    );
  } */

/*   return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  ); */

export default App;
