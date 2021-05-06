import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  control = new FormControl('');
  values: string[] = [];

  constructor() {
    this.control.valueChanges
      .pipe(
        // map(v => ({ value: v })),
        // debounceTime(1000),
        // distinctUntilChanged((prev, curr) => prev.value === curr.value)
        // distinctUntilChanged()
      )
      .subscribe(
        // v => this.values = [...this.values, v.value]
        v => this.values = [...this.values, v]
      );
  }


}
