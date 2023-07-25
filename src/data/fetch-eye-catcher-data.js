// file: fetch-eye-catcher-data.js
import { useEffect, useState } from 'react';

export default function FetchEyeCatcherData({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = [
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
    setData(fetchData);
  }, []);

  return children(data);
}
