function wordCount(sentence) {
    const counter = {};
    for (let word of sentence.split(" ")) {
      if (counter[word]) {
        counter[word] += 1;
      } else {
        counter[word] = 1;
      }
    }
    return counter;
  }
  const str = "this is this and that is that";
  console.log(wordCount(str));