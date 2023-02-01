import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Excuse } from 'src/app/model/Excuse';
import { ExcuseService } from 'src/app/service/excuse.service';
import { ModalformComponent } from '../modalform/modalform.component';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Output() message = new EventEmitter<string>();

  constructor(private excuseService: ExcuseService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  //Parcours du tableau des excuses et envoi d'un message selon un random index
  getExcuse(){
    this.excuseService.getAllExcuse().subscribe((excuses: Excuse[]) => {
      if(excuses && excuses.length > 0){
        const index = Math.floor(Math.random() * excuses.length);
        this.message.emit(excuses[index].message);
      }
    })
  }

  addExcuse(){
    this.modalService.open(ModalformComponent,{windowClass: 'app-modalform',
    centered: true});
  }
}
