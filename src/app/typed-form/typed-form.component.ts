import { JsonPipe, NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  UntypedFormGroup,
  UntypedFormControl,
  FormBuilder,
  FormRecord,
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
  imports: [ReactiveFormsModule, JsonPipe, NgForOf],
})
export class TypedFormComponent implements OnInit {
  public formGroupRecord!: FormGroup;
  public form!: FormGroup;
  public untypedForm!: FormGroup;

  private fb: FormBuilder = new FormBuilder();

  constructor() {}

  ngOnInit() {
    // 🎉 v14.0 typed forms
    // this.form = new FormGroup<AuthForm>({
    //   email: new FormControl('ee',),
    //   password: new FormControl<string>('',),
    // });

    this.form = new UntypedFormGroup({
      email: new UntypedFormControl(''),
      password: new UntypedFormControl(''),
    });

    //🥂 or sugar.
    // this.form = this.fb.nonNullable.group({
    //   email: '',
    //   password: ''
    // });

    // TODO: FormRecord
    // Cities and population
    const defaultCities: string[] = ['Bafoussam', 'Douala'];

    this.formGroupRecord = new FormRecord<FormControl<string | null>>({
      bafoussam: new FormControl('300 000'),
      douala: new FormControl('2 000 000'),
    });

    console.log(Object.keys(this.formGroupRecord.value));
  }

  // 🎉 Form Records use case
  public get recordKeys(): string[] {
    return Object.keys(this.formGroupRecord.value);
  }


  public addKey(): void {
    this.formGroupRecord.addControl(
      'Bremen',
      new FormControl('569 352', { nonNullable: true })
    );
  };

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
