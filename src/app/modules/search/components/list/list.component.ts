import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
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
    per_page: 30,
    page: 1,
    total: 0
  }
  scrollCount = 1;
  infiniteScrollDisabled = false;
  loading = false;
  scrollTop = false;
  defaultView: string = 'card';
  isSkeltonLoading: boolean = true;
  searchString: string = '';
  showFiltersPanel: boolean = false;
  isSticky: boolean;
  constructor(private searchService: SearchService) { }

  /**
   * Getting organization information and list of all repos
   */
  ngOnInit() {

    const me = this;
    this.isSkeltonLoading = true;
    this.searchService.getOrgInfo().subscribe(
      res => {
        this.org = res;
        this.page['total'] = this.org.repos_count;
        me.getRepos(this.page, (data: any) => {
          me.repos = data;
          me.filteredRepos = data;
        })
      },
      err => {
        this.error = err.message;
      }
    );

    if(window.innerWidth<=650){
      this.defaultView = 'card';
    }

    /**
     * Listening to page scroll to make sidebar options
     * sticky and visible all the time for width > 768px
     */
    window.addEventListener('scroll', function(){
      me.isSticky = window.scrollY > 160 && window.innerWidth > 768
    }, true);
  }

  /**
   * This will always set default data view to CARD view
   * instead if LIST view if device width is less or equal to 650px
   * for better experience and readibility on smaller devices
   * @param event 
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(event.target.innerWidth <= 650)
    this.defaultView = 'card'
  }


  /**
   * Function is used to get list of all resos.
   * Takes pagination config 'page' as argument and
   * callback function to call once data is retrieved.
   * @param page : Object
   * @param callback : Function
   */
  getRepos(page: any, callback: any) {
    this.isSkeltonLoading = true;
    this.searchService.getListOfAllRepos(page).subscribe(
      res => {
        this.isSkeltonLoading = false;
        callback(res);
      },
      err => {
        this.error = err.message;
      }
    );
  }

  /**
   * Function to toggle view type of data between card/list
   */
  changeView(event: any) {
    if (event && event.target.value)
      this.defaultView = event.target.value;
  }

  /**
   * Function is called when searching for a repo
   * @param event : Object
   */
  handleSearch(event: any) {
    this.isSkeltonLoading = true;
    this.searchString = event.value;
    if (event.value == '') {
      this.filteredRepos = this.repos; //Using already cached repos list instead of fetching it again
      this.isSkeltonLoading = false;
    }
    else
      this.searchService.doSearch(this.repos, event.value).then((res) => {
        this.filteredRepos = res;
        this.isSkeltonLoading = false;
      }).catch((error) => { });
  }

  /**
   * Function is called when sorting order is
   * selected from left panel of listing page.
   * @param event : Object
   */
  applySortBy(event: any) {
    this.isSkeltonLoading = true;
    if (event.value == '') {
      this.filteredRepos = this.repos; //Using already cached repos list instead of fetching it again
      this.isSkeltonLoading = false;
    }
    else {
      this.searchService.sortRepos(this.repos, event).then((res) => {
        this.repos = res;
        this.filteredRepos = res;
        this.isSkeltonLoading = false;
      }).catch((error) => { });
    }

    //If search string exists apply search over sorted list
    if (this.searchString !== '')
      this.handleSearch({ value: this.searchString });
  }

  /**
 * Infinite scroll loading cards based on NGX Infinite scroll
 * Function must be called on parent container with root true
 * On scroll search called, scrollcount is increased by 1
 *
 * If results have hit last page disable scroll
 */
  onScrollDown() {
    const me = this;
    this.scrollCount++;
    this.loading = true;
    // this.isSkeltonLoading = true;
    this.infiniteScrollDisabled = false;
    if (this.repos && this.repos.length !== this.page.total) {
      this.page['page'] = this.scrollCount;
      this.getRepos(this.page, function (data: any) {
        me.repos = [...me.repos, ...data];
        me.filteredRepos = [...me.filteredRepos, ...data];
      });
    } else {
      this.loading = false;
      this.infiniteScrollDisabled = true;
      this.scrollTop = true;
    }
  }

  /**
   * Show/Hide filters panel and
   * @param event 
   */
  toggleFiltersPanel(event) {
    this.showFiltersPanel = !this.showFiltersPanel;
  }
}
