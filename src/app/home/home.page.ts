import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewItemPage } from '../add-new-item/add-new-item.page';
import { UpdateItemPage } from '../update-item/update-item.page';
import { DataService, Task } from '../service/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  today: number = Date.now();
  sub: Subscription;
  tasks: any;

  constructor(public modalCtrl: ModalController, private dataService: DataService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

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

  async getTasks() {
    this.sub = await this.dataService.getTask().subscribe((res) => {
      this.tasks = res;
      console.log(res);
    })
  }

}
