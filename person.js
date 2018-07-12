class Person {
  constructor(birthYear) {
    this.dateObject = new Date(`01/01/${birthYear}`);
    this.birthYear = birthYear;
  }

  isMillennial() {
    return this.birthYear > 1982;
  }

  isRetiree() {
    let age = this.calculateAge();
    return age >= 65;
  }

  calculateAge() {
    let ageDifMs = Date.now() - this.dateObject.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
module.exports = Person;
