import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}


  public sendPasswordResetEmail(emailAdress: string) {
    return this.authService.sendPasswordEmailAddress(emailAdress);
  }
  
  public updateEmail(newEmail: string, currentPassword: string) {
    return new Promise<any>((resolve, reject) => {
      this.getUserProfile().then(
        userProfile => {
            if (userProfile.userProvider == 'email') {
              this.authService.updateEmail(newEmail, currentPassword).then(
                res => {
                  resolve(res);
                },
                err => {
                  reject(err);
                }
              )
            } else {
              reject({code: 'auth/invalid-provider'});
            }
        }
      )
    })
  }

  public updateDisplayName(newDisplayName: string) {
    return new Promise<any>((resolve, reject) => {
      this.getUserProfile().then(
        userProfile => {
          this.authService.updateDisplayName(newDisplayName).then(
            res => {
            },
            err => {
              reject(err);
            }
          )
        }
      )
    })
  }
  


  public signInWithGoogle(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.authService.signInWithGoogle().then(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        } 
      )
    })
  }

  public signInWithEmailAndPassword(email: string, password: string): Promise<any>{
    return new Promise<any>((resolve, reject) => {
      this.authService.signInWithEmailAndPassword(email, password)
      .then(res => {
            resolve(res)
          },
          err => {
              reject(err)
            }
        )
    })
  }

  public signUpWithEmailAndPassword(email: string, password: string){
    return new Promise<any>((resolve, reject) => { 
      this.authService.signUpWithEmailAndPassword(email, password).then(
        res => {
          resolve(res)
        },
        err => reject(err)
        )
    })
  }

  public getAuthToken() {
    return this.authService.getUser();
  }

  public getUserProfile(): Promise<any>{
    return new Promise<any>((resolve, reject) => {
      this.authService.getUser().subscribe(
        res => {
          resolve(res)
        },
        err => {
          resolve(err)
        }
      )
    })
  }

  public signOut() {
    return new Promise<any>((resolve, reject) => { 
      this.authService.signOut().then(
        res => {
          resolve(res);
        },
        err => reject(err)
      )
    })
  }
 
}