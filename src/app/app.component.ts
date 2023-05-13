import { Component, Host, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';

const HTTPS = 'https://';
const API_MAIN = 'jsonplaceholder.typicode.com/';

export interface IConfig {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // todos = 'https://jsonplaceholder.typicode.com/todos/1';
  todos = HTTPS + API_MAIN + 'todos';
  posts = HTTPS + API_MAIN + 'posts';

  example: any;

  constructor(private http: HttpClient) {}
  // @Host() ProductListComponent:any
  ngOnInit() {
    this.getConfig().subscribe((data) => {
      this.example = data;
    });
  }

  getConfig() {
    return this.http.get<IConfig>(this.todos);
    // return this.http.get<any>(this.configUrl);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
