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
//Services
import { InterceptService} from './utils/intercept.service';
import { AuthService } from "./auth/service/auth.service";
import { MethodService } from './utils/http/method.service';
import { GameService } from "./game/service/game.service";
import { ManagerService } from "./managers/service/manager.service";
import { PlayerService } from "./player/service/player.service";
import { RefereeService } from "./referee/service/referee.service";
import { TeamService } from "./team/service/team.service";
import { TournamentService } from "./tournament/service/tournament.service";
import { HandleErrorsService } from "./utils/handle-errors/handle-errors.service";
import { ModalServiceService } from "./utils/modal-service/modal-service.service";
//Module core
import { AuthModule } from "./auth/auth.module";
import { AppRoutingModule } from './app-routing.module';
import { TabsPageModule } from "./tabs/tabs.module";
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { GameModule } from "./game/game.module";
import { ManagersModule } from "./managers/managers.module";
import { TeamModule } from "./team/team.module";
import { TournamentModule } from "./tournament/tournament.module";
import { PlayerModule } from "./player/player.module";
import { RefereeModule } from "./referee/referee.module";
import { ModalErrorPage } from './utils/modal-service/modal-error/modal-error.page';
export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
export function token(){
  return sessionStorage.TOKEN || null;
}
@NgModule({
  declarations: [
    AppComponent,
    ModalErrorPage
  ],
  entryComponents: [
    ModalErrorPage
  ],
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
    GameService,
    PlayerService,
    ManagerService,
    TeamService,
    TournamentService,
    HandleErrorsService,
    ModalServiceService,
    RefereeService,
    AuthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
