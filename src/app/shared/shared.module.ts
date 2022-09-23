import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarSectionComponent } from './navbar-section/navbar-section.component';
import { FooterComponent } from './footer/footer.component';

import { SharedRoutingModule } from './shared-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [NavbarSectionComponent, FooterComponent, GalleryComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
  ],
  exports: [NavbarSectionComponent, FooterComponent, GalleryComponent],
})
export class SharedModule {}
