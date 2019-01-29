import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  Input } from '@angular/core'
import { Router } from '@angular/router';
import { HomePage } from '../home/home.page';
import { isNgTemplate } from '@angular/compiler';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  titulo:any;
  nota_media:any;
  lenguaje_original:any;
  resumen:any;
  fecha:any;
  //@Input() mensaje: any;
  
  constructor(private route: ActivatedRoute) {
   }
  

  ngOnInit() { 
     this.titulo = this.route.snapshot.paramMap.get('title');
     this.nota_media = this.route.snapshot.paramMap.get('vote_average');
     this.lenguaje_original = this.route.snapshot.paramMap.get('original_language');
     this.resumen = this.route.snapshot.paramMap.get('overview');
     this.fecha = this.route.snapshot.paramMap.get('release_date');
    
  }

  /*reciveDatos(mensaje){
    this.item = mensaje;
    console.log(this.item + "mi item2");
  }*/

 }
 