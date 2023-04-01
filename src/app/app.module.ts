import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
// import { HelloComponent } from './hello/hello.component';
// import { Bai05Component } from './bai05/bai05.component';
// import { ProgressBarComponent } from './progress-bar/progress-bar.component';
// import { AuthorListComponent } from './author-list/author-list.component';
// import { AuthorDetailComponent } from './author-detail/author-detail.component';
// import { ToggleComponent } from './toggle/toggle.component';
// import { TabGroupComponent } from './tab-group/tab-group.component';
// import { TabPanelComponent } from './tab-panel/tab-panel.component';
// import {TabPanelContentDirective} from './tab-panel-content.directive';
// import { PipeExampleComponent } from './pipe-example/pipe-example.component';
// import {AppTitlePipe} from './pipe-example/app-title.pipe'
// import {IsAdultPipe} from './pipe-example/isAdult.pipe';
// import { PostComponentComponent } from './post-component/post-component.component';
// import { PostListComponent } from './post-list/post-list.component'
// import { PostService } from './services/post.services';
// import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {GaugeModule} from 'angular-gauge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: 'search/:game-search',
    component: SearchBarComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,

    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
