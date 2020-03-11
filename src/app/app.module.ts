import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabbedPanelComponent } from './tabbed-panel/tabbed-panel.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { AboutMeComponent } from './Tabs/about-me/about-me.component';
import { ProjectsComponent } from './Tabs/about-me/projects/projects.component';
import { EducationComponent } from './Tabs/about-me/education/education.component';
import { WorkHistoryComponent } from './Tabs/about-me/work-history/work-history.component';
import { VolunteerWorkComponent } from './Tabs/about-me/volunteer-work/volunteer-work.component';
import { ContactComponent } from './Tabs/about-me/contact/contact.component';

@NgModule({
   declarations: [
      AboutMeComponent,
      AppComponent,
      ContactComponent,
      EducationComponent,
      HomeComponent,
      NavbarComponent,
      PagesComponent,
      ProjectsComponent,
      SkillsComponent,
      TabbedPanelComponent,
      VolunteerWorkComponent,
      WorkHistoryComponent
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
