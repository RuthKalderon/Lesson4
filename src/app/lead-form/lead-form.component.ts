import { Component, OnInit } from '@angular/core';
import { NgForm} from "@angular/forms";


@Component({
  selector: 'app-lead-form',
  templateUrl: './lead-form.component.html',
  styleUrls: ['./lead-form.component.scss']
})
export class LeadFormComponent implements OnInit {

  phones=[{id:1, value:'Landline'},{id:2, value:'Mobile Phone'}];
  landAreaCode = [{id:1, value:"02"},{id:2, value:"03"},{id:3, value:"04"},{id:4, value:"08"},{id:5, value:"09"},{id:6, value:"077"}];
  mobileAreaCode = [{id:1, value:"050"},{id:2, value:"051"},{id:3, value:"052"},{id:4, value:"053"},{id:5, value:"054"},{id:6, value:"055"},{id:7, value:"056"}
  ,{id:8, value:"057"},{id:9, value:"058"}];
  selectPhone:number=1;
  selectArea:string ="Select Area";
  constructor() { }
  onSubmit(from:NgForm){
    
  }
  ngOnInit(): void {
  }
  getAreaList(type:number): { id: number; value: string; }[] | undefined
  {
    if(type == 1)
      return this.landAreaCode;
    if(type == 2)
      return this.mobileAreaCode;
    return [];
  }

}
