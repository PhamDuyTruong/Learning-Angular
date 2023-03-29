import { Component, Input, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import {TabGroupComponent} from '../tab-group/tab-group.component'

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css']
})
export class TabPanelComponent implements OnInit, OnDestroy {
  @Input() title: string | undefined;
  @ViewChild(TemplateRef, {static: true}) panelBody: TemplateRef<unknown> | any;
  constructor(private tabGroup: TabGroupComponent){

  }
  ngOnInit(): void {
    this.tabGroup.addTabPanel(this);
  }

  ngOnDestroy(): void {
    this.tabGroup.removeTabPanel(this);
  }
}
