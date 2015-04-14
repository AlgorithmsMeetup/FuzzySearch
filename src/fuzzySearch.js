var fuzzySearch = function(input, dictionary){
  var result;
  if(input in dictionary){
    result = input;
  } else {
    var bestDistance = Infinity;
    var bestRelevance = Infinity;
    var newBest = false;
    var distance;
    var relevance;

    for(var word in dictionary){
      distance = levenshteinDistance(word, input);
      relevance = dictionary[word];

      if(distance < bestDistance){
        newBest = true;
      } else if(distance === bestDistance && relevance < bestRelevance){
        newBest = true;
      }

      if(newBest){
        result = word;
        bestDistance = distance;
        bestRelevance = relevance;
        newBest = false;
      }
    }
  }

  return result
}

