import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcast-info',
  templateUrl: './podcast-info.component.html',
  styleUrls: ['./podcast-info.component.scss'],
})
export class PodCastInfoComponent implements OnInit {
  @Input()
  avatar: string;

  @Input()
  description: string;

  @Input()
  trackName: string;

  constructor() {}

  ngOnInit(): void {}
}
