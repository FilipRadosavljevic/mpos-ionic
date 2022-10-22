import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewItemPage } from '../add-new-item/add-new-item.page';
import { UpdateItemPage } from '../update-item/update-item.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  today: number = Date.now();

  constructor(public modalCtrl: ModalController) {}

  async goToAddPage() {
    const modal = await this.modalCtrl.create({
      component: AddNewItemPage
    });
    return await modal.present();
  }

  async goToUpdatePage() {
    const modal = await this.modalCtrl.create({
      component: UpdateItemPage
    });
    return await modal.present();
  }

}
