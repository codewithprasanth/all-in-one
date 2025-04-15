import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterComponent } from './concepts/ngrx/counter-component/counter.component';
import { TodoComponent } from './concepts/ngrx/todo-component/todo.component';
import { counterReducer } from './concepts/ngrx/state/counter/counter.reducer';
import { todoReducer } from './concepts/ngrx/state/todo/todo.reducer';
import { TodoEffects } from './concepts/ngrx/state/todo/todo.effects';

@NgModule({
  declarations: [AppComponent, CounterComponent, TodoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      counter: counterReducer,
      todo: todoReducer,
    }),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
