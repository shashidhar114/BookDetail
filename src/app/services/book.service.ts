import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bookdat } from '../book';
import { Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url: string = "http://localhost:3000/Bookdetail";
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.url
  }
  getBookData(): Observable<bookdat[]> {
    return this.http.get<bookdat[]>(this.url)
  }

}
