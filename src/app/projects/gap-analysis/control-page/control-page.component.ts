import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Control, Checklist } from 'src/app/data-models/standard.model';
import { MatDialog } from '@angular/material/dialog';
import { ControlQuestionDialogComponent } from '../control-question-dialog/control-question-dialog.component';
import { Entry } from '../../../data-models/project.model';
import { ProjectsService } from '../../../services/projects.service';
import { ControlInfoDialogComponent } from '../control-info-dialog/control-info-dialog.component';

@Component({
  selector: 'app-control-page',
  templateUrl: './control-page.component.html',
  styleUrls: ['./control-page.component.css']
})
export class ControlPageComponent implements OnInit {


  @Input() control: Control;
  @Input() controlsNumberOfDone: Map<string, number>;
  @Input() projectID: string;
  @Output() entryDone = new EventEmitter<Entry>();

  public control_entry: Entry;
  public already_submitted: boolean;
  public isChecklistAnswered: Map<string, string>;

  public answer_colors: Map<string, string>;

  public pageSize = 5;
  public pageSizeOptions = [5];
  public lowValue = 0;
  public highValue = this.pageSize;
  public pageIndex = 0;

  public default_answer = { main: "", detail: "Details" };
  public control_answer: { main: string, detail: string };
  public form_disabled = false;



  constructor(public dialog: MatDialog, private projectSrvc: ProjectsService) { }

  onChecklistClick(index) {
    this.openChecklistDialog(this.control.checklists[index])

  }

  openChecklistDialog(checklist: Checklist) {

    const dialogRef = this.dialog.open(ControlQuestionDialogComponent,
      {
        width: "1225px",
        data: {
          control: this.control,
          checklist: checklist,
          control_entry: this.control_entry
        }
      });


    dialogRef.componentInstance.doneEvent.subscribe(entry => {
      this.control_entry = entry;
      this.entryDone.emit(entry);
    })

    dialogRef.afterClosed().subscribe((entry: Entry) => {
    })

  }

  openInfoDialog() {

    const dialogRef = this.dialog.open(ControlInfoDialogComponent,
      {
        maxHeight: "600px",
        width: "1225px",
        data: {
          control: this.control,
        }
      });

    dialogRef.afterClosed().subscribe(() => {
    })

  }

  fill_isChecklistAnswered() {
    this.control.checklists.forEach(chk => {
      this.isChecklistAnswered.set(chk.checklist_id, "");
    });

    this.control_entry.checklist_answers.forEach(answer => {
      this.isChecklistAnswered.set(answer.checklist_id, answer.answer);
    });

  }

  getPaginatorData(event) {
    if (event.pageSize != this.pageSize) {
      this.lowValue = 0;
      this.highValue = event.pageSize;
      this.pageIndex = 0;
      this.pageSize = event.pageSize;
      return;
    }


    if (event.pageIndex === this.pageIndex + 1) {
      this.lowValue = this.lowValue + this.pageSize;
      this.highValue = this.highValue + this.pageSize;
    }
    else if (event.pageIndex === this.pageIndex - 1) {
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue = this.highValue - this.pageSize;
    }
    this.pageIndex = event.pageIndex;
  }

  onFormChange(event: { main: string, detail: string }) {
    this.control_answer = event;
  }

  onControlAnswerDone() {
    this.control_entry.control_decision = { decision: this.control_answer.main, details: this.control_answer.detail };
    this.entryDone.emit(this.control_entry);
    this.form_disabled = true;
  }



  ngOnInit(): void {
    this.isChecklistAnswered = new Map<string, string>();
    this.projectSrvc.getEntryOfControl(this.projectID, this.control.cid)
    this.projectSrvc.entrySubject.subscribe(entry => {

      if (entry == null) {
        this.already_submitted = false;
        this.control_entry = {
          project_id: this.projectID,
          control_id: this.control.cid,
          checklist_answers: [],
          timestamp: null
        }
      }
      else {

        this.control_entry = entry;

        if (this.control_entry.control_decision != null) {

          this.form_disabled = true;
          this.default_answer.main = this.control_entry.control_decision.decision;
          this.default_answer.detail = this.control_entry.control_decision.details

        }
      }
      this.fill_isChecklistAnswered();
    })

    this.projectSrvc.entryID_fromDB.subscribe(entry_id => {
      this.control_entry._id = entry_id;
      this.fill_isChecklistAnswered();
    })
    this.answer_colors = new Map<string, string>();
    this.answer_colors.set("FI", "#4c913a");
    this.answer_colors.set("PI", "#cfbd00");
    this.answer_colors.set("NI", "#b50000");
    this.answer_colors.set("NA", "#a6a1a1");


  }

}
