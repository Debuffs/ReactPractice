import {Meteor} from 'meteor/meteor'
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  // class Person {
  //   constructor(name = 'Anonymous', age = 0) {
  //     this.name = name;
  //     this.age = age;
  //   }
  //   getGreeting(){
  //     // Hi! I am Chris.
  //     //return 'Hi! I am ' + this.name + '.';
  //     return `Hi! I am ${this.name}.`;
  //   }
  //   getPersonDescription(){
  //     return `${this.name} is ${this.age} year(s) old`;
  //   }
  // }
  //
  // class Employee extends Person {
  //   constructor(name, age, title) {
  //     super(name, age);
  //     this.title = title;
  //   }
  //   getGreeting() {
  //     if(this.title) {
  //       return `Hi! I am ${this.name}. I work as a ${this.title}`;
  //     }
  //     else {
  //       return super.getGreeting();
  //     }
  //   }
  //   hasJob() {
  //     return !!this.title;
  //   }
  // }
  // class Programmer extends Person {
  //   constructor(name, age, preferredLanguage = 'Assembly') {
  //     super(name, age);
  //     this.preferredLanguage = preferredLanguage;
  //   }
  //   getGreeting() {
  //     if(this.preferredLanguage) {
  //       return `Hi! I am ${this.name}. I am a(n) ${this.preferredLanguage} developer.`;
  //     }
  //     else {
  //       return super.getGreeting();
  //     }
  //   }
  // }
  // let me = new Programmer('Chris', 26, 'Ruby');
  // console.log(me.getGreeting());
});
