import { NgForOf } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.scss'],
  standalone: true,
  imports: [NgForOf],
})
export class SingletonComponent implements OnChanges {
  @Input() cities: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes should appear', changes);
  }
}
