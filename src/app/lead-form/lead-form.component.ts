import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm} from "@angular/forms";


@Component({
  selector: 'app-lead-form',
  templateUrl: './lead-form.component.html',
  styleUrls: ['./lead-form.component.scss']
})
export class LeadFormComponent implements OnInit {

  constructor() { }
  onSubmit(from:NgForm){
    
  }
  ngOnInit(): void {
  }

}
