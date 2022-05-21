import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import { HomeComponent } from './home/home.component';
import {HomeRoutingModule} from "./home-routing.module";
import { AddEditFolderComponent } from './add-edit-folder/add-edit-folder.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import * as fromHome from './store/home.reducer';


@NgModule({
  declarations: [
    HomeComponent,
    AddEditFolderComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        ReactiveFormsModule,
        StoreModule.forFeature(fromHome.featureKey, fromHome.reducer)
    ]
})
export class HomeModule { }
