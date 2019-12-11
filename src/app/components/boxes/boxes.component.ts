import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit {
  public a: string = '<h1>Paokara</h1>';

  constructor() {
  }

  ngOnInit() {
  }

}
