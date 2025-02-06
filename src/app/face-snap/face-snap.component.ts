import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from '../model/face-snap'; 
@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  title: string="";
  description: string="";
  createdAt: Date= new Date();
  snaps: number=1;
  imageUrl: string="";

  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis toujours !';
    this.createdAt = new Date();
    this.snaps = 5;
    
    this.imageUrl = 'angular.png';
  }
}
