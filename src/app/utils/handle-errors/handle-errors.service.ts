import { Injectable } from '@angular/core';
import { ModalServiceService } from "../modal-service/modal-service.service";
@Injectable({
  providedIn: 'root'
})
export class HandleErrorsService {

  constructor(
    private modalService : ModalServiceService
  ) { }

  /**
   * error
   * @param error
   * @returns modalService Error
   */
  public error(error: any) {
    this.modalService.errorModal(error);
  }

}
