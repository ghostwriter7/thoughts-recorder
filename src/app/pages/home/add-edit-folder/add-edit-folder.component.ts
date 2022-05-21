import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import * as fromRoot from '../../../core/store/app.reducer';
import * as HomeActions from '../store/home.actions';

@Component({
  selector: 'app-add-edit-folder',
  templateUrl: './add-edit-folder.component.html',
  styleUrls: ['./add-edit-folder.component.scss']
})
export class AddEditFolderComponent implements OnInit {
  public mode: 'Add' | 'Edit' = 'Add';
  public form!: FormGroup;

  private id?: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private store: Store<fromRoot.AppState>) { }

  ngOnInit(): void {
    this.readRouteParams();
    this.buildForm();
  }

  clear(): void {
    this.form.reset();
  }

  save(): void {
    const { title, description } = this.form.value;
    this.store.dispatch(HomeActions.saveFolder({ folder: { title, description } }));
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  private readRouteParams(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.mode = 'Edit';
      this.id = id;
    }
  }

}
