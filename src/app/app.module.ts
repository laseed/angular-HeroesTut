import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http'
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule }     from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
@NgModule({
  imports:      [  HttpClientModule, BrowserModule, FormsModule ,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HeroesComponent, HeroDetailComponent, MessagesComponent, DashboardComponent, HeroSearchComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HeroService, MessageService, InMemoryDataService]
})
export class AppModule { }
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)