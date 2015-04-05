xdescribe('Relevance assessment', function(){     // Don't forget to remove the x at the beginning of this line to run these tests!
  it('should determine the most relevant word from a set and the original word', function(){

    /*    Add some data here to create your own relevance test!    */

    var testWordSets = {
      set1: {
        originalInput: '',       // <----- This is the original input given to fuzzy search (i.e., an incorrect word)
        set: [],                 // <----- This is a set of possible words that it could be (just as if there were multiple words that had the same edit distance from the original)
        mostRelevantWord: ''     // <----- And this is the word that you want to be returned from the findMostRelevantWord function
      },

      set2: {                    // <----- Of course, it's not good enough for it to only work on one test case!
        originalInput: '',       // <----- Add another test case here, just the way you did above to show that your function works for a variety of scenarios
        set: [],
        mostRelevantWord: ''
      },

      set3: {                    // <----- And now, add one more test case, just for good measure
        originalInput: '',
        set:[],
        mostRelevantWord: ''
      }
    }                            // Don't forget to remove the x from describe on line 1 to run these tests!

    var match;
    var originalInput;
    var wordSet;
    var expectedMostRelevant;
    var actualMostRelevant

    for(var set in testWordSets){
      originalInput = testWordSets[set]['originalInput'];
      wordSet = testWordSets[set]['set'];
      expectedMostRelevant = testWordSets[set]['mostRelevantWord'];
      var actualMostRelevant = findMostRelevantWord(originalInput, wordSet);

      expect(actualMostRelevant).to.be(expectedMostRelevant);
    }
  });
});

