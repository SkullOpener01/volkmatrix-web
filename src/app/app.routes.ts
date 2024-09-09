import {Routes } from '@angular/router';
import {LandingPageComponent} from "./components/websiteComps/landing-page/landing-page.component";
import {HomeComponent} from "./components/websiteComps/home/home.component";
import {Error404Component} from "./components/websiteComps/error404/error404.component";
import {FaqComponent} from "./components/websiteComps/faq/faq.component";
import {AllProductsComponent} from "./components/websiteComps/products/all-products/all-products.component";
import {AboutComponent} from "./components/websiteComps/about/about.component";
import {DemoRequestComponent} from "./components/websiteComps/demo-request/demo-request.component";
import {ComingSoonComponent} from "./components/websiteComps/coming-soon/coming-soon.component";
import {NumbersComponent} from "./components/websiteComps/numbers/numbers.component";
import {SmsComponent} from "./components/websiteComps/products/sms/sms.component";
import {VoiceComponent} from "./components/websiteComps/products/voice/voice.component";
import {WhatsappComponent} from "./components/websiteComps/products/whatsapp/whatsapp.component";
import {EmailComponent} from "./components/websiteComps/products/email/email.component";

export const routes: Routes = [
  // { path: '', component: LandingPageComponent },
  { path: '', redirectTo: '/web', pathMatch: 'full' },
  { path: 'web', component: LandingPageComponent },
  { path: 'home', component: HomeComponent },
  {path: 'error', component: Error404Component },
  {path: 'faq', component: FaqComponent },
  {path: 'all-products', component: AllProductsComponent },
  {path: 'about', component: AboutComponent },
  {path: 'demoReq', component: DemoRequestComponent },
  {path: 'arriving', component: ComingSoonComponent },
  {path: 'numbers', component: NumbersComponent },
  {path: 'sms', component: SmsComponent },
  {path: 'voice', component: VoiceComponent },
  {path: 'wap', component: WhatsappComponent },
  {path: 'email', component: EmailComponent },


];

