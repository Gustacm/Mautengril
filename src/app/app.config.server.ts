import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { CarritoService } from './carrito.service'; 

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    CarritoService, 
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
