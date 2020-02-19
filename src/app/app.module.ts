import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { DatosService } from './services/datos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MockDataservice } from './mock/dataservice/mock-dataservice';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    SqliteDbCopy,
    SQLite,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, DatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 /* constructor(public sqliteDbCopy: SqliteDbCopy) {
    this.sqliteDbCopy.copy('Horario16c.db', 0).then((res) => {
      console.log('copiando bbd correcto', (res))
    })
      .catch((error) => {
        console.error('copiando bbdd error', (error))
      })
  }*/
}

