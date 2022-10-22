import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.page.html',
  styleUrls: ['./update-item.page.scss'],
})
export class UpdateItemPage implements OnInit {

  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}
