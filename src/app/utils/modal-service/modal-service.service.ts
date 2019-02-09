import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalErrorPage } from "../modal-service/modal-error/modal-error.page";

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  constructor(
    private modalController : ModalController
  ) { }

  async errorModal(params:any) {
    const modal = await this.modalController.create({
      component: ModalErrorPage,
      componentProps: params
    });
    return await modal.present();
  }
}
