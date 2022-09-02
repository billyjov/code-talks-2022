import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-img-loading',
  templateUrl: './img-loading.component.html',
  styleUrls: ['./img-loading.component.scss'],
})
export class ImgLoadingComponent implements OnInit {
  public dogImagePaths$!: Observable<string>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
     this.dogImagePaths$ = this.http
       .get<string>(`https://dog.ceo/api/breed/hound/images`)
       .pipe(map((res: any) => res.message));
  }
}
