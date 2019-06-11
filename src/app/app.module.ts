import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {PostComponent} from './post-component/post.component';
import {PostService} from './services/post.service';
import {HttpClientModule} from '@angular/common/http';
import {MatCheckboxModule, MatDialog, MatDialogModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/typings/button';
import { PostDetailsComponent } from './post-details/post-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent],
  entryComponents: [PostDetailsComponent]
})
export class AppModule {
}
