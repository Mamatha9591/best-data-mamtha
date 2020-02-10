import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule,
  MatIconModule,
  MatCheckboxModule,
  MatDividerModule,
  MatTableModule
  } from '@angular/material';

  const Material = [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatIconModule,
    MatCheckboxModule,
    MatDividerModule,
    MatTableModule
  
  ]



@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
