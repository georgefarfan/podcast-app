import { Component, Input, OnInit, Output } from '@angular/core';
import { PodCastEntry } from '../../models/podcast';

@Component({
  selector: 'app-podcast-card',
  templateUrl: './podcast-card.component.html',
  styleUrls: ['./podcast-card.component.scss'],
})
export class PodCastCardComponent implements OnInit {
  @Input()
  entry: PodCastEntry;

  constructor() {}

  ngOnInit(): void {}
}
