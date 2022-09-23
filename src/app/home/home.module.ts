import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LottieModule } from 'ngx-lottie';
import { ConnectSectionComponent } from './components/connect-section/connect-section.component';
import { OurStorySectionComponent } from './components/our-story-section/our-story-section.component';
import { OffersSectionComponent } from './components/offers-section/offers-section.component';
import { InspirationSectionComponent } from './components/inspiration-section/inspiration-section.component';
import { HelloSectionComponent } from './components/hello-section/hello-section.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { CountDownTimerComponent } from './components/coming-soon/count-down-timer/count-down-timer.component';
import { ComingSoonerComponent } from './components/coming-sooner/coming-sooner.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    ComingSoonComponent,
    ComingSoonerComponent,
    CountDownTimerComponent,
    ConnectSectionComponent,
    OurStorySectionComponent,
    OffersSectionComponent,
    InspirationSectionComponent,
    HelloSectionComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    LottieModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class HomeModule {}
