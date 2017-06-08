﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { ActionMenuComponent } from './action-menu/action-menu.component';
//import { UserService } from './user/user.service';
import { ApiService } from './api.service';
//import { TestService } from './test.service';
//import { TestProviderService } from './test-provider.service';

@NgModule({
    imports: [
        CommonModule, // we use ngFor & ngIf
        FormsModule   // we use ngModel
    ],
    exports: [HeaderComponent, ActionMenuComponent],
    declarations: [HeaderComponent, ActionMenuComponent],
    providers: [ApiService]
})
export class CoreModule { }