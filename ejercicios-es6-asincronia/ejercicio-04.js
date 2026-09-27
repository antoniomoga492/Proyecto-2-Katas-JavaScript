/* EJERCICIO 4 - filter() */

// 4.1
{
  const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
  const mayoresDe18 = ages.filter((edad) => edad > 18);
  console.log(mayoresDe18);
}

// 4.2
{
  const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
  const pares = ages.filter((edad) => edad % 2 === 0);
  console.log(pares);
}

// 4.3
{
  const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
  ];
  const jugadoresLoL = streamers.filter((s) => s.gameMorePlayed === 'League of Legends');
  console.log(jugadoresLoL);
}

// 4.4
{
  const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
  ];
  const conLetraU = streamers.filter((s) => s.name.includes('u'));
  console.log(conLetraU);
}

// 4.5
{
  const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
  ];
  const conLegends = streamers
    .filter((s) => s.gameMorePlayed.includes('Legends'))
    .map((s) => {
      if (s.age > 35) return { ...s, gameMorePlayed: s.gameMorePlayed.toUpperCase() };
      return s;
    });
  console.log(conLegends);
}
