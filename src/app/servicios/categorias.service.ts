import { Injectable } from '@angular/core'
import { AngularFireDatabase } from '@angular/fire/compat/database'
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  constructor(private db: AngularFireDatabase) {}

  getCategorias() {
    return this.db
      .list('categorias')
      .snapshotChanges()
      .pipe(
        map((change) =>
          change.map((c) => ({
            key: c.payload.key,
            ...(c.payload.val() as Record<string, unknown>)
          }))
        )
      )
  }
}
