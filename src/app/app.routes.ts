import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';
import { JugadoresComponent } from "./components/jugadores/jugadores.component";
import { JamesComponent } from "./components/james/james.component";
import { MessiComponent } from "./components/messi/messi.component";
import { RonaldoComponent } from "./components/ronaldo/ronaldo.component";



const APP_ROUTES: Routes = [
    {path: "Jugadores",component:JugadoresComponent},
    {path: "Footer",component:FooterComponent},
    {path: "Header",component:HeaderComponent},
    {path:"James",component:JamesComponent},
    {path:"Messi",component:MessiComponent},
    {path:"Ronaldo",component:RonaldoComponent},
    {path:'**',pathMatch:'full',redirectTo:'Jugadores'}

    ];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);