/* EJERCICIO 25 */

const movies = [
  { title: 'The Matrix', releaseYear: 1999 }, { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 }, { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 }, { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 }, { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 }, { title: 'Forrest Gump', releaseYear: 1994 }
];
let antes = 0, despues = 0;
for (const pelicula of movies) {
  if (pelicula.releaseYear < 2000) antes++;
  else despues++;
}
console.log("Antes de 2000:", antes, "| 2000 o después:", despues);
