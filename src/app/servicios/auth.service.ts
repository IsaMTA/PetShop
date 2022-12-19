import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { GoogleAuthProvider } from '@angular/fire/auth'
import { EmailAuthProvider } from '@angular/fire/auth'
import { FacebookAuthProvider } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth,
  ) {
  }

  public getUser(): Observable<any> {
    return this.afAuth.authState;
  }

 
  sendPasswordEmailAddress(emailAddress: string){
    return this.afAuth.sendPasswordResetEmail(emailAddress);
  }

  signUpWithEmailAndPassword(email: string, password: string){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  updateDisplayName(displayName: string){
    return new Promise<any>(async (resolve, reject) => {
      let photoURL = (await this.afAuth.currentUser)?.photoURL;

      (await this.afAuth.currentUser)?.updateProfile({
        displayName: displayName,
        photoURL: photoURL
      }).then(res => {
        resolve(res);
      }, err => {
        reject(err)});
    });
  }


  updateEmail(newEmail: string, currentPassword: string) {
    return new Promise<any>(async (resolve, reject) => {
    this.afAuth.currentUser.then(
      currentUser => {
        currentUser?.reauthenticateWithCredential(
          EmailAuthProvider.credential(
            currentUser.email ||"",
            currentPassword
          )
        ).then(
          async res => {
            currentUser.updateEmail(
              newEmail
            ).then(
              res => resolve(res),
              err => reject(err)
            )
          }, err => reject(err)
        )
      }
    )
    });
  }

  signInWithEmailAndPassword(email: string, password: string){
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signInWithGoogle(): Promise<any>{
  return new Promise<any>((resolve, reject) => {
    let provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    this.afAuth.signInWithPopup(provider).then(res => {
      resolve(res);
    },
    err => {
      reject(err);
    })
  })
}

signInWithFacebook(): Promise<any>{
  return new Promise<any>((resolve, reject) => {
    let provider = new FacebookAuthProvider();
    provider.addScope('public_profile');
    

    this.afAuth.signInWithPopup(provider).then(res => {
      resolve(res);
    },
    err => {
      reject(err);
    })
  })
}

  signOut() {
    return this.afAuth.signOut();
  }
 
 
}