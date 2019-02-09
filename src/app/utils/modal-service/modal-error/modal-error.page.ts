import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from "@ionic/angular";

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.page.html',
  styleUrls: ['./modal-error.page.scss'],
})
export class ModalErrorPage implements OnInit {
  error:any;

  constructor(
    public modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    if (this.navParams.get('error')) {
      this.error = this.navParams.get('error');
    } else {
      this.error = {
        message: 'Generic error',
        code: '010'
      }
    }
  }

  dismiss(){
    this.modalController.dismiss();
  }
}
