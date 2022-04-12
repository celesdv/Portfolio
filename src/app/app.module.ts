import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AccordionExComponent } from './components/accordion-ex/accordion-ex.component';
import { EducationComponent } from './components/education/education.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { HardSkillsComponent } from './components/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    SocialComponent,
    FooterComponent,
    BannerComponent,
    AboutMeComponent,
    ExperienceComponent,
    AccordionExComponent,
    EducationComponent,
    SkillsComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    ProyectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
