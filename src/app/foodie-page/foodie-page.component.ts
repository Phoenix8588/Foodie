import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodie-page',
  templateUrl: './foodie-page.component.html',
  styleUrls: ['./foodie-page.component.css']
})
export class FoodiePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('selector');
  }
  ngOnDestroy(){
    document.body.classList.remove('selector');
  }
}
