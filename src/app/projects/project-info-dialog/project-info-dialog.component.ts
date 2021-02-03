import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from '../../data-models/project.model';

@Component({
  selector: 'app-project-info-dialog',
  templateUrl: './project-info-dialog.component.html',
  styleUrls: ['./project-info-dialog.component.css']
})
export class ProjectInfoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProjectInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project) { }

  closeDialog() {
    this.dialogRef.close();
  }



  ngOnInit(): void {
  }

}
