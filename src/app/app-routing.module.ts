import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AntManComponent } from './characters//ant-man/ant-man.component';
import { AquamanComponent } from './characters/aquaman/aquaman.component';
import { BatmanComponent } from './characters/batman/batman.component';
import { BlackPantherComponent } from './characters/black-panther/black-panther.component';
import { BlackWidowComponent } from './characters/black-widow/black-widow.component';
import { CaptainAmericaComponent } from './characters/captain-america/captain-america.component';
import { CaptainMarvelComponent } from './characters/captain-marvel/captain-marvel.component';
import { CyclopsComponent } from './characters/cyclops/cyclops.component';
import { DeadpoolComponent } from './characters/deadpool/deadpool.component';
import { DoctorStrangeComponent } from './characters/doctor-strange/doctor-strange.component';
import { EmmaFrostComponent } from './characters/emma-frost/emma-frost.component';
import { FalconComponent } from './characters/falcon/falcon.component';
import { FlashComponent } from './characters/flash/flash.component';
import { GreenLanternComponent } from './characters/green-lantern/green-lantern.component';
import { HawkeyeComponent } from './characters/hawkeye/hawkeye.component';
import { HawkgirlComponent } from './characters/hawkgirl/hawkgirl.component';
import { HulkComponent } from './characters/hulk/hulk.component';
import { IronmanComponent } from './characters/ironman/ironman.component';
import { ItachiUchihaComponent } from './characters/itachi-uchiha/itachi-uchiha.component';
import { JeanGreyComponent } from './characters/jean-grey/jean-grey.component';
import { KakashiHatakeComponent } from './characters/kakashi-hatake/kakashi-hatake.component';
import { LokiComponent } from './characters/loki/loki.component';
import { MagnetoComponent } from './characters/magneto/magneto.component';
import { MartianManhunterComponent } from './characters/martian-manhunter/martian-manhunter.component';
import { NarutoUzumakiComponent } from './characters/naruto-uzumaki/naruto-uzumaki.component';
import { NightcrawlerComponent } from './characters/nightcrawler/nightcrawler.component';
import { ObitoUchihaComponent } from './characters/obito-uchiha/obito-uchiha.component';
import { PeterParkerComponent } from './characters/peter-parker/peter-parker.component';
import { QuillComponent } from './characters/quill/quill.component';
import { RogueComponent } from './characters/rogue/rogue.component';
import { SasukeUchihaComponent } from './characters/sasuke-uchiha/sasuke-uchiha.component';
import { ScarletWitchComponent } from './characters/scarlet-witch/scarlet-witch.component';
import { StormComponent } from './characters/storm/storm.component';
import { SupermanComponent } from './characters/superman/superman.component';
import { ThanosComponent } from './characters/thanos/thanos.component';
import { ThorComponent } from './characters/thor/thor.component';
import { VenomComponent } from './characters/venom/venom.component';
import { VisionComponent } from './characters/vision/vision.component';
import { WarMachineComponent } from './characters/war-machine/war-machine.component';
import { WolverineComponent } from './characters/wolverine/wolverine.component';
import { WonderWomanComponent } from './characters/wonder-woman/wonder-woman.component';
import { YonduComponent } from './characters/yondu/yondu.component';
import { ZatannaComponent } from './characters/zatanna/zatanna.component';

const routes: Routes = [
  { path: '', component: AboutComponent, pathMatch: 'full'},
  { path: 'about', component: AboutComponent},
  { path: 'character/ant-man', component: AntManComponent},
  { path: 'character/aquaman', component: AquamanComponent},
  { path: 'character/batman', component: BatmanComponent},
  { path: 'character/black-panther', component: BlackPantherComponent},
  { path: 'character/black-widow', component: BlackWidowComponent},
  { path: 'character/captain-america', component: CaptainAmericaComponent},
  { path: 'character/captain-marvel', component: CaptainMarvelComponent},
  { path: 'character/cyclops', component: CyclopsComponent},
  { path: 'character/deadpool', component: DeadpoolComponent},
  { path: 'character/doctor-strange', component: DoctorStrangeComponent},
  { path: 'character/emma-frost', component: EmmaFrostComponent},
  { path: 'character/falcon', component: FalconComponent},
  { path: 'character/flash', component: FlashComponent},
  { path: 'character/green-lantern', component: GreenLanternComponent},
  { path: 'character/hawkeye', component: HawkeyeComponent},
  { path: 'character/hawkgirl', component: HawkgirlComponent},
  { path: 'character/hulk', component: HulkComponent},
  { path: 'character/ironman', component: IronmanComponent},
  { path: 'character/itachi-uchiha', component: ItachiUchihaComponent},
  { path: 'character/jean-grey', component: JeanGreyComponent},
  { path: 'character/kakashi-hatake', component: KakashiHatakeComponent},
  { path: 'character/loki', component: LokiComponent},
  { path: 'character/magneto', component: MagnetoComponent},
  { path: 'character/martian-manhunter', component: MartianManhunterComponent},
  { path: 'character/naruto-uzumaki', component: NarutoUzumakiComponent},
  { path: 'character/nightcrawler', component: NightcrawlerComponent},
  { path: 'character/obito-uchiha', component: ObitoUchihaComponent},
  { path: 'character/peter-parker', component: PeterParkerComponent},
  { path: 'character/quill', component: QuillComponent},
  { path: 'character/rogue', component: RogueComponent},
  { path: 'character/sasuke-uchiha', component: SasukeUchihaComponent},
  { path: 'character/scarlet-witch', component: ScarletWitchComponent},
  { path: 'character/storm', component: StormComponent},
  { path: 'character/superman', component: SupermanComponent},
  { path: 'character/thanos', component: ThanosComponent},
  { path: 'character/thor', component: ThorComponent},
  { path: 'character/venom', component: VenomComponent},
  { path: 'character/vision', component: VisionComponent},
  { path: 'character/war-machine', component: WarMachineComponent},
  { path: 'character/wolverine', component: WolverineComponent},
  { path: 'character/wonder-woman', component: WonderWomanComponent},
  { path: 'character/yondu', component: YonduComponent},
  { path: 'character/zatanna', component: ZatannaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
