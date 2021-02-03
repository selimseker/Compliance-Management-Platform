import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Auditor } from '../../data-models/auditor.model';

@Component({
  selector: 'app-auditor-info-dialog',
  templateUrl: './auditor-info-dialog.component.html',
  styleUrls: ['./auditor-info-dialog.component.css']
})
export class AuditorInfoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AuditorInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Auditor) { }

  ngOnInit(): void {
    console.log("in dialog", this.data);

  }

}
