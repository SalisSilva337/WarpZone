let games = [
  "/pages/games/goldeneye007/goldeneye.html",
  "/pages/games/roadrash/roadrash.html",
  "/pages/games/ocarina of time/ocarinaoftime.html",
  "/pages/games/tonyhawk2/tonyhawk2.html",
  "/pages/games/street fighter 2/streetfighter2.html",
  "/pages/games/super mario world/mario.html",
  "/pages/games/sonic/sonic.html"
];


function randomGame() {
    let randomIndex = Math.floor(Math.random() * games.length);
    if (this.window.location.pathname === games[randomIndex]) {
      randomIndex = (randomIndex + 1) % games.length; 
    }
    window.location.href = games[randomIndex];
}

