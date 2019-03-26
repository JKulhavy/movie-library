import {ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

import {tileSearchFields, tileSearchFormDefinition} from '../../description/title-search.description';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-title-search',
  templateUrl: './title-search.component.html'
})

export class TitleSearchComponent implements OnDestroy {
  @Output() searchedChanged = new EventEmitter<string>();
  readonly fields = tileSearchFields;
  form = this.formBuilder.group(tileSearchFormDefinition);
  private readonly subscription: Subscription;

  constructor(private formBuilder: FormBuilder) {
    this.subscription = this.form.get(this.fields.search)
      .valueChanges
      .pipe(debounceTime(100))
      .subscribe(value => this.searchedChanged.emit(value));
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
