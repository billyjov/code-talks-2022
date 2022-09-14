import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reflect-common',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reflect-common.component.html',
  styleUrls: ['./reflect-common.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReflectCommonComponent  {
  @Input() username!: string;
  @Output() usernameChanged!: EventEmitter<boolean>;
}
