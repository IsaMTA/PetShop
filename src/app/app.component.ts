import { AngularFireDatabase } from '@angular/fire/compat/database'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'PetShop'

  constructor(private db: AngularFireDatabase) {}

  ngOnInit(): void {
    this.db
      .list('/productos')
      .valueChanges()
      .subscribe((productos) => console.log(productos))
  }
}
