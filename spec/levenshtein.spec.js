describe('The edit distance calculator', function(){
  it('should return an edit distance of 0 when the words are the same', function(){
    var editDistance = levenshteinDistance('python', 'python')
    expect(editDistance).to.be(0);
  });

  it('should calculate the correct distance when only character additions are required', function(){
    var editDistance = levenshteinDistance('java', 'javascript')
    expect(editDistance).to.be(6);
  });

  it('should calculate the correct distance when only character deletions are required', function(){
    var editDistance = levenshteinDistance('golang', 'go')
    expect(editDistance).to.be(4);
  });

  it('should calculate the correct distance when only character substitutions are required', function(){
    var editDistance = levenshteinDistance('swift','scala');
    expect(editDistance).to.be(4);
  });

  it('should calculate the correct distance when input words share no letters in common', function(){
    var editDistance = levenshteinDistance('ruby','lisp');
    expect(editDistance).to.be(4);
  });

  it('should calculate the correct distance when any number of edits are required', function(){
    var editDistance = levenshteinDistance('haskell', 'chicken');
    expect(editDistance).to.be(5);

    editDistance = levenshteinDistance('clojure', 'rust');
    expect(editDistance).to.be(6);

    editDistance = levenshteinDistance('c', 'whitespace');
    expect(editDistance).to.be(9);

    editDistance = levenshteinDistance('sql', 'squirrel');
    expect(editDistance).to.be(5);

    editDistance = levenshteinDistance('elm', 'erlang');
    expect(editDistance).to.be(4);
  });
});

