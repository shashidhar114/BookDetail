import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
constructor(private http:HttpClient){}


onSubmit(details:{title:string,author:string,PublishedYear:number}){
this.http.post("http://localhost:3000/Bookdetail",details).subscribe((res)=>{
})
}
}
