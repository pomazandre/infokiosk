import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { ListboxModule } from 'primeng/listbox';
import { CardModule } from 'primeng/card';

import { IndexComponent } from './core/index/index.component';
import { PersonsComponent } from './core/persons/persons.component';
import { PersonsService } from './model/persons.service';

const ROUTES: Routes = [
  { path: '', component: IndexComponent },
  { path: 'persons/:id', component: PersonsComponent },
];

@NgModule({
  declarations: [
    AppComponent, PersonsComponent, IndexComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(ROUTES), MenubarModule, MenuModule, ButtonModule, DataViewModule, DialogModule,
    TableModule, InputTextModule, BrowserAnimationsModule, FormsModule, HttpClientModule, DropdownModule, ListboxModule,
    CardModule
  ],
  providers: [PersonsService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
