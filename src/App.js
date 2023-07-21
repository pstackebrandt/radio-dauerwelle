import './app.css';

/**
 * Baut die Internet Seite des Radiosenders
 * HipDipDauerwelle auf und gibt das zurueck.
 * 
 * @returns HTML-Code der WebApp
 */
function App() {

  function Header() {

    function CompanyInformation() {

      const companyInformation = {
        name: "HipDipDauerwelle",
        slogan: "Dein Radiosender auf Dauer...Welle"
      }

      return (
        <div className="company-information">
          <h1>{companyInformation.name}</h1>
          <p>{companyInformation.slogan}</p>
        </div>
      );
    }

    function TopNav() {
      return (
        <div className='top-nav'>
          <nav>
            <a href="/">Programm</a>
            <a href="/">Playlist</a>
            <a href="/">Werbung buchen</a>
            <a href="/">Team</a>
          </nav>
        </div>
      );
    }

    function EyeCatcher() {

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
          teaser: "Eddie bekommt ein neues Design, Zombies sind nicht meher Zeitgemäß!",
          photoCredit: "Maria Pop"
        },
      ];

      function ShowEyeCatcher(currentEyeCatcher) {
        return (
          <div key={currentEyeCatcher.id} className="current-eye-catcher">
            <img src={currentEyeCatcher.imgSource} alt={`Foto von ${currentEyeCatcher.photoCredit}`} width="100px" height="100px" />

            <h2>{currentEyeCatcher.header}</h2>
            <p>{currentEyeCatcher.teaser}<a href=" / ">weiterlesen</a></p>
          </div>
        );
      }

      return (
        <div className="eye-catcher">
          {eyeCatchers.map(currentEyeCatcher => ShowEyeCatcher(currentEyeCatcher))}
        </div>
      );
    }

    return (
      <header>
        <CompanyInformation />
        <TopNav />
        <EyeCatcher />
      </header>
    );
  }

  function MainContent() {
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
      }
    ]

    function ShowSenderTeam({ employees }) {
      return (
        <div className="employees">
          <h2>Unser Team</h2>
          {employees.map(employee => {
            return <ShowEmployee key={employee.id} employee={employee} />;
          })}
        </div>
      );
    }

    function ShowEmployee({ employee }) {
      return (
        <div className="employee">
          <h3>{employee.name.firstName}</h3>
          <p>Beruf: {employee.role}</p>
          <p>Lieblingsmusik: {employee.favoriteMusic.join(', ')}</p>
        </div>
      );
    }

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
  }

  function Footer() {
    function BottomNav() {
      return (
        <nav>
          <a href="/">Impressum</a>
          <a href="/">Datenschutz</a>
        </nav>
      );
    }

    return (
      <footer>
        <BottomNav />
      </footer>
    );
  }

  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
