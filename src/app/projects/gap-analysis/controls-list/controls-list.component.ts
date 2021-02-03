import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Control } from 'src/app/data-models/standard.model';


@Component({
  selector: 'app-controls-list',
  templateUrl: './controls-list.component.html',
  styleUrls: ['./controls-list.component.css']
})
export class ControlsListComponent implements OnInit {

  @Input() controls: Control[];
  @Input() controlsNumberOfDone: Map<string, number>;
  @Output() itemClickEvent = new EventEmitter<number>();

  public pageSize = 15;
  public pageSizeOptions = [5, 10, 15];
  public lowValue = 0;
  public highValue = this.pageSize;
  public pageIndex = 0;
  public controlsLoading = false;


  constructor() { }


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


  onControlClick(controlIndex: number) {
    this.itemClickEvent.emit(controlIndex);

  }


  ngOnInit(): void {
  }

}