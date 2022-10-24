import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewItemPage } from '../add-new-item/add-new-item.page';
import { UpdateItemPage } from '../update-item/update-item.page';
import { DataService } from '../service/data.service';
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

  constructor(
    public modalCtrl: ModalController,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getData();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  async goToAddPage() {
    const modal = await this.modalCtrl.create({
      component: AddNewItemPage,
    });
    return await modal.present();
  }

  async goToUpdatePage(task) {
    const modal = await this.modalCtrl.create({
      component: UpdateItemPage,
      componentProps: { task },
    });
    return await modal.present();
  }

  async getData() {
    this.sub = await this.dataService.getTasks().subscribe((res) => {
      this.tasks = res;
      console.log(this.tasks);
    });
  }

  async deleteTask(task) {
    await this.dataService.deleteTask(task);
  }
}
