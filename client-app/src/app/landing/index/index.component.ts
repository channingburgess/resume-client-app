import { Component, OnInit } from '@angular/core';
import { Workhistory } from '../workhistory';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }
  WorkHistory: Workhistory[];

  ngOnInit(): void {
    this.WorkHistory = [
      {
        company: 'Meridian Cooperative.',
        position: 'Software Developer III',
        startDate: new Date("2021-05-01"),
        endDate: null,
        img: './assets/pictures/MeridianCoop.PNG',
        description: `I develop and support payment and billing software for electric,
 water, and fiber utilities. My work spans all application layers,
 including POS devices, customer-facing UI, application servers,
 and database programming. I utilize .NET, MVC Razor, and
 AngularJS for development, while employing PL/SQL and
 T-SQL for database management.`
      },
      {
        company: 'Cosaint Cyber.',
        position: 'Systems Engineer II',
        startDate: new Date("2020-09-01"),
        endDate: null,
        img: './assets/pictures/CosaintCyber.PNG',
        description: `I implement Elasticsearch, Kibana, and Logstash
 configuration files, set up data pipelines for various audit
 log types (Syslog, Web, etc.) and create custom python
 and shell scripts to collect and aggregate various types of
 external reporting (JSON/XML). Identify, design, and
 implement process improvements for log collection and
 aggregation: automating manual processes, optimizing
 data delivery, redesigning infrastructure for greater
 scalability.`
      },
      {
        company: 'CACI International Inc.',
        position: 'Software Developer III',
        startDate: new Date("2020-03-01"),
        endDate: new Date("2021-05-01"),
        img: './assets/pictures/CACI.PNG',
        description: `Working with a dedicated team to develop and support
 applications for the Executive Office of the President
 using Angular JS, C#, ASP.NET MVC, Entity Framework,
 and T-SQL.`
      },
      {
        company: 'ACR - American College of Radiology',
        position: 'Mid Application Engineer',
        startDate: new Date("2019-08-01"),
        endDate: new Date("2020-03-01"),
        img: null,
        description: 'Full stack application engineer working with Angular 8, Docker, SQL, .Net Core, and REST Web APIs. I worked with a small agile team using the latest and greatest frameworks and tools to increase efficiency of research conducted within the medical field.'
      },
      {
        company: 'ATS - Applied Technology Solutions',
        position: 'Application Developer II',
        startDate: new Date("2019-08-01"),
        endDate: new Date("2016-07-01"),
        img: null,
        description: 'Full stack developer and Scrum Master. I worked on a rewrite of a large enterprise system into a modern framework. We used AngularJS, Javascript, C# MVVM, and PLSQL to develop a responsive, scalable application. As a scrum master I mitigated roadblocks to deliver successful burn down reports to stakeholders'
      },
      {
        company: 'Corning Incorporated',
        position: 'Software Engineer Intern',
        startDate: new Date("2016-07-01"),
        endDate: new Date("2015-03-01"),
        img: null,
        description: 'Developed in house programs to control and manage factory operations. Levered ASP.NET web forms applications as well as VBA macros to complete data change control of factory production information.'
      }];
  }

}
