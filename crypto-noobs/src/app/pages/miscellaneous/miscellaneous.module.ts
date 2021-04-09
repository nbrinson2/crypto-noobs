import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '../forms/forms.module';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    FormsModule,
    MiscellaneousRoutingModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule, NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
  ],
  declarations: [
    MiscellaneousComponent,
    NotFoundComponent,
    ContactUsComponent,
  ],
})
export class MiscellaneousModule { }
