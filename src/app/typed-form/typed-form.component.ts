import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  UntypedFormGroup,
  UntypedFormControl,
  FormBuilder,
} from '@angular/forms';

interface AuthForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-typed-form',
  templateUrl: './typed-form.component.html',
  styleUrls: ['./typed-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
})
export class TypedFormComponent implements OnInit {
  public form!: FormGroup;
  public untypedForm!: FormGroup;
  private fb: FormBuilder = new FormBuilder();

  constructor() {}

  ngOnInit() {
    // 🎉 v14.0 typed forms
    // this.form = new FormGroup<AuthForm>({
    //   email: new FormControl('ee'),
    //   password: new FormControl<string>(''),
    // });

    // TODO: FormRecord

    this.form = new UntypedFormGroup({
      email: new UntypedFormControl(''),
      password: new UntypedFormControl(''),
    });

    //🥂 or
    // this.form = this.fb.nonNullable.group({
    //   email: '',
    //   password: ''
    // });
  }

  public reset(): void {
    this.form.reset();
  }

  public fill(): void {
    this.form.setValue({
      email: 'email@neusta.de',
      password: 'Youpi',
    });
  }
}
