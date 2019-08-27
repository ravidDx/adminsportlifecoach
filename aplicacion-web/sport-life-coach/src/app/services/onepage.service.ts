import { Injectable } from '@angular/core';
//import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database'
import { AngularFirestore } from '@angular/fire/firestore';
//version nueva para servicos resfult
import {HttpClient} from '@angular/common/http';
import {map, finalize} from 'rxjs/operators'

/*Interfaces*/
import {Slider} from '../interfaces/slider.interface';
import {About} from '../interfaces/about.interface';
import {Service} from '../interfaces/service.interface';
import {Portafolio} from '../interfaces/portafolio.interface';
import {Noticia} from '../interfaces/noticia.interface';

//storage firebase
import {AngularFireStorage} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class OnepageService {

  url = 'https://miapp-158221.firebaseio.com/';

  slidersUrl=this.url+'home.json';
  sliderUrl=this.url+'home';

  aboutsUrl=this.url+'about.json';
  aboutUrl=this.url+'about';

  servicesUrl=this.url+'servicios.json';
  serviceUrl=this.url+'servicios';

  portafoliosUrl=this.url+'portafolio.json';
  portafolioUrl=this.url+'portafolio';

  noticiasUrl=this.url+'noticias.json';
  noticiaUrl=this.url+'noticias';

  uploadProgress: Observable<number>;
  uploadURL: Observable<string>;
  
  sliderList:AngularFireList<Slider>;
  selectedSlider:Slider;
    
  constructor(private firebase:AngularFireDatabase, 
              private _http:HttpClient,
              private storage:AngularFireStorage) { }

  getSliders(){
    return this._http.get<Slider[]>(this.slidersUrl)
  }

  updateSilder(slider:Slider,id:string){
    let url =`${this.sliderUrl}/${id}.json`;
    return this._http.put<Slider>(url,slider);     
  }

  getAbouts(){
    return this._http.get<About[]>(this.aboutsUrl)
  }

  updateAbout(about:About,id:string){
    let url =`${this.aboutUrl}/${id}.json`;
    return this._http.put<About>(url,about);     
  }

  getServices(){
    return this._http.get<Service[]>(this.servicesUrl)
  }

  updateService(service:Service,id:string){
    let url =`${this.serviceUrl}/${id}.json`;
    return this._http.put<Service>(url,service);     
  }

  
  getPortafolio(){
    return this._http.get<Portafolio[]>(this.portafoliosUrl)
  }

  updatePortafolio(portafolio:Portafolio,id:string){
    let url =`${this.portafolioUrl}/${id}.json`;
    return this._http.put<Portafolio>(url,portafolio);     
  }

  getNoticias(){
    return this._http.get<Noticia[]>(this.noticiasUrl)
  }

  updateNoticia(noticia:Noticia,id:string){
    let url =`${this.noticiaUrl}/${id}.json`;
    return this._http.put<Noticia>(url,noticia);     
  }




  onUpload(data:any,id:any){
    const file = data;
    const filePath = `paginaweb/sliders/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    // Observe percentage changes
    this.uploadProgress = task.percentageChanges();

    // Get notified when the download URL is available
    return task.snapshotChanges().pipe(
      finalize(() => 
        this.uploadURL = ref.getDownloadURL()
      )
    )
  
  }
  
  downloadUrl(id:any){
    const filePath = `paginaweb/sliders/${id}`;
    const imgRef = this.storage.ref(filePath);
    return imgRef.getDownloadURL();
  }


  onUploadAbout(data:any,id:any){
    const file = data;
    const filePath = `paginaweb/about/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    // Observe percentage changes
    this.uploadProgress = task.percentageChanges();

    // Get notified when the download URL is available
    return task.snapshotChanges().pipe(
      finalize(() => 
        this.uploadURL = ref.getDownloadURL()
      )
    )
  
  }
  
  downloadAboutUrl(id:any){
    const filePath = `paginaweb/about/${id}`;
    const imgRef = this.storage.ref(filePath);
    return imgRef.getDownloadURL();
  }


  onUploadPortafolio(data:any,id:any){
    const file = data;
    const filePath = `paginaweb/portafolio/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    // Observe percentage changes
    this.uploadProgress = task.percentageChanges();

    // Get notified when the download URL is available
    return task.snapshotChanges().pipe(
      finalize(() => 
        this.uploadURL = ref.getDownloadURL()
      )
    )
  
  }
  
  downloadPortafolioUrl(id:any){
    const filePath = `paginaweb/portafolio/${id}`;
    const imgRef = this.storage.ref(filePath);
    return imgRef.getDownloadURL();
  }



}
