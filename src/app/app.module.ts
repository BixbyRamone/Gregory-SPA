import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabbedPanelComponent } from './tabbed-panel/tabbed-panel.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      TabbedPanelComponent,
      SkillsComponent,
      HomeComponent,
      PagesComponent
   ],
   imports: [
      BrowserModule,
      TabsModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
