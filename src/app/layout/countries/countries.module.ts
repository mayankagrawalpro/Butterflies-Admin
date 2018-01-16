import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import {NgxPaginationModule} from 'ngx-pagination'
import {MatPaginatorModule,MatDialogModule} from '@angular/material';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {AdminService} from '../../shared/services/admin/admin.service'
import { PageHeaderModule } from './../../shared';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent,CountryConfirmation } from './countries.component';

@NgModule({
  imports: [
    CommonModule,
    CountriesRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule,
	FormsModule,
	MatSortModule,
	NgxPaginationModule,
	MatPaginatorModule,
	MatDialogModule,
	ToastModule.forRoot(),
  ],
  declarations: [CountriesComponent,CountryConfirmation],
  providers:[AdminService],
  entryComponents:[CountryConfirmation]
})
export class CountriesModule { }
