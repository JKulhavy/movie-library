import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {GridDataResult, PageChangeEvent} from '@progress/kendo-angular-grid';
import {take} from 'rxjs/operators';

import {GetMoviesService} from '../../service/get-films.service';
import {Router} from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html'
})

export class MovieGridComponent {
  public gridView: GridDataResult;
  readonly pageSize = 5;
  skip = 0;

  constructor(
    private getMoviesService: GetMoviesService,
    private change: ChangeDetectorRef,
    private router: Router,
  ) {
    this.loadItems();
  }


  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  goToDetail(url: string) {
    this.router.navigate(['movie']);
  }

  private loadItems(title?: string): void {
    this.getMoviesService
      .getMovies(title)
      .pipe(take(1))
      .subscribe(value => {
          this.gridView = {
            data: value.slice(this.skip, this.skip + this.pageSize),
            total: value.length
          };
          this.change.markForCheck();
        }
      );
  }
}
