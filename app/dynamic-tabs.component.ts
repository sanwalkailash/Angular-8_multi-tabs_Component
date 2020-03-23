import { Component, ChangeDetectorRef } from "@angular/core";
import { FormControl } from "@angular/forms";

declare interface DynamicTabsComponentProperties {
  tabs: string[];
  selectedIndex: number;
  loading: boolean;
}
/**
 * @title Tab group with dynamically changing tabs
 */
@Component({
  selector: "dynamic-tabs",
  templateUrl: "dynamic-tabs.component.html",
  styleUrls: ["dynamic-tabs.component.css"]
})
export class DynamicTabsComponent {
  public tabs = ["Search"];
  public selectedIndex: number = 0;
  public componentJson: DynamicTabsComponentProperties = {
    tabs: ["Search"],
    selectedIndex: 0,
    loading: false
  };

  constructor(private change: ChangeDetectorRef) {}

  addTab() {
    this.componentJson.loading = true;
    let tabTitle = "venueID-" + this.tabs.length;
    this.tabs.push(tabTitle);
    this.selectedIndex = this.tabs.length - 1;
    console.info("active tad id", this.selectedIndex);
    this.change.detectChanges();
    setTimeout(() => {
      this.componentJson.loading = false;
    }, 1000);
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
