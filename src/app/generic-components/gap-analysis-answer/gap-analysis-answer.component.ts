import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-gap-analysis-answer',
  templateUrl: './gap-analysis-answer.component.html',
  styleUrls: ['./gap-analysis-answer.component.css']
})
export class GapAnalysisAnswerComponent implements OnInit {

  @Input() public default_answers: { main: string, detail: string };
  @Input() public disable = false;
  @Output() answers = new EventEmitter<{ main: string, detail: string }>();

  public answer_types = ["FI", "PI", "NI", "NA"];

  public details: string;
  public radio_answer: string;

  public Editor = ClassicEditor;
  public editor_config = {
    removePlugins: ['heading', 'link'],
    image: {
      upload: { types: ['png', 'jpeg'] }
    }
  };


  constructor() { }

  onRadioChange(event) {
    this.radio_answer = event.value;
    this.answers.emit({ main: this.radio_answer, detail: this.details });
  }

  onTextChange({ editor }: ChangeEvent) {
    this.details = editor.getData();
    this.answers.emit({ main: this.radio_answer, detail: this.details });
  }



  ngOnInit(): void {
    this.radio_answer = this.default_answers.main;
    this.details = this.default_answers.detail;

  }

}
