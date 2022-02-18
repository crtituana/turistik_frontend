import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guia',
  templateUrl: './guia.component.html',
  styleUrls: ['./guia.component.css']
})
export class GuiaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  Data = [
    {
    id: 1, title: "Victor Chavez", img: "https://fernandoizaguide.files.wordpress.com/2020/04/feriza-32.jpg", Experiencia:"Tiene 6 años de experiencia en la alta montaña, cumbres importantes: Cotopaxi, Chimborazo, Antisana, Altar, Ilinizas"

  },

  {
    id: 2, title: "Mario Suarez", img:  "https://contents.mediadecathlon.com/p1802175/k$bd98222a5a01f5061f3ddc01fe29dc0a/chaqueta-de-alpinismo-y-alta-montana-mujer-simond-sprint-azul-turquesa.jpg?&f=452x452", Experiencia:"Tiene 8 años de experiencia en las montañas, cumbres importantes: Cayambe, Chimborazo, Cotopaxi,Rumiñahui,Tunguragua"

  },
  {

    id: 3, title: "Bryan Tapia", img:  "https://www.swissinfo.ch/resource/blob/551330/b2c20eb0bd29dfd7609aeb4b18738532/sriimg20090605_10786160_0-data.jpg", Experiencia:"Tiene 10 años de experiencia en las montañas, cumbre importantes: Antisana, Cotopaxi, Cayambe, Sincholagua, Ilinizas, Imbabura"
  },
  {

    id: 4, title: "Christian Tituaña", img:  "https://www.desnivel.com/images/2016/02/ueli-steck-record-eiger-2015-perfect-snowconditions.jpg", Experiencia:"Tiene experiencia de 4 años en montañas, cumbres importantes: Casitahua, La Marca, Rucu Pichincha, Atacazo, Cotopaxi, Antisana"
  },
  {

    id: 5, title: "Luis Noboa", img:"https://abriendohuella.files.wordpress.com/2008/07/cotopaxi-069.jpg", Experiencia:"Tiene experiencia 7 años en la montaña, cumbres importantes: Altar, Chimborazo, Ilinizas, Quilindaña"
  },
  {

    id: 6, title: "Leonardo Ponce", img:"https://www.travelsauro.com/wp-content/uploads/2016/03/ecuador-cotopaxi-summit-1.jpg", Experiencia:"Tiene experiencia más de 10 años AC, cumbres importantes: Yanahurco, Cotacachi, Imbabura, Antisana, Fuya Fuya "
  },
  


  ];
  

}
