import { Component, OnInit } from '@angular/core';
import { AccessService } from '../services/access.service'


@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  // providers:[AccessService]
})
export class LogFormComponent implements OnInit {
  // person: String
  // message: String

  constructor( private myService: AccessService ) { }

  ngOnInit() {}

}
