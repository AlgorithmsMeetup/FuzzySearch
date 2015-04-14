var levenshteinDistance = function(word1, word2){
  var grid = [];

  for(var i = 0; i <= word1.length; i++){
    grid.push([i]);
  }

  for(var j = 1; j <= word2.length; j++){
    grid[0].push(j);
  }

  for(var i = 1; i <= word1.length; i++){
    for(var j = 1; j <= word2.length; j++){
      if(word1[i - 1] === word2[j - 1]){
        grid[i][j] = grid[i - 1][j - 1];
      } else {
        var above = grid[i - 1][j];
        var left = grid[i][j - 1];
        var aboveLeft = grid[i - 1][j - 1];
        grid[i][j] = Math.min(above, left, aboveLeft) + 1;
      }
    }
  }

  return grid[word1.length][word2.length];
}

