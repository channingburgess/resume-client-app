import { Component, OnInit, Input } from '@angular/core';
import { Workhistory } from '../workhistory';

@Component({
  selector: 'app-workitem',
  templateUrl: './workitem.component.html',
  styleUrls: ['./workitem.component.scss']
})
export class WorkitemComponent implements OnInit {

  constructor() { }
  @Input() work: Workhistory;
  ngOnInit(): void {
  }

}
