import { Component,ChangeDetectorRef } from "@angular/core";
import { FormControl } from "@angular/forms";


/**
 * @title Tab group with dynamically changing tabs
 */
@Component({
  selector: "dynamic-tabs",
  templateUrl: "dynamic-tabs.component.html",
  styleUrls: ["dynamic-tabs.component.css"]
})
export class DynamicTabsComponent {
  public tabs = ["Search", "venue details 1", "venue details 2"];
  public selectedIndex: number = 0;

  constructor(private change: ChangeDetectorRef){

  }

  addTab() {
    let tabTitle = "venue details" + this.tabs.length;
    this.tabs.push(tabTitle);
    this.selectedIndex = this.tabs.length - 1;
    console.info("active tad id", this.selectedIndex);
    this.change.detectChanges();
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
