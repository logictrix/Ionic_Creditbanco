import { Component } from '@angular/core';
declare var PluginName: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
   new_activity() {
        PluginName.new_activity();
    }

}
