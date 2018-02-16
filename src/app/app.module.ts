import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Containers
import { HeaderContainerComponent } from './containers/header-container/header-container.component';
import { DashboardContainerComponent } from './containers/dashboard-container/dashboard-container.component';
// Components
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserListComponent } from './components/dashboard/user-list/user-list.component';
import { UserItemComponent } from './components/dashboard/user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    // Containers
    HeaderContainerComponent,
    DashboardContainerComponent,
    // Components
    HeaderComponent,
    NavigationComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
