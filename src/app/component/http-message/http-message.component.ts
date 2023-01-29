import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Excuse } from 'src/app/model/Excuse';
import { ExcuseService } from 'src/app/service/excuse.service';

@Component({
  selector: 'app-http-message',
  templateUrl: './http-message.component.html',
  styleUrls: ['./http-message.component.css']
})
export class HttpMessageComponent implements OnInit {

  httpCode!: number;
  httpMessage!: string;

  constructor(private excuseService: ExcuseService,
    private route: ActivatedRoute) { }

  //Récuperation du httpCode
  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('httpCode');
    if(code){
      this.httpCode = Number(code);
    }
    this.getHttpMessage();
  }

  //Parcours du tableau des excuses et envoi du message si http correspondant
  getHttpMessage(){ this.excuseService.getAllExcuse().subscribe((excuses: Excuse[]) => {
      const excuse = excuses.find(e => 
        e.http_code === this.httpCode
      )
      if(excuse){
        this.httpMessage = excuse.message
      }
  })
  }

}
