let games = [
  "/pages/games/goldeneye007/goldeneye.html",
  "/pages/games/roadrash/roadrash.html",
  "/pages/games/ocarina of time/ocarinaoftime.html",
  "/pages/games/tonyhawk2/tonyhawk2.html",
];


function randomGame() {
    let randomIndex = Math.floor(Math.random() * games.length);
    window.location.href = games[randomIndex];
}

