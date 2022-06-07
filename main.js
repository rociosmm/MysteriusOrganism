// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


console.log(returnRandBase());

const pAequorFactory = (idNum, arrDNABases) => {
  return {
    specimenNum: idNum,
    dna: arrDNABases,
    mutate() {
      // randomly selecting a base in the object’s dna property
      let i = Math.floor(Math.random() * this.dna.length);

      // target base's letter
      let oldBase = this.dna[i];

      // Swapping out (mutating) base on DNA
      let altBases = ['A', 'T', 'C', 'G'];
      altBases.splice(altBases.indexOf(oldBase), 1); // find and remove target base
      let mutatedBase = altBases[Math.floor(Math.random() * 3)]; // take one of 3 altBases
    
    //   console.log(`Changed ${oldBase} to ${mutatedBase} on number ${i}`);
      return this.dna.splice(i, 1, mutatedBase);   
    },
    compareDNA(pAequor){
      let identBases = 0;
      for(let i = 0; i < this.dna.length; i++){
        /*for(let j = 0; j < pAequor.dna.length; j++){
        }*/
        if(this.dna[i] == pAequor[i]){
          identBases++;
        }
      }

      // check de identical bases
      switch(identBases){
        case 0:
          console.log("specimen #1 and specimen #2 have 0% DNA in common");
          break;
        case 1:
          console.log("specimen #1 and specimen #2 have 25% DNA in common");
          break;
        case 2:
          console.log("specimen #1 and specimen #2 have 50% DNA in common");
          break;
        case 3:
          console.log("specimen #1 and specimen #2 have 75% DNA in common");
          break;
        case 4:
          console.log("specimen #1 and specimen #2 have 100% DNA in common");
          break;
        default:
          console.log("Default");
          break;
      }
    },
    willLikelySurvive() {
      // Save into an array the C or G results for later check the length of the new array
      const cAndG = this.dna.filter(letter => letter === 'C' || letter === 'G');

      if (cAndG.length/this.dna.length > 0.6) {
        return true;
      } else {
        return false;
      }
    }

  }
}

  // 30 instances
  let sample = [];
  let i = 0;
  while (sample.length < 30) {
    let temp = pAequorFactory(i, mockUpStrand());
    if (temp.willLikelySurvive() == true) {
      sample.push(temp);
      i += 1
    } 
  }

  console.log(sample);




