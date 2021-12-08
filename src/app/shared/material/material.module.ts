import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

const materialModules = [MatIconModule, MatTableModule];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [...materialModules],
})
export class MaterialModule {}
