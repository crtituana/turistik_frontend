import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


 


  constructor() { }

  ngOnInit(): void {
   
  }
 //array de objetos
  Data = [
    {
    id: 1, title: "Cotopaxi", img: "http://www.comecuamex.com/wp-content/uploads/2021/04/cotopaxi-1200x600-1.jpg", costo:30

  },
  {
    id: 2, title: "Cotacachi", img:  "http://hablemosdevolcanes.com/wp-content/uploads/2018/09/cotacachi.jpg", costo:40

  },
  {

    id: 3, title: "Chimborazo", img:  "https://ep02.epimg.net/elpais/imagenes/2016/04/06/ciencia/1459968044_919086_1460016482_noticia_fotograma.jpg", costo: 60
  },
  {

    id: 4, title: "Cayambe", img:  "https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/F7MBWHI2I5FM3A4Z5UCBHUUCLI.jpg", costo: 50
  },
  {

    id: 5, title: "Altar", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Volc%C3%A1n_El_Altar_-_Riobamba_Ecuador.jpg/1200px-Volc%C3%A1n_El_Altar_-_Riobamba_Ecuador.jpg", costo:110
  },
  {

    id: 6, title: "Iliniza Norte", img:"https://ecuadorecotours.com/wp-content/uploads/2021/08/Ilinizas-ecuadorecoadventures-5.jpg", costo: 50
  },
  {
    id: 7, title: "Rumiñahui", img:"https://i.pinimg.com/originals/55/93/3e/55933e3b2d22ba06a0e533bedc1a46ea.jpg", costo: 35
  },
  {
    id:8, title: "Sincholagua", img: "https://img.goraymi.com/2018/07/12/52a6b8429ff06a4618893c7b680f3998_lg.jpg", costo: 45
  },
  {
    id:8, title: "Rucu Pichincha", img: "https://img.goraymi.com/2016/05/04/3c1406dbb18ffec25a37b7e7d7fe0df6_lg.jpg", costo: 15
  }


  ];
  
}
