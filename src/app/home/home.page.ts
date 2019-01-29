import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from '@ionic/angular';
import { map } from "rxjs/operators";
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { DetallePageModule } from '../detalle/detalle.module';
import { DetallePage } from '../detalle/detalle.page';
import { stringify } from '@angular/core/src/util';
import { analyzeAndValidateNgModules } from '@angular/compiler';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

public mensaje:any;
mensajesJsonDePantalla = [];
url = 'https://api.themoviedb.org/3/movie/popular?api_key=c70f0aeddfb504f5f798a1c3de051a3c&language=en-US&page=1';
display:boolean;

//@Output() themitEvent:EventEmitter <any> = new EventEmitter<any>();


constructor(private http:Http, public navCtrl: NavController, public route: AppRoutingModule, private router: Router){

    this.http.get(this.url).pipe(map(res => res.json())).subscribe(data => {

      this.display = false;
      this.mensajesJsonDePantalla = data.results;

  });
}

//@ViewChild(DetallePage) detallePeli2:DetallePage;

nuevaVentana(mensaje){
    console.log(mensaje + "mi mensaje");
    this.display = true;
    this.mensaje= mensaje;
    this.router.navigate(["/detalle", mensaje]);
    //this.themitEvent.emit(this.mensaje);
    //this.detallePeli2.reciveDatos(this.mensaje);
};

/*ngAferViewInit(mensaje) {
   
  console.log(mensaje + "mi mensaje");
    this.display = true;
    this.mensaje= mensaje;
    this.router.navigate(["/detalle"]);
    this.themitEvent.emit(mensaje);
    this.detallePeli2.reciveDatos(mensaje);
}*/


}

