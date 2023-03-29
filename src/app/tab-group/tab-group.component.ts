import { TabPanelComponent } from './../tab-panel/tab-panel.component';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css']
})
export class TabGroupComponent implements OnInit {
   tabPanelList: TabPanelComponent[] = [];
   @Input() tabActiveIndex = 0;
   @Output() tabAvtiveChange = new EventEmitter<number>();
    constructor() {

    }
    ngOnInit(): void {

    }

    selectItem(idx: number){
      this.tabActiveIndex = idx;
      this.tabAvtiveChange.emit(idx);
    }
    addTabPanel(tab: TabPanelComponent){
      this.tabPanelList.push(tab);
    };

    removeTabPanel(tab:TabPanelComponent){
      let index = -1;
      const tabPanelList: TabPanelComponent[] = [];
      this.tabPanelList.forEach((item, idx) => {
        if(tab === item){
          index = idx;
          return;
        }
        tabPanelList.push(item);
      });
      this.tabPanelList = tabPanelList;
      if(index !== -1){
        this.selectItem(0);
      }

    }

}
