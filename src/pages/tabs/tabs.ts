import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { ProfilePage } from '../profile/profile';
import { CameraPage } from '../camera/camera';
import { LikePage } from '../like/like';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = CameraPage;
  tab4Root = LikePage;
  tab5Root = ProfilePage;
  constructor() {

  }
}
