var team = {
  _players: [
    {
      firstName: "Pablo",
      lastName: "Sanchez",
      age: 11,
    },
    {
      firstName: "Ana",
      lastName: "Goncalves",
      age: 20,
    },
    {
      firstName: "Will",
      lastName: "Grace",
      age: 21,
    },
  ],
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "Yankees",
      teamPoints: 52,
      opponentPoints: 28,
    },
    {
      opponent: "Patriots",
      teamPoints: 30,
      opponentPoints: 46,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    var player = {
      firstName,
      lastName,
      age,
    };
    this._players.push(player);
  },
  addGame(opponentName, teamPoints, opponentPoints) {
    var game = {
      opponentName,
      teamPoints,
      opponentPoints,
    };
    this._games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

console.log(team._players);

team.addGame("Cruzeiro", 3, 1);
team.addGame("Atletico", 0, 1);
team.addGame("Flamengo", 2, 0);

console.log(team._games);
