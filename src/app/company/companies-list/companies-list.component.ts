import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Company } from "../../data-models/company.model";
import { Subscription } from 'rxjs';
import { CompanyService, } from '../../services/company.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-companies',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit, OnDestroy, AfterViewInit {
  public companies: Company[] = [];
  public compSubscription: Subscription;
  public dataSource: MatTableDataSource<Company>;
  public displayedColumns: string[] = ['name', 'industry', 'email', "projects"];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private compService: CompanyService) { }

  ngOnInit(): void {
    this.compService.getCompanies();
    this.compSubscription = this.compService.getCompaniesObservable()
      .subscribe((comps: Company[]) => {
        this.companies = comps;
        this.dataSource = new MatTableDataSource<Company>(this.companies);
        console.log("companies list -->", this.companies);
        this.dataSource.paginator = this.paginator;

      });

  }

  ngAfterViewInit() {
  }




  ngOnDestroy() {
    this.compSubscription.unsubscribe();
  }


}
