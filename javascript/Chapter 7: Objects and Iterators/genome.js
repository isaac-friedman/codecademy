// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, genome) => {
  let pAequor = {
    specimenNum: specimenNum,
    dna: genome,
    mutate: function(base) {
      let changeBase = Math.floor(Math.random() * 4);
      let newBase = "";
      do {
        newBase = returnRandBase();
      } while(dna[changeBase] === newBase);
      //as soon as they're different
      dna[changeBase] = newBase;
    },
    compareDNA: function(specimen) {
      let identical = 0;
      for (i=0; i<this.dna.length; i++) {
        if (specimen.dna[i]===this.dna[i]){
          identical++;
        }
      }
      percentIdentical = (identical/15)*100;
      console.log(`${this.specimenNum} and ${specimen.specimenNum} share ${percentIdentical}% of their DNA`);
    },
    willLikelySurvive: function() {
      let desirableBases = this.dna.reduce(function(base, ['C', 'G']) {
        if (base in ['C','G']) {
          desirableBase++;
        }
        return desirableBases;
      });
      let survivability = (desirableBases/15)*100;
      if(survivability >=60) {
        return true;
      } else {return false;}
    }
  }
  return pAequor;
}
