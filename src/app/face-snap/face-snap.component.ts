import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

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
