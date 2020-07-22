import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const devExps = [
      {
        id: 0,
        title: "Software Engineer | CenturyLink",
        date: "May 2020 - current",
        projects: [
          {
            id: 1,
            name: "",
            desc: `Create, update, and implement features for the latest software platform using modern JavaScript frameworks, including Vue.js and Node.js.
            Utilize Jest for unit testing of all application functionality. Participate in a collaborative, iterative development process.
            `,
          },
        ],
      },
      {
        id: 1,
        title: "Software Developer II | Travelport",
        date: "November 2019 - April 2020",
        projects: [
          {
            id: 1,
            name: "",
            desc: `Create and update data streaming software for travel businesses using NodeJs.
            Update existing code base to conform to ES6 conventions, as well as implementing
            code clarity fixes, and unit testing. Monitor, implement, and analyze Kafka topics to
            provide customers with access to streams.`,
          },
        ],
      },
      {
        id: 2,
        title: "Java Developer | Payfone",
        date: "September 2018 - November 2019",
        projects: [
          {
            id: 1,
            name: "",
            desc: `Utilize Java and Spring technologies to create new features for Payfone\'s
            proprietary security software. Build and deploy new microservices for a variety of
            clients, supporting a wide variety of needs. Participate in a collaborative,
            AGILE-driven, iterative development process.`,
          },
        ],
      },
      {
        id: 3,
        title: "Teaching Assistant | University of Denver",
        date: "April 2018 - July 2018",
        projects: [
          {
            id: 1,
            name: "",
            desc: `Mentored and instructed aspiring junior developers through the Univeristy of Denver
             fullstack web development program. Graded projects, offered feedback, and provided one-on-one instruction.`,
          },
        ],
      },
      {
        id: 4,
        title: "Full Stack Developer | Rebric.io",
        date: "July 2017 - October 2017",
        projects: [
          {
            id: 1,
            name: "",
            desc: `Worked extensively on the client-facing business site for Rebric.io. Built
           with ReactJS, with form functions and validation provided through Redux. Built React,
           Redux, SASS, NodeJS, and Bootstrap applications.`,
          },
        ],
      },
      {
        id: 5,
        title: "Application Developer | Lead Virtue, LLC",
        date: "May 2017 - July 2017",
        projects: [
          {
            id: 1,
            name: "",
            desc:
              "Created applications for accepting payment, lead generation, and customer service. Modernized code of current assets.",
          },
        ],
      },
    ];
    const eduExps = [
      {
        id: 1,
        degree: "Full category Immersive Program",
        school: "Galvanize - Platte",
        date: "July 2016 - December 2016",
      },
      {
        id: 2,
        degree: "Bachelor of Arts - Criminal Justice",
        school: "Univeristy of Colorado",
        date: "January 2008 - December 2010",
      },
    ];
    const mySkills = [
      {
        id: 0,
        skill: "AGILE Workflow",
        category: "dev",
      },
      {
        id: 1,
        skill: "Angular 2(5)",
        category: "framework",
      },
      {
        id: 2,
        skill: "API Integration",
        category: "back",
      },
      {
        id: 3,
        skill: "Bootstrap",
        category: "front",
      },
      {
        id: 4,
        skill: "CSS 3",
        category: "front",
      },
      {
        id: 5,
        skill: "ExpressJS",
        category: "back",
      },
      {
        id: 6,
        skill: "git/GitHub",
        category: "dev",
      },
      {
        id: 7,
        skill: "JavaScript",
        category: "front",
      },
      {
        id: 8,
        skill: "jQuery",
        category: "framework",
      },
      {
        id: 9,
        skill: "Spring",
        category: "framework",
      },
      {
        id: 10,
        skill: "Jest",
        category: "dev",
      },
      {
        id: 11,
        skill: "Node.js",
        category: "back",
      },
      {
        id: 12,
        skill: "PHP",
        category: "back",
      },
      {
        id: 13,
        skill: "ReactJS",
        category: "framework",
      },
      {
        id: 14,
        skill: "Redux",
        category: "framework",
      },
      {
        id: 15,
        skill: "MySQL / PostgreSQL",
        category: "back",
      },
      {
        id: 16,
        skill: "HTML 5",
        category: "front",
      },
      {
        id: 17,
        skill: "Angular 1.x",
        category: "framework",
      },
      {
        id: 18,
        skill: "TypeScript",
        category: "front",
      },
      {
        id: 19,
        skill: "Java",
        category: "back",
      },
      {
        id: 20,
        skill: "VueJS",
        category: "framework",
      },
      {
        id: 21,
        skill: "NuxtJS",
        category: "framework",
      },
    ];
    const portProjs = [
      {
        id: 1,
        title: "Office Anywhere",
        img: "../assets/images/office_anywhere.jpg",
        desc: `An app for the pro on the go. Users can search for venues near them that offer
        work space, and other amenities. Created with Express, NodeJs, Handlebars, and
        Google API.`,
        url: "https://office-anywhere.herokuapp.com/",
      },
      {
        id: 2,
        title: "GitHub",
        img: "../assets/images/github_laptop.jpg",
        desc:
          "Interested in my processes (and humble beginnings)? Pay a visit to my GitHub repo.",
        url: "https://github.com/SanityEclipse",
      },
      {
        id: 3,
        title: "The Flame Paladin Saga",
        img: "../assets/images/flame_paladin.jpg",
        desc: `A side-scrolling platformer game, complete with a cloud-based scoreboard.
        Created with Angular 2(5), TypeScript, Phaser(JS), PostgreSQL, and NodeJS.`,
        url: "https://glacial-sierra-53589.herokuapp.com",
      },
      {
        id: 4,
        title: "The Last Flame Templar",
        img: "./assets/images/old_flame_paladin.jpg",
        desc:
          " A retro-styled, side-scrolling platforming game. Created with Phaser(JS), Tiled, and Gimp.",
        url: "https://the-last-flame-paladin.firebaseapp.com/",
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
