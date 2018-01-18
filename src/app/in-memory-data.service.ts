import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const devExps = [
      {
        id: 1,
        title: 'Web Devloper | Freelance and Contract',
        date: 'January 2017 - Present',
        projects: [
          {
            id: 1,
            name: "Office Anywhere - Developer, Scrum Master",
            desc: "A full category utility application for locating and rating mobile workspaces. Built with Node.js w/ Express, Google API, Workfrom API, PostgreSQL, and npm."
          },
          {
            id: 2,
            name: "The Flame Paladin Saga — Developer, Animator, Asset Creator",
            desc: "A full category ‘platformer’ game application, complete with score saving, and a dynamic leaderboard. Built with Angular 2 w/ TypeScript, Node.js w/ Express, PostgreSQL, Knex.js, and npm.",
          },
        ]
      },
      {
        id: 2,
        title: 'Full category Developer | Rebric.io',
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
    const eduExps = [
      {
        id: 1,
        degree: "Full category Immersive Program",
        school: "Galvanize - Platte",
        date: "July 2016 - December 2016"
      },
      {
        id: 2,
        degree: "Bachelor of Arts - Criminal Justice",
        school: "Univeristy of Colorado",
        date: "January 2008 - December 2010"
      }
    ];
    const mySkills = [
      {
        id: 0,
        skill: "AGILE Workflow",
        category: "dev"
      },
      {
        id: 1,
        skill: "Angular 2(5)",
        category: "framework"
      },
      {
        id: 2,
        skill: "API Integration",
        category: "back"
      },
      {
        id: 3,
        skill: "Bootstrap",
        category: "front"
      },
      {
        id: 4,
        skill: "CSS 3",
        category: "front"
      },
      {
        id: 5,
        skill: "ExpressJS",
        category: "back"
      },
      {
        id: 6,
        skill: "git/GitHub",
        category: "dev"
      },
      {
        id: 7,
        skill: "JavaScript",
        category: "front"
      },
      {
        id: 8,
        skill:"jQuery",
        category: "framework"
      },
      {
        id: 9,
        skill:"Laravel",
        category: "framework"
      },
      {
        id: 10,
        skill:"Mocha/Chai/Jest",
        category: "dev"
      },
      {
        id: 11,
        skill:"Node.js",
        category: "back"
      },
      {
        id: 12,
        skill:"PHP",
        category: "back"
      },
      {
        id: 13,
        skill:"ReactJS",
        category: "framework"
      },
      {
        id: 14,
        skill:"Redux",
        category: "framework"
      },
      {
        id: 15,
        skill: "MySQL / PostgreSQL",
        category: "back"
      },
      {
        id: 16,
        skill: "HTML 5",
        category: "front"
      },
      {
        id: 17,
        skill: "Angular 1.x",
        category: "framework"
      },
      {
        id: 18,
        skill: "TypeScript",
        category: "front"
      },
    ]
    const portProjs = [
      {
        id: 0,
        title: "Rebric.io Business Site",
        img: "../assets/images/rebric_laptop.jpg",
        desc: "Chase after silly colored fish toys around the house Cat ipsum dolor sit amet, purr while eating.",
        url: "rebric.io",
      },
      {
        id: 1,
        title: "Office Anywhere",
        img: "../assets/images/office_anywhere.jpg",
        desc: "The fat cat sat on the mat bat away with paws get video posted to internet for chasing red dot cat fur is the new black.",
        url: "placeholder"
      },
    ];

    return {
      devExps,
      eduExps,
      mySkills,
      portProjs,
    };

  }

}
