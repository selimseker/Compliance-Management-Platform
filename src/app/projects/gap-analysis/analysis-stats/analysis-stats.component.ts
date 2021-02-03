import { Component, OnInit, Input } from '@angular/core';
import { ProjectsService } from '../../../services/projects.service';
import { Entry } from '../../../data-models/project.model';
import { Control } from 'src/app/data-models/standard.model';

export var single = [
  {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  },
  {
    "name": "UK",
    "value": 6200000
  },
  {
    "name": "Italy",
    "value": 4200000
  },
  {
    "name": "Spain",
    "value": 8200000
  }
];

@Component({
  selector: 'app-analysis-stats',
  templateUrl: './analysis-stats.component.html',
  styleUrls: ['./analysis-stats.component.css']
})
export class AnalysisStatsComponent implements OnInit {
  single: any[];

  // top pie options
  showLegendTop: boolean = false;
  showLabelsTop: boolean = true;
  isDoughnutTop: boolean = false;
  colorSchemeTop = {
    domain: ["#00308F", "#1974D2", "#8EDFFF", "#B2FFFF"]
  };
  viewTop: any[] = [600, 450];
  public topPieLoading: boolean = true;




  // bottom pies options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = false;
  isDoughnut: boolean = true;
  legendPosition: string = "below";
  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  };
  view: any[] = [300, 200];



  @Input() domains: Control[];
  @Input() domains_number_dones: Map<string, number>;
  @Input() projectID: string;
  public bottom_piesData: Map<string, any[]>;
  public top_pieData: any[];

  public selectedDomain: Control;
  public entriesOfDomain: Entry[];



  constructor(private projectService: ProjectsService) {
    Object.assign(this, { single });
  }

  onSelect(domain: Control): void {
    this.selectedDomain = domain;
    this.getEntriesOfDomain(this.selectedDomain.cid)
  }


  parseData() {
    // this.bottom_piesData = new Map<string, any[]>();
    // this.top_pieData = [];
    // // bottom pie parsing
    // this.domains.forEach(domain => {
    //   let firstLetters_list = domain.info.title.match(/\b(\w)/g);
    //   let firstLetters = firstLetters_list.join('');

    //   let submitted = this.domains_number_dones.get(domain.cid);
    //   let notsubmitted = domain.leaf_childs.length - submitted;
    //   let sample = [
    //     {
    //       "name": "Submitted",
    //       "value": submitted
    //     },
    //     {
    //       "name": "Not-submitted",
    //       "value": notsubmitted
    //     },
    //   ]
    //   this.bottom_piesData.set(domain.cid, sample);
    //   Object.assign(this, { sample });
    // });
  }

  parseEntries() {
    // top pie parsing
    //   let data = [];
    //   let answers = this.entriesOfDomain.map(entry => entry.answers.main);
    //   var counts = new Map<string, number>();
    //   for (var i = 0; i < answers.length; i++) {
    //     var ans = answers[i];
    //     counts.set(ans, counts[ans] ? counts[ans] + 1 : 1);
    //   }
    //   counts.forEach((value: number, key: string) => {
    //     data.push({
    //       "name": key,
    //       "value": value
    //     })
    //   });
    //   data.push({
    //     "name": "Non-submitted",
    //     "value": this.selectedDomain.leaf_childs.length - this.entriesOfDomain.length
    //   })
    //   this.top_pieData = data;
    //   Object.assign(this, { data });
  }

  getEntriesOfDomain(domainID: string) {
    // this.topPieLoading = true;
    // this.projectService.entriesOfRoot(this.projectID, domainID, "documents").subscribe(response => {
    //   this.entriesOfDomain = response.entries;
    //   this.parseEntries();
    //   this.topPieLoading = false;
    // })

  }


  ngOnInit(): void {
    this.selectedDomain = this.domains[0];
    this.getEntriesOfDomain(this.selectedDomain.cid);
    this.parseData();

  }

}
