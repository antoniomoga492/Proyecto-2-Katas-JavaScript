/* EJERCICIO 3 - map() */

// 3.1
{
  const users = [
    { id: 1, name: 'Abel' }, { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' }, { id: 4, name: 'Amanda' }
  ];
  const nombres = users.map((user) => user.name);
  console.log(nombres);
}

// 3.2
{
  const users = [
    { id: 1, name: 'Abel' }, { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' }, { id: 4, name: 'Amanda' }
  ];
  const nombresModificados = users.map((user) => {
    if (user.name.startsWith('A')) return 'Anacleto';
    return user.name;
  });
  console.log(nombresModificados);
}

// 3.3
{
  const cities = [
    { isVisited: true, name: 'Tokyo' }, { isVisited: false, name: 'Madagascar' },
    { isVisited: true, name: 'Amsterdam' }, { isVisited: false, name: 'Seul' }
  ];
  const ciudadesVisitadas = cities.map((city) => {
    if (city.isVisited) return city.name + ' (Visitado)';
    return city.name;
  });
  console.log(ciudadesVisitadas);
}
