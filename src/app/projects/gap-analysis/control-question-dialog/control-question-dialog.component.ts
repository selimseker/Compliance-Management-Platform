import { Component, OnInit, Inject, Optional, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Entry } from '../../../data-models/project.model';
import { ProjectsService } from '../../../services/projects.service';
import { Control, Checklist } from 'src/app/data-models/standard.model';

@Component({
  selector: 'app-control-question-dialog',
  templateUrl: './control-question-dialog.component.html',
  styleUrls: ['./control-question-dialog.component.css']
})
export class ControlQuestionDialogComponent implements OnInit {
  public doneEvent = new EventEmitter<Entry>();
  public isEntrySubmited: boolean = false;
  public disableDoneButton: boolean = false;

  public already_submitted = false;
  public prev_answers: any;

  public default_answer = { main: "", detail: "" };
  public form_disabled = false;

  public main_answer: string;
  public details: string;


  constructor(
    public dialogRef: MatDialogRef<ControlQuestionDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { control: Control, checklist: Checklist, control_entry: Entry },
    private prjService: ProjectsService) { }

  ngOnInit(): void {


    this.prev_answers = this.data.control_entry.checklist_answers.filter((chk) => chk.checklist_id == this.data.checklist.checklist_id);

    if (this.prev_answers.length == 1) {

      // checklist already answered so load the prev answers as default
      this.already_submitted = true;
      this.form_disabled = true;
      this.default_answer = { main: this.prev_answers[0].answer, detail: this.prev_answers[0].details };
    }


    this.prjService.entryID_fromDB.subscribe(entryID => {
      this.isEntrySubmited = true;
    })
  }

  onEdit() {

  }

  onFormChange(event: { main: string, detail: string }) {
    this.main_answer = event.main;
    this.details = event.detail;
  }

  onDone() {
    this.disableDoneButton = true;
    this.form_disabled = true;
    const dt = new Date();


    // just push the new answer to chk_answers list
    const newAnswer = {
      checklist_id: this.data.checklist.checklist_id,
      answer: this.main_answer,
      details: this.details
    }

    this.data.control_entry.checklist_answers.push(newAnswer);

    this.doneEvent.emit(this.data.control_entry);
    // this.dialogRef.close(newEntry);
  }

}
