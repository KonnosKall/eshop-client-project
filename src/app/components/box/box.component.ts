import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  constructor(
    public ss: SharedService,
  public inp: SharedService
  ) { }

  ngOnInit() {
  }

}
