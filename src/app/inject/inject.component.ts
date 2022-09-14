import { JsonPipe } from '@angular/common';
import { Component, EnvironmentInjector, inject, OnInit } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterModule,
} from '@angular/router';

const getSnapshot = () => {
  const activatedRoute = inject(ActivatedRoute);
  return activatedRoute.snapshot;
};

@Component({
  selector: 'app-inject',
  templateUrl: './inject.component.html',
  styleUrls: ['./inject.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, RouterModule],
})
export class InjectComponent implements OnInit {
  public form!: FormGroup;

  // private fb: NonNullableFormBuilder = inject(NonNullableFormBuilder, {});

  constructor(
    private injector: EnvironmentInjector,
    private fb: NonNullableFormBuilder
  ) {

    // 🍕 cake only inject where it's allow
    // const { data } = getSnapshot();
    // console.log('route: ', data);
  }

  ngOnInit(): void {
    // this.injector.runInContext(() => {

    // })
    // const fb: NonNullableFormBuilder = inject(NonNullableFormBuilder, {});

    this.form = this.fb.group({
      name: '',
    });
  }

  test(): void {
    // this.injector.runInContext(() => {
    //   const { data } = getSnapshot();
    //   console.log('route: ', data);
    // });
  }
}
