import {Meteor} from 'meteor/meteor'
import {Players} from './../imports/api/players';

Meteor.startup(() => {

});

/* Object Spread Operator
let user = {
  name: 'Chris',
  location: 'Mars',
  age: 0
};

let person = {
  ...user,
  age: 25
}
//console.log(person);

// Object Property SHorthand
let manager = 'Scott';
let project = {
  manager,
  laptop: 'laptop'
};
//console.log(project);

let house = {
  bedroom: 2,
  bathrooms: 1.5
};
let yearBuilt = 1992;

let apartment = {
  ...house,
  bedroom: 3,
  yearBuilt,
  flooring: 'Carpet'
};


console.log(apartment);
*/
