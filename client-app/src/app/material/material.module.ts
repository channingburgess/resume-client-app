import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card"

const modules = [
  CommonModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatTabsModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MaterialModule {}
