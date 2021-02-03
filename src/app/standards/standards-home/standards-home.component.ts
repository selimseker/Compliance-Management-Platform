import { Component, OnInit } from '@angular/core';
import { StandardsService } from '../../services/standards.service';


@Component({
  selector: 'app-standards-home',
  templateUrl: './standards-home.component.html',
  styleUrls: ['./standards-home.component.css']
})
export class StandardsHomeComponent implements OnInit {

  constructor(private standardService: StandardsService) { }








  ngOnInit(): void {
  }

}
