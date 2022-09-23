import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarSectionComponent } from './navbar-section/navbar-section.component';
import { FooterComponent } from './footer/footer.component';

import { SharedRoutingModule } from './shared-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { GalleryComponent } from './gallery/gallery.component';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';

@NgModule({
  declarations: [
    NavbarSectionComponent,
    FooterComponent,
    GalleryComponent,
    WelcomeSectionComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
  ],
  exports: [
    NavbarSectionComponent,
    FooterComponent,
    GalleryComponent,
    WelcomeSectionComponent,
  ],
})
export class SharedModule {}
