class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.creator = null;
    this.offspring = [];
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numOfVamps = 0;
    let currVamp = this;

    while (currVamp.creator) {
      currVamp = currVamp.creator;
      numOfVamps++;
    }

    return numOfVamps;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (!this.creator) {
      return true;
    }

    if (vampire.creator === null) {
      return false;
    }

    if (
      this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal
    ) {
      return true;
    } else {
      return false;
    }

    // return true
  }
  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {}
}

// const ali = new Vampire("Ali", 1996);
// const simone = new Vampire("Simone", 2000);
// const florida = new Vampire("Florida", 2077);

// ali.addOffspring(simone);

// console.log(ali);

module.exports = Vampire;