import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { InterceptService} from './utils/intercept.service';

//Module core
import { AuthModule } from "./auth/auth.module";
import { AppRoutingModule } from './app-routing.module';
import { TabsPageModule } from "./tabs/tabs.module";
import { AppComponent } from './app.component';
import { MethodService } from './utils/http/method.service';
import { TemplateModule } from './template/template.module';
import { GameModule } from "./game/game.module";
import { ManagersModule } from "./managers/managers.module";
import { TeamModule } from "./team/team.module";
import { TournamentModule } from "./tournament/tournament.module";
import { PlayerModule } from "./player/player.module";
import { RefereeModule } from "./referee/referee.module";

export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
export function token(){
  return sessionStorage.TOKEN || null;
}
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    AuthModule,
    ManagersModule,
    TournamentModule,
    TeamModule,
    PlayerModule,
    GameModule,
    TabsPageModule, 
    RefereeModule,
    TemplateModule,
    HttpClientModule,
    IonicModule.forRoot(), 
    JwtModule.forRoot({
      config: {
        tokenGetter: token
      }
    }),
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps:[HttpClient]
      }
    }),
    AppRoutingModule],
  providers: [
    StatusBar,
    InterceptService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    },
    SplashScreen,
    MethodService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
