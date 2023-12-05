import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  @Input() contador!:number;
  @Output() resetCont = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  };
  
  reset(){
    this.contador = 0;
    this.resetCont.emit(this.contador);
  }

}
