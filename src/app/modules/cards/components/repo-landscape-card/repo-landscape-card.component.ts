import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repo-landscape-card',
  templateUrl: './repo-landscape-card.component.html',
  styleUrls: ['./repo-landscape-card.component.scss']
})
export class RepoLandscapeCardComponent implements OnInit {

  @Input() data;
  constructor() { }

  ngOnInit() {
  }

}
