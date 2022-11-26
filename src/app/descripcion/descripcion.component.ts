import { Component, OnInit } from '@angular/core';
import {ActivatedRoute  } from "@angular/router";

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getpeli()
  }
  getpeli(){
    const id= this.route.snapshot.paramMap.get('id')
    console.log("es:"+id)
  }
  objeto=[
    {
      nombre:"Samsung s22",
      precio:"800",
      imgurl:"https://images.samsung.com/is/image/samsung/p6pim/es/feature/others/es-feature-galaxy-s22-ultra-s908-411065-532205251?$FB_TYPE_A_MO_JPG$",
      envio:"envio gratis",
      id:"1"
    },
    {
      nombre:"samsung s22 plus",
      precio:"900",
      imgurl:"https://s1.eestatic.com/2021/11/02/elandroidelibre/moviles-android/624198327_213594786_1024x576.jpg",
      envio:"envio gratis",
      id:"2"
    },
    {
      nombre:"samsumg s22 ultra",
      precio:"1000",
      imgurl:"https://img.global.news.samsung.com/mx/wp-content/uploads/2022/02/Galaxy_S22_Ultra_PR_main1F.jpg",
      envio:"envio gratis",
      id:"3"
    },
    {
      nombre:"samsung s21",
      precio:"700",
      imgurl:"https://www.manual.com.ve/thumbs/products/l/1329929-samsung-galaxy-s21-ultra-5g.jpg",
      envio:"envio gratis",
      id:"4"
    },
    {
      nombre:"samsumg s21 ultra",
      precio:"900",
      imgurl:"https://digimartve.com/wp-content/uploads/2021/03/samsung-galaxy-s21-ultra-5g-3.jpg",
      envio:"envio gratis",
      id:"5"
    }
  ];
}
