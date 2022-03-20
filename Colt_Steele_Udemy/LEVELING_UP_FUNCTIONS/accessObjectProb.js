/*
 *  Author: KaptainCS3
 *  Description: Accessing object properties
 *  Date: 20th March 2022
 */

const person = {
  first: "Robert",
  last: "Herjavec",
  fullName() {
    return `${this.first} ${this.last}`;
  },
};
person.fullName(); //!  "Robert Herjavec"
person.last = "Plant";
person.fullName(); //!  "Robert Plants"
