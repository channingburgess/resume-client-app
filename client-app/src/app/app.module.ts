import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

// used to create fake backend

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ConfigService } from "./shared/config.service";

import { AuthCallbackComponent } from "./auth-callback/auth-callback.component";

/* Module Imports */
import { CoreModule } from "./core/core.module";
import { LandingModule } from "./landing/landing.module";
import { AccountModule } from "./account/account.module";
import { ShellModule } from "./shell/shell.module";
import { ContentModule } from "./Content/content.module";
import { SharedModule } from "./shared/shared.module";
import { MaterialModule } from "./material/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, AuthCallbackComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    CoreModule,
    LandingModule,
    AccountModule,
    ContentModule,
    AppRoutingModule,
    ShellModule,
    SharedModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {}
