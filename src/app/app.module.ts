import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptainAmericaComponent } from './characters/captain-america/captain-america.component';
import { HawkeyeComponent } from './characters/hawkeye/hawkeye.component';
import { BlackPantherComponent } from './characters/black-panther/black-panther.component';
import { AquamanComponent } from './characters/aquaman/aquaman.component';
import { DeadpoolComponent } from './characters/deadpool/deadpool.component';
import { EmmaFrostComponent } from './characters/emma-frost/emma-frost.component';
import { FlashComponent } from './characters/flash/flash.component';
import { GreenLanternComponent } from './characters/green-lantern/green-lantern.component';
import { HulkComponent } from './characters/hulk/hulk.component';
import { IronmanComponent } from './characters/ironman/ironman.component';
import { JeanGreyComponent } from './characters/jean-grey/jean-grey.component';
import { KakashiHatakeComponent } from './characters/kakashi-hatake/kakashi-hatake.component';
import { LokiComponent } from './characters/loki/loki.component';
import { MagnetoComponent } from './characters/magneto/magneto.component';
import { NarutoUzumakiComponent } from './characters/naruto-uzumaki/naruto-uzumaki.component';
import { ObitoUchihaComponent } from './characters/obito-uchiha/obito-uchiha.component';
import { PeterParkerComponent } from './characters/peter-parker/peter-parker.component';
import { QuillComponent } from './characters/quill/quill.component';
import { RogueComponent } from './characters/rogue/rogue.component';
import { SasukeUchihaComponent } from './characters/sasuke-uchiha/sasuke-uchiha.component';
import { ThorComponent } from './characters/thor/thor.component';
import { VenomComponent } from './characters/venom/venom.component';
import { WonderWomanComponent } from './characters/wonder-woman/wonder-woman.component';
import { ZatannaComponent } from './characters/zatanna/zatanna.component';
import { BatmanComponent } from './characters/batman/batman.component';
import { DoctorStrangeComponent } from './characters/doctor-strange/doctor-strange.component';
import { ItachiUchihaComponent } from './characters/itachi-uchiha/itachi-uchiha.component';
import { ThanosComponent } from './characters/thanos/thanos.component';
import { FalconComponent } from './characters/falcon/falcon.component';
import { NightcrawlerComponent } from './characters/nightcrawler/nightcrawler.component';
import { YonduComponent } from './characters/yondu/yondu.component';
import { ScarletWitchComponent } from './characters/scarlet-witch/scarlet-witch.component';
import { VisionComponent } from './characters/vision/vision.component';
import { BlackWidowComponent } from './characters/black-widow/black-widow.component';
import { CaptainMarvelComponent } from './characters/captain-marvel/captain-marvel.component';
import { CyclopsComponent } from './characters/cyclops/cyclops.component';
import { WolverineComponent } from './characters/wolverine/wolverine.component';
import { SupermanComponent } from './characters/superman/superman.component';
import { HawkgirlComponent } from './characters/hawkgirl/hawkgirl.component';
import { MartianManhunterComponent } from './characters/martian-manhunter/martian-manhunter.component';
import { AntManComponent } from './characters/ant-man/ant-man.component';
import { WarMachineComponent } from './characters/war-machine/war-machine.component';
import { StormComponent } from './characters/storm/storm.component';
import { MarvelCharactersBaseComponent } from './marvel-characters-base/marvel-characters-base.component';
import { DcCharactersBaseComponent } from './dc-characters-base/dc-characters-base.component';
import { NarutoCharactersBaseComponent } from './naruto-characters-base/naruto-characters-base.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptainAmericaComponent,
    HawkeyeComponent,
    BlackPantherComponent,
    AquamanComponent,
    DeadpoolComponent,
    EmmaFrostComponent,
    FlashComponent,
    GreenLanternComponent,
    HulkComponent,
    IronmanComponent,
    JeanGreyComponent,
    KakashiHatakeComponent,
    LokiComponent,
    MagnetoComponent,
    NarutoUzumakiComponent,
    ObitoUchihaComponent,
    PeterParkerComponent,
    QuillComponent,
    RogueComponent,
    SasukeUchihaComponent,
    ThorComponent,
    VenomComponent,
    WonderWomanComponent,
    ZatannaComponent,
    BatmanComponent,
    DoctorStrangeComponent,
    ItachiUchihaComponent,
    ThanosComponent,
    FalconComponent,
    NightcrawlerComponent,
    YonduComponent,
    ScarletWitchComponent,
    VisionComponent,
    BlackWidowComponent,
    CaptainMarvelComponent,
    CyclopsComponent,
    WolverineComponent,
    SupermanComponent,
    HawkgirlComponent,
    MartianManhunterComponent,
    AntManComponent,
    WarMachineComponent,
    StormComponent,
    MarvelCharactersBaseComponent,
    DcCharactersBaseComponent,
    NarutoCharactersBaseComponent,
    AboutComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}