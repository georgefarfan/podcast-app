import { Component, Input, OnInit } from '@angular/core';
import { PodCastInfo } from '../../models/podcast-detail';

@Component({
  selector: 'app-podcast-info',
  templateUrl: './podcast-info.component.html',
  styleUrls: ['./podcast-info.component.scss'],
})
export class PodCastInfoComponent implements OnInit {
  @Input()
  data: PodCastInfo;

  constructor() {}

  ngOnInit(): void {}
}
