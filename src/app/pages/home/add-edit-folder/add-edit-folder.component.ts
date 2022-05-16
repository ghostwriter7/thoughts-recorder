import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-edit-folder',
  templateUrl: './add-edit-folder.component.html',
  styleUrls: ['./add-edit-folder.component.scss']
})
export class AddEditFolderComponent implements OnInit {
  public mode: 'Add' | 'Edit' = 'Add';
  private id?: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.mode = 'Edit';
      this.id = id;
    }
  }

}
