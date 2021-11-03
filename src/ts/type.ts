/*
    adult: false
backdrop_path: "/eENEf62tMXbhyVvdcXlnQz2wcuT.jpg"
genre_ids: [878, 28]
0: 878
1: 28
id: 580489
original_language: "en"
original_title: "Venom: Let There Be Carnage"
overview: "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady."
popularity: 6121.117
poster_path: "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg"
release_date: "2021-09-30"
title: "Venom: Let There Be Carnage"
video: false
vote_average: 6.9
vote_count: 1452
*/

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number, number];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
