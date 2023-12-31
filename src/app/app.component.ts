import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './interfaces/appState.interface';
import * as actions from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador?:number;
  constructor( private store: Store<IAppState> ){
    this.store.subscribe( state => {
      console.log(state);
      this.contador = state.contador;
      
    })

  };

  incrementar(){
    this.store.dispatch( actions.incrementar() );
   
  };
  decrementar(){
    this.store.dispatch( actions.decrementar() );
  };

}

