import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { Bai05Component } from './bai05/bai05.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import {TabPanelContentDirective} from './tab-panel-content.directive';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import {AppTitlePipe} from './pipe-example/app-title.pipe'
import {IsAdultPipe} from './pipe-example/isAdult.pipe';
import { PostComponentComponent } from './post-component/post-component.component';
import { PostListComponent } from './post-list/post-list.component'
import { PostService } from './services/post.services';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    Bai05Component,
    ProgressBarComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    ToggleComponent,
    TabGroupComponent,
    TabPanelComponent,
    TabPanelContentDirective,
    PipeExampleComponent,
    AppTitlePipe,
    IsAdultPipe,
    PostComponentComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
