const sentence = "bingo bongo bish bash bosh";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => i === sentence.length-1 ? console.log(sentence[i] + "\n") : process.stdout.write(sentence[i]), 50*i)
}