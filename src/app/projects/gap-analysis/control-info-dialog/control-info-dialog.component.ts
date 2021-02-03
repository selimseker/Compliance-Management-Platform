
import { Component, OnInit, Inject, Optional, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Control, Guideline, Threat, RiskDriver } from 'src/app/data-models/standard.model';
import { StandardsService } from 'src/app/services/standards.service';

@Component({
  selector: 'app-control-info-dialog',
  templateUrl: './control-info-dialog.component.html',
  styleUrls: ['./control-info-dialog.component.css']
})
export class ControlInfoDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ControlInfoDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { control: Control },

    private stdService: StandardsService) { }
  public guidelines: Guideline[];
  public threats: Threat[];
  public riskDrivers: RiskDriver[];
  public infoType = "Guidelines"

  onClick(info_type: string) {
    this.infoType = info_type
    if (this.infoType == "Guidelines") {
      this.getGuideline();
    } else if (this.infoType == "Threats") {
      this.getThreat();
    } else if (this.infoType == "Risk Drivers") {
      this.getRiskDriver();
    }
  }

  getGuideline() {
    if (this.guidelines == undefined) {
      this.stdService.getGuidelines(this.data.control.cid, this.data.control.standard_id).subscribe(response => {
        this.guidelines = response.guidelines;
      });

    }
  }

  getThreat() {
    if (this.threats == undefined) {
      this.stdService.getThreats(this.data.control.cid, this.data.control.standard_id).subscribe(response => {
        this.threats = response.threats;
      });
    }
  }

  getRiskDriver() {
    if (this.riskDrivers == undefined) {
      this.stdService.getRisks(this.data.control.cid, this.data.control.standard_id).subscribe(response => {
        this.riskDrivers = response.risks;
      });
    }
  }

  ngOnInit(): void {
    this.getGuideline();
  }

}
