import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  year: number;
  author: string;
  constructor(){
    this.author = 'Pablo Lema';
    this.year = new Date().getFullYear();
  }

}
