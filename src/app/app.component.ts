import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import {  EventComponentComponent } from './event-component/event-component.component';

@Component({
  selector: 'app-root',
  imports: [FaceSnapComponent, EventComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
}
