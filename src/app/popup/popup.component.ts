import { Component,OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
import { ModalModule } from '../modal/modal.module';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  // bodyText: string;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
      // this.bodyText = 'This text can be updated in modal 1';
  }

  openModal(id: string) {
      this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }
}