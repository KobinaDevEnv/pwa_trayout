import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
     RouterModule
 ],
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
