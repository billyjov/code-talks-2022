import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-inject',
  templateUrl: './inject.component.html',
  styleUrls: ['./inject.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
})
export class InjectComponent implements OnInit {
  public form!: FormGroup;

  private fb: NonNullableFormBuilder = inject(NonNullableFormBuilder, {});

  // constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
    });
  }
}
