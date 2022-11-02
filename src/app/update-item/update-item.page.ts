import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService, Task } from '../service/data.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.page.html',
  styleUrls: ['./update-item.page.scss'],
})
export class UpdateItemPage implements OnInit {
  @Input() task: Task;
  categories = ['Work', 'Task', 'Personal'];

  constructor(
    public modalCtrl: ModalController,
    private dataService: DataService
  ) {}

  ngOnInit() {
    console.log(this.task);
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  selectCategory(index) {
    this.task.category = this.categories[index];
  }

  async updateTask() {
    await this.dataService.updateTask(this.task);
    this.dismiss();
  }
}
