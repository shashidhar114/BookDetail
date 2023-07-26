import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})


export class BookDetailComponent {
  public myData;

  sortedData;


  enteredSearchValue: string = '';
  delurl: string = "http://localhost:3000/Bookdetail";

  ngOnInit() {
    this.service.getBookData().subscribe((res) => {
      this.myData = res;

    });

  }
  constructor(private service: BookService, private http: HttpClient) {

  }

  // DeleteBook(tit) {

  //   this.myData.forEach((value, index) => {
  //     if (value == tit)
  //       this.myData.splice(index, 1)
  //   });
  // }

  // delete(product: any) {
  //   this.service(product).subscribe(() => {
  //     this.myData.data.filter((value, key) => {
  //       return value.title != product.title;
  //     });
  //   });
  // }

  delete(detail:any){
    this.http.delete(this.delurl + '/'+detail).subscribe()
  }
}



