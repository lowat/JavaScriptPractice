function tournamentWinner(competitions, results) {
    let leadingTeam = '';
    let highScore = 0;
    const scoreboard = new Map();
    competitions.forEach((competition, idx) => {
      let winningTeamIdx = results[idx] == 1 ? 0 : 1;
      let currentCompetitionWinningTeam = competition[winningTeamIdx];
      let currentWinningTeamScore = scoreboard.has(currentCompetitionWinningTeam) ? scoreboard.get(currentCompetitionWinningTeam) : 0;
      currentWinningTeamScore += 3;
      scoreboard.set(currentCompetitionWinningTeam, currentWinningTeamScore);
      if(currentWinningTeamScore > highScore){
        leadingTeam = currentCompetitionWinningTeam;
        highScore = currentWinningTeamScore;
      }
    });
    return leadingTeam;
  }