import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  titleName="Elchanan";
  constructor(private title: Title) {
    title.setTitle(this.titleName);
   }

  ngOnInit(): void {
  }

}
