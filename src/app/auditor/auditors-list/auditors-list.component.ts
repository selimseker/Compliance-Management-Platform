import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Auditor } from "../../data-models/auditor.model";
import { Subscription } from 'rxjs';
import { AuditorService } from '../../services/auditor.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AuditorInfoDialogComponent } from '../auditor-info-dialog/auditor-info-dialog.component';


@Component({
  selector: 'app-auditors-list',
  templateUrl: './auditors-list.component.html',
  styleUrls: ['./auditors-list.component.css']
})
export class AuditorsListComponent implements OnInit, OnDestroy, AfterViewInit {

  public auditors: Auditor[] = [];
  private adtSubscription: Subscription;
  public dataSource: MatTableDataSource<Auditor>;
  public displayedColumns: string[] = ["first_name", "email", "standards", "active_projects"];
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private adtService: AuditorService, public dialog: MatDialog) { }


  openDialog(row: any) {
    console.log(row);

    const dialogRef = this.dialog.open(AuditorInfoDialogComponent,
      {
        width: "1225px",
        data: row as Auditor
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog closed");
      console.log(result);
    })

  }

  ngOnInit() {

    // get the auditors from the service
    this.adtService.getAuditors();
    this.adtSubscription = this.adtService.getAuditorObservable()
      .subscribe((auditors: Auditor[]) => {
        this.auditors = auditors;
        this.dataSource = new MatTableDataSource<Auditor>(this.auditors);
        this.dataSource.paginator = this.paginator;
      });
  }

  ngAfterViewInit() {
  }

  // kill the subscripton when the component destroyed
  ngOnDestroy() {
    this.adtSubscription.unsubscribe();
    console.log(this.auditors);
  }


}
