import {
  Component,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { SingletonComponent } from './singleton/singleton.component';

@Component({
  selector: 'app-lazy-load',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.scss'],
})
export class LazyLoadComponent implements OnInit {
  @ViewChild('lazyContainer', { read: ViewContainerRef })
  private lazyContainerRef!: ViewContainerRef;

  private cities: string[] = [
    'Douala',
    'Jaunde',
    'Paris',
    'Abidjan',
    'Hamburg',
  ];

  ngOnInit(): void {}

  public async loadLazyContainer(): Promise<void> {
    const { SingletonComponent } = await import(
      './singleton/singleton.component'
    );

    const ref: ComponentRef<SingletonComponent> =
      this.lazyContainerRef.createComponent(SingletonComponent);

    // old way before v14.1
    ref.instance.cities = this.cities;

    // (ref.instance as any).error = 'my error';

    // 🎉 with 14.1
    // 😥 Type safety
    // ref.setInput('cities', this.cities);

    // ref.setInput('error', 'myError');
  }
}
