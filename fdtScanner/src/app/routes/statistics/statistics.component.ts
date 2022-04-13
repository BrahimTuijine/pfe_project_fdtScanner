import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.less'],
})
export class StatisticsComponent implements OnInit {
  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe((data) => console.log(data['id']));
  }

  ngOnInit(): void {}
}
