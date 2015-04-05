# FuzzySearch

Fuzzy search, or [approximate string matching](http://en.wikipedia.org/wiki/Approximate_string_matching), is a method of finding the most similar data to some given input from a collection of data.

A few examples how this can be used:
* [Shazam](http://www.shazam.com/), which listens to 20-30 seconds of a song and tells you what song it is
* DNA matching and searching
* Google’s ‘did you mean...’ feature in search ([sort of...](#google))
* Autocorrect and spellcheck


Fuzzy search works by comparing some input word (or song, or DNA sequence) to a library of known terms and calculating which one is the most similar to the input.

So, how is similarity determined, you ask...

## Edit Distance

We can determine similarity of two strings by calculating their edit distance-- that’s the number of character additions, deletions, or substitutions you’d have to make to transform one string into the other.  This can be a very computationally expensive operation, because you must compare every character of one string to every character of the other in order to determine the best edit operations to make.  There are a number of algorithms for doing this, but for this we’ll be working with the [Levenshtein Distance](http://en.wikipedia.org/wiki/Levenshtein_distance).


### [Levenshtein Distance](http://en.wikipedia.org/wiki/Levenshtein_distance)

The Levenshtein distance is one way of calculating edit distance.  Starting from the beginning of each word, it compares each letter and starts calculating which letters should remain, and which should be substituted, added, or removed.  I could explain everything about it here, but it’d probably be easier to check out the wikipedia page.

## Improving upon fuzzy search

There are certainly ways of improving the accuracy of fuzzy search by calculating more than just the edit distance.  One way could be to assess the relevance of words in addition to the edit distance.  Just a few ideas:
* For use with natural language processing (perhaps speech to text, or sentence parsing), you could narrow your search space to only certain parts of speech (e.g. nouns or verbs)
* If you expect that the input word just has a typo or two (imagine someone typing on a mobile keyboard--it’s easy to hit the wrong key!), but approximately the right number of letters, you could assume that words with the same number of letters are probably more relevant
* And there are always those pesky words that no one can remember which vowels they have (is it relevance, or relavance?), so you could restrict relevance based on the right consonants vs vowels in a word (or again, by length of the word).

<a name="google"></a>
### Did you mean...?

Think about all the data Google has in addition to just how words are spelled.  They have all sorts of data about what people search for, how long they’re on the page, the number of links they click, and how quickly they make another search.  If you had that sort of data, how would you improve the ‘did you mean...’ feature beyond just calculating the edit distance?


## Getting Started

This repo focuses on building the levenshtein distance calculator and using it to implement fuzzy search.  Starting with levenshtein.js, implement the edit distance calculator.  Then move over to fuzzySearch.js to use your calculator to implement fuzzy search.  Since there may be multiple terms to a given input with the same edit distance, every word in the dictionary (commonNouns.js) has some arbitrarily assigned relevance score, where lower numbers indicate higher relevance.  In the case of a tie (multiple words having the same edit distance), use the relevance scores to settle it.

If you’re feeling brave and you’re up for an extra challenge, check out assessRelevance.js to write your own algorithm for calculating relevance scores.  Get creative!  Try anything you can think of!  It’s your chance to think a bit more about what might make a word more relevant than another in any given case.  If you decide to take this challenge, specs have already been set up for you, just add a few test words within assessRelevance.spec.js.

