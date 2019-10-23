import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
// para google

import { GooglePlus } from '@ionic-native/google-plus/ngx';
// import firebase from 'firebase';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

// Para registro
import { User } from '../share/user.class'; // interface
import { AngularFireDatabase } from '@angular/fire/database';

// mensaje visible para cargar la página home
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  nombre: string;
  apellido: string;
  usuario: User;
  constructor(private AFauth: AngularFireAuth,
    private fb: Facebook,
    private platform: Platform, public router: Router,
    private gplus: GooglePlus,
    private DBFire: AngularFireDatabase,
    public loadingController: LoadingController,
    public toastController: ToastController) {
  }

  // INICIO  Y CIERRE DE SESION
  logout() {
    this.AFauth.auth.signOut();
    console.log('Usuario mail ' + this.AFauth.auth.signOut());
    this.router.navigate(['/login']);
  }

  loginFire(email: any, password: any) {
    return new Promise((resolve, rejected) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err =>
        rejected(err));
    });
  }

  loginwithFacebook() {
    if (this.platform.is('cordova')) {
      this.fb.login(['email']).then(res => {
        firebase.auth().signInWithCredential(firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken))
          .then(suc => {
            // devuelve los datos de cierto usuario de acuerdo a su uid
            this.DBFire.object('usuarios/' + suc.user.uid).valueChanges().subscribe(
              s => {
                if (s !== null) { // si existe lo lleva al home sino lo lleva al registro
                  this.router.navigate(['/tabs/home']);
                } else {
                  this.router.navigate(['/registro/personal']);
                }
              });
          }).catch(ns => {
            this.RS_Toast();
          });
      }).catch((error) => {
        this.RS1_Toast();
      });
    } /*else {
      console.log('dentro del else');
      this.AFauth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => {
          console.log(res);
          // devuelve los datos de cierto usuario de acuerdo a su uid
          this.DBFire.object('usuarios/' + res.user.uid).valueChanges().subscribe(
            s => {
              if (s !== null) { // si lo que devuelve es null entonces lo crea en la bd realtime de firebase y lo dirige al home
                // alert('existe');
                this.router.navigate(['/tabs/home']);
              } else {
                // alert('no existe');
                this.router.navigate(['/registro/personal']);
                // this.userService.generic_register(res);
              }
            });
        }).then(succ => {
          // this.router.navigate(['/registro/datos']); // cuando si se conecta con firebase
        }).catch(ns => {
          alert('correo o contraseña incorrectos'); // cuando no se conecta con firebase - eror de firebase
          alert(ns);
        });
    }*/
  }
  /* MENSAJES DE FACEBOOK  Y GOOGLE LOGIN */
  async RS_Toast() {
    const toast = await this.toastController.create({
      message: 'Error de conexion con servidor o email ya asociado con otra cuenta',
      duration: 2000,
      color: 'dark',
      position: 'middle',
      animated: true
    });
    toast.present();
  }
  async RS1_Toast() {
    const toast = await this.toastController.create({
      message: 'Verificar la conexión con internet',
      duration: 2000,
      color: 'dark',
      position: 'middle',
      animated: true
    });
    toast.present();
  }

  loginGoogle() {
    if (this.platform.is('cordova')) {
      this.gplus.login({
        scopes: '',
        webClientId: '67946954997-jekd82u5gbsuqpaf595qnv6unqg2srn7.apps.googleusercontent.com',
        offline: true
      }).then(res => {
        firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
          .then(suc => {
            // devuelve los datos de cierto usuario de acuerdo a su uid
            this.DBFire.object('usuarios/' + suc.user.uid).valueChanges().subscribe(
              s => {
                if (s !== null) { // si existe lo lleva al home sino lo lleva al registro
                  this.router.navigate(['/tabs/home']);
                } else {
                  this.router.navigate(['/registro/personal']);
                }
              });
          }).catch(ns => {
            this.RS_Toast();
          });
      }).catch((error) => {
        this.RS1_Toast();
      });
    } /*else {
      // this.webGoogleLogin();
      console.log('dentro del else');
      this.AFauth.auth
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(res => {
          console.log(res);
          // devuelve los datos de cierto usuario de acuerdo a su uid
          this.DBFire.object('usuarios/' + res.user.uid).valueChanges().subscribe(
            s => {
              if (s !== null) { // si lo que devuelve es null entonces lo crea en la bd realtime de firebase y lo dirige al home
                alert('existe');
              } else {
                alert('no existe');
                // this.userService.generic_register(res);
              }
            });
          this.router.navigate(['/tabs/home']);
        }).catch(ns => {
          alert(JSON.stringify(ns));
          alert('correo o contraseña incorrectos -error de firebase');
        });
    }*/
  }

  logOutOfFacebook() {
    this.AFauth.auth.signOut();
    if (this.platform.is('cordova')) {
      this.fb.logout().then( suc => {
        this.router.navigate(['/login']);
      });
    }
  }

  logOutGooglePlus() {
    this.AFauth.auth.signOut();
    if (this.platform.is('cordova')) {
      this.gplus.logout().then( suc => {
        this.router.navigate(['/login']);
      });
    }
  }

  reset_password(email: string) {
    this.AFauth.auth.sendPasswordResetEmail(email)
      .then(() => {
        this.okToast();
      }).catch((err) => {
        if (err.code === 'auth/user-not-found') {
          this.badToast();
        } else {
          this.badToast1();
        }
      });
  }

  /* MENSAJES TOAST PARA RESETEO DE PASSWORD*/
  async okToast() {
    const toast = await this.toastController.create({
      message: 'Te hemos enviado un link de reset password a tu correo',
      duration: 2000,
      color: 'light',
      position: 'middle',
      animated: true
    });
    toast.present();
  }

  async badToast() {
    const toast = await this.toastController.create({
      message: 'Link no eviando, no se ha encontrado ningun usuario con el correo ingresado',
      duration: 2000,
      color: 'light',
      position: 'middle',
      animated: true
    });
    toast.present();
  }

  async badToast1() {
    const toast = await this.toastController.create({
      message: 'Link no eviando : verfique su conexion a internet',
      duration: 2000,
      color: 'light',
      position: 'middle',
      animated: true
    });
    toast.present();
  }

}
