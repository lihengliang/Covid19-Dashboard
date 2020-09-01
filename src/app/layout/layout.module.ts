import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatIconModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    // MatToolbarModule,
    // MatButtonModule,
    // MatIconModule
  ]
})
export class LayoutModule { }
