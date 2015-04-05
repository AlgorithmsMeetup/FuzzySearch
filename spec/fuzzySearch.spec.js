describe('Fuzzy search', function(){
  it('should return the input word if it exists in the dictionary', function(){
    var dictionaryWords = ['people', 'time', 'state', 'point', 'story']
    var match;

    for(var i = 0; i < dictionaryWords.length; i++){
      match = fuzzySearch(dictionaryWords[i], words);
      expect(match).to.be(dictionaryWords[i])
    }
  });

  it('should return the word with the smallest edit distance from the input word when there is only one closest word', function(){
    var testWords = ['moent', 'ord', 'teacer', 'busines'];
    var expectedWords = ['moment', 'word', 'teacher', 'business'];
    var match;

    for(var i = 0; i < testWords.length; i++){
      match = fuzzySearch(testWords[i], words);
      expect(match).to.be(expectedWords[i])
    }
  });

  it('should return the most relevant word to the input word when there are multiple dictionary words with the same edit distance from the input word', function(){
    var testWords = ['lie', 'ar', 'may', 'cool'];
    var expectedWords = ['line', 'art', 'man', 'door'];
    var match;

    for(var i = 0; i < testWords.length; i++){
      match = fuzzySearch(testWords[i], words);
      expect(match).to.be(expectedWords[i]);
    }
  });
});

