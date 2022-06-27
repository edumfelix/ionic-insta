import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [];

  constructor(public navCtrl: NavController) {

    this.items = this.simulaDados();
  }

  simulaDados(){

    let _items = [];

    for (let index = 0; index < 10; index++) {
      let element = {
        index: (1 + index),
        user: 'User ' + (index + 1),
        text: 'New Photo ' + (index + 1),
        foto_post: 'https://picsum.photos/1080/1080?random' + index,
        foto_user: 'https://picsum.photos/80/80?random' + index,
        qtd_likes: index + 2,
        qtd_comments: index + 20,
      };
      _items.push(element);

  }
    return _items;
  }

}
