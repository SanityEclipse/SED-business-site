import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    
    const devExperiences = [
      {
        id: 1,
        title: 'Web Devloper | Freelance and Contract',
        date: 'January 2017 - Present',
        projects: [
          {
            id: 1,
            name: "Office Anywhere - Developer, Scrum Master",
            desc: "A full stack utility application for locating and rating mobile workspaces. Built with Node.js w/ Express, Google API, Workfrom API, PostgreSQL, and npm."
          },
          {
            id: 2,
            name: "The Flame Paladin Saga — Developer, Animator, Asset Creator",
            desc: "A full stack ‘platformer’ game application, complete with score saving, and a dynamic leaderboard. Built with Angular 2 w/ TypeScript, Node.js w/ Express, PostgreSQL, Knex.js, and npm.",
          },
        ]
      },
      {
        id: 2,
        title: 'Full Stack Developer | Rebric.io',
        date: 'July 2017 - October 2017',
        projects: [
         {
           id: 1,
           name:"",
           desc: "Worked extensively on the client-facing business site for Rebric.io. Built with ReactJS, with form functions and validation provided through Redux. Built React, Redux, SASS, NodeJS, and Bootstrap applications.",
         },
        ]
      },
      {
        id: 3,
        title: 'Application Developer | Lead Virtue, LLC',
        date: 'May 2017 - July 2017',
        projects: [
         {
           id: 1,
           name:"",
           desc: "Created applications for accepting payment, lead generation, and customer service. Modernized code of current assets",
         },
        ]
       }
    ];

    return { devExperiences };

  }

}
