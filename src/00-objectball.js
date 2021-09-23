const gameObject = () => {
  return {
    home: {
      teamName: 'Brooklyn Nets',
      colors: ['Black', 'White'],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          "slam dunks": 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          "slam dunks": 7
          // "f'd around and got a quintuple-double"
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          "slam dunks": 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          "slam dunks": 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          "slam dunks": 1
        },
      }

    },
    away: {
      teamName: 'Charlotte Hornets',
      colors: ['Turquoise', 'Purple'],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          "slam dunks": 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          "slam dunks": 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          "slam dunks": 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          "slam dunks": 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          "slam dunks": 12
        },
      }
    }
  }
}

const away = gameObject().away;
const home = gameObject().home;
const allPlayers = {...away.players, ...home.players};

const numPointsScored = player => allPlayers[player].points;

const shoeSize = player => allPlayers[player].shoe;

const teamColors = teamName => {
  const colors = () => {
    if (away.teamName === teamName) return away.colors;
    else if (home.teamName === teamName) return home.colors;
    else return `The ${teamName} didn't play in this game. The ${home.teamName} played against the ${away.teamName} in this game.`;
  };
  return colors();
};

const teamNames = () => [home.teamName, away.teamName];

const playerNumbers = teamName => {
  const numbers = [];
  const getNumbers = (() => {
    if (away.teamName === teamName) {
      for (const number in away.players) {
        numbers.push(away.players[number].number)
      }
    }
    else if (home.teamName === teamName) {
      for (const number in home.players) {
        numbers.push(home.players[number].number)
      }
    }
  })();
  return numbers.length > 0 ? numbers : `The ${teamName} didn't play in this game. The ${home.teamName} played against the ${away.teamName} in this game.`;
};

const playerStats = playerName => allPlayers[playerName];

const bigShoeRebounds = () => {
  let biggestShoeSize = 0;
  let rebounds = 0;
  for (const player in allPlayers) {
    if (allPlayers[player].shoe > biggestShoeSize) {
      biggestShoeSize = allPlayers[player].shoe;
      rebounds = allPlayers[player].rebounds;
    };
  };
  return rebounds;
};

const mostPointsScored = () => {
  let mostPoints = 0;
  let highestScorer = '';
  for (const player in allPlayers) {
    if (allPlayers[player].points > mostPoints) {
      mostPoints = allPlayers[player].points;
      highestScorer = `${player}`
    };
  };
  return highestScorer;
};

const winningTeam = () => {
  const awayPoints = (() => {
    let points = 0;
    for (const player in away.players) points += away.players[player].points;
    return points;
  })();
  
  const homePoints = (() => {
    let points = 0;
    for (const player in home.players) points += home.players[player].points;
    return points;
  })();
  return homePoints > awayPoints ? `The ${home.teamName} won, ${homePoints} to ${awayPoints}` : `${away.teamName} won, ${awayPoints} to ${homePoints}`;
};

const playerWithLongestName = () => {
  let longestNameLength = 0;
  let longestName = '';
  for (const player in allPlayers) {
    if (`${player}`.length > longestNameLength) {
      longestNameLength = `${player}`.length;
      longestName = `${player}`;
    };
  }
  return longestName;
};

const doesLongNameStealATon = () => {
  let mostSteals = 0;
  for (const player in allPlayers) if (allPlayers[player].steals > mostSteals) mostSteals = allPlayers[player].steals;
  return allPlayers[playerWithLongestName()].steals === mostSteals ? true : false;
};