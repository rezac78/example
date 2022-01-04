function DNAStrand(dna) {
  var letters = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'};
  var arr = [];
  for (var i=0; i < dna.length; i++) {
      arr[i] = letters[dna[i]];
  }
  return arr.join('');
}