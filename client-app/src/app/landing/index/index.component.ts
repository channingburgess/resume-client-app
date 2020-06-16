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
        company: 'CACI International Inc.',
        position: 'Software Developer',
        startDate: new Date("2020-03-01"),
        endDate: null,
        img: 'https://media-exp1.licdn.com/dms/image/C560BAQG7cpEvEbnoKw/company-logo_100_100/0?e=1596672000&v=beta&t=A28zawdRz3_-fNmhVMS37boECm5c7TOoYBnTxbbjIFU',
        description: 'Working with a dedicated team to develop and support applications for the Executive Office of the President.'
      },
      {
        company: 'ACR - American College of Radiology',
        position: 'Mid Application Engineer',
        startDate: new Date("2019-08-01"),
        endDate: new Date("2020-03-01"),
        img: 'https://media-exp1.licdn.com/dms/image/C510BAQH6-kU3CvEPYw/company-logo_100_100/0?e=1596672000&v=beta&t=8ebFmtsD71dsCma-8_d-fXCynEWuSMzCiLDL5ddClJY',
        description: 'Full stack application engineer working with Angular 8, Docker, SQL, .Net Core, and REST Web APIs. I worked with a small agile team using the latest and greatest frameworks and tools to increase efficiency of research conducted within the medical field.'
      },
      {
        company: 'ATS - Applied Technology Solutions',
        position: 'Application Developer II',
        startDate: new Date("2019-08-01"),
        endDate: new Date("2016-07-01"),
        img: 'https://media-exp1.licdn.com/dms/image/C560BAQGsMCXl8Rf8XQ/company-logo_100_100/0?e=1596672000&v=beta&t=yJ2i0-10huP1Xfadxs25tjGTiU-Udfgjj4htOUH7sTg',
        description: 'Full stack developer and Scrum Master. I worked on a rewrite of a large enterprise system into a modern framework. We used AngularJS, Javascript, C# MVVM, and PLSQL to develop a responsive, scalable application. As a scrum master I mitigated roadblocks to deliver successful burn down reports to stakeholders'
      },
      {
        company: 'Corning Incorporated',
        position: 'Software Engineer Intern',
        startDate: new Date("2016-07-01"),
        endDate: new Date("2015-03-01"),
        img: 'https://media-exp1.licdn.com/dms/image/C560BAQGmUQnhOosU6A/company-logo_100_100/0?e=1596672000&v=beta&t=pSMwG9Q65vS1Dq2jSIX4wgopZVc29LbolBT-B-Vhc2Q',
        description: 'Developed in house programs to control and manage factory operations. Levered ASP.NET web forms applications as well as VBA macros to complete data change control of factory production information.'
      }];
  }

}
