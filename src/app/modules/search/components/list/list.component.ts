import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Repo } from 'src/app/models/Repo/repo.model';
import { Org } from 'src/app/models/Org/org.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  repos: Repo[] = [];
  filteredRepos: Repo[] = [];
  org: Org;
  error: any;
  page: any = {
    per_page: 20,
    page: 1,
    total: 0
  }
  defaultView: string = 'card';
  constructor(private searchService: SearchService) { }

  ngOnInit() {

    const me = this;
    this.searchService.getOrgInfo().subscribe(
      res => {
        this.org = res;
        this.page['total'] = this.org.repos_count;
        me.getRepos((data: any) => {
          me.repos = data;
          me.filteredRepos = data;
        })
      },
      err => {
        this.error = err.message;
      }
    );


  }

  handlePageChange(page: any) {
    console.log(page);
  }

  getRepos(callback: any) {
    this.searchService.getListOfAllRepos(this.page).subscribe(
      res => {
        callback(res);
      },
      err => {
        this.error = err.message;
      }
    );
  }

  changeView(event: any) {
    if (event && event.target.value)
      this.defaultView = event.target.value;
  }

  handleSearch(event: any) {
    if (event.value == '') {
      this.filteredRepos = this.repos; //Using already cached repos list instead of fetching it again
    }
    else
      this.searchService.doSearch(this.repos, event.value).then((res) => {
        this.filteredRepos = res;
      }).catch((error) => { });
  }

}
