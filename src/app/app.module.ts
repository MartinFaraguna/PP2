import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// --- Importaciones NG Modules ---
import { AngularFireModule } from '@angular/fire/compat'; // Importa el módulo principal de compatibilidad
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // Módulo para Authentication
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // Módulo para Firestore
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // Módulo para Storage
// --- Fin de las importaciones ---
import { FormsModule } from '@angular/forms'; //PARA EL LOGIN

import { environment } from '../environments/environment'; // Importa la configuración del entorno

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    // --- Configuración de Firebase en los imports ---
    AngularFireModule.initializeApp(environment.firebase),
    // 2. Importa los módulos de los servicios específicos que quieres usar
    AngularFireAuthModule,      // Habilita la inyección del servicio AngularFireAuth
    AngularFirestoreModule,   // Habilita la inyección del servicio AngularFirestore
    AngularFireStorageModule,   // Habilita la inyección del servicio AngularFireStorage
    // --- Fin de la configuración de Firebase ---
    FormsModule // PARA EL LOGIN
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }