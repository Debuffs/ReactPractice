import {Meteor} from 'meteor/meteor'
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  class Person {
    constructor(name = 'Anonymous', age = 0) {
      this.name = name;
      this.age = age;
    }
    getGreeting(){
      // Hi! I am Chris.
      //return 'Hi! I am ' + this.name + '.';
      return `Hi! I am ${this.name}.`;
    }
    getPersonDescription(){r
      return `${this.name} is ${this.age} year(s) old`;
    }
  }
  let me = new Person('Chris');
  console.log(me.getGreeting());
  let person = new Person('Christopher', 15);
  console.log(person.getPersonDescription());
});
