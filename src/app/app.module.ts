import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//AQUI SE IMPORTAN LOS URL
import { APP_ROUTING } from './app.routes';

//AQUI IMPORTAMOS LOS SERVICIOS
import { jugadoresService } from './components/servicios/jugadores.service';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { RonaldoComponent } from './components/ronaldo/ronaldo.component';
import { MessiComponent } from './components/messi/messi.component';
import { JamesComponent } from './components/james/james.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    RonaldoComponent,
    MessiComponent,
    JamesComponent,
    FooterComponent,
    HeaderComponent,
    JugadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  
  providers: [jugadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
