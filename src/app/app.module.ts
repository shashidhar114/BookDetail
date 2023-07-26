import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AddBookComponent } from './add-book/add-book.component';
import { BookService } from './services/book.service';
import { MatSortModule } from '@angular/material/sort';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { SortDirective } from './book-detail/directive/sort.directive';



@NgModule({

  declarations: [
    AppComponent,
    AddBookComponent,
    BookDetailComponent,
    SortDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSortModule,
    BrowserModule,
    
    
    


  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
