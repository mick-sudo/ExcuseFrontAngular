import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Excuse } from 'src/app/model/Excuse';
import { ExcuseService } from 'src/app/service/excuse.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Output() message = new EventEmitter<string>();

  constructor(private excuseService: ExcuseService) { }

  ngOnInit(): void {
  }

  getExcuse(){
    this.excuseService.getAllExcuse().subscribe((excuses: Excuse[]) => {
      if(excuses && excuses.length > 0){
        const index = Math.floor(Math.random() * excuses.length);
        this.message.emit(excuses[index].message);
      }
    })
  }
}
