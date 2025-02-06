import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-event-component',
  imports: [],
  templateUrl: './event-component.component.html',
  styleUrl: './event-component.component.scss'
})
export class EventComponentComponent {
  nb: number=0;

  ngOnInit() {
    this.nb=0;
    console.log("ngOnInit()");
  }

  onClickButton(){
    this.nb++;
  }
}
