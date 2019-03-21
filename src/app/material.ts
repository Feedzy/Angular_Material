import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [
             MatButtonModule, MatCheckboxModule, MatProgressBarModule, MatCardModule,
             MatToolbarModule, MatIconModule, MatSlideToggleModule, MatMenuModule
           ],
  exports: [
             MatButtonModule, MatCheckboxModule, MatProgressBarModule, MatCardModule,
             MatToolbarModule, MatIconModule, MatSlideToggleModule, MatMenuModule
           ],
})
export class MaterialModule { }
