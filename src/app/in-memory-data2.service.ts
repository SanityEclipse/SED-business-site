import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService2 implements InMemoryDbService {

  createDb() {
    const educationExps = [
      {
        id: 1,
        degree: "Full Stack Immersive Program",
        school: "Galvanize - Platte",
        date: "July 2016 - December 2016"
      },
      {
        id: 2,
        degree: "Bachelor of Arts - Criminal Justice",
        school: "Univeristy of Colorado",
        date: "January 2008 - December 2010"
      }
    ]
    return { educationExps };
  }
}
