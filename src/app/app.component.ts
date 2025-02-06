import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import{FaceSnap} from './model/face-snap';
import {  EventComponentComponent } from './event-component/event-component.component';


@Component({
  selector: 'app-root',
  imports: [FaceSnapComponent, EventComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
 
  mySnap!: FaceSnap; // Objet FaceSnap (model)

  ngOnInit() {
  this.mySnap = new FaceSnap("title","desc","",new Date(), 10);
  }

}
