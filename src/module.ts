import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app/app.component';

import {CORE_METADATA_TOKEN} from './app/m2e-core/src/metadata/token';
import {functionFactoryMetadata} from './app/m2e-core/src/metadata/function-factory-metadata';
import {CORE_METADATA} from './app/m2e-core/src/metadata';
import {BASE_METADATA_TOKEN} from './app/m2e-base/src/metadata/token';
import {BASE_METADATA} from './app/m2e-base/src/metadata/metadata';
import {PROJECT_METADATA_TOKEN} from '../metadata/token';
import {PROJECT_METADATA} from '../metadata';
import {ArrayWrapperFactory} from './app/m2e-core/src/arrayWrapper/array-wrapper.factory';
import {MetadataFactory} from './app/m2e-core/src/metadata/metadata.factory';

import {functionFactoryDataConfig} from './app/m2e-core/src/config/data/function-factory-data-config';
import {DATA as CoreDataRegistration} from './app/m2e-core/src/config/registration/registration';
import {DATA as BaseDataRegistration} from './app/m2e-base/src/config/registration';
import {DATA as ProjectDataRegistration} from './app/m2e-project/src/config/registration';
import {ManagerConfigFactory} from './app/m2e-core/src/config/manager/manager-config.factory';
import {REGISTRATION_CONFIG_DATA_TOKEN} from './app/m2e-core/src/config/data/data-token';
import {DataManipulation} from './app/m2e-core/src/dataManipulation/data-manipulation';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        DataManipulation,
        ArrayWrapperFactory,
        MetadataFactory,
        {
            provide: CORE_METADATA_TOKEN,
            useFactory: functionFactoryMetadata(CORE_METADATA),
            deps: [MetadataFactory, ArrayWrapperFactory]
        },
        {
            provide: BASE_METADATA_TOKEN,
            useFactory: functionFactoryMetadata(BASE_METADATA),
            deps: [MetadataFactory, ArrayWrapperFactory]
        },
        {
            provide: PROJECT_METADATA_TOKEN,
            useFactory: functionFactoryMetadata(PROJECT_METADATA),
            deps: [MetadataFactory, ArrayWrapperFactory]
        },

        {
            provide: REGISTRATION_CONFIG_DATA_TOKEN, useFactory: functionFactoryDataConfig(CoreDataRegistration), deps: [DataManipulation], multi: true
        },
        {
            provide: REGISTRATION_CONFIG_DATA_TOKEN, useFactory: functionFactoryDataConfig(BaseDataRegistration), deps: [DataManipulation], multi: true
        },
        {
            provide: REGISTRATION_CONFIG_DATA_TOKEN, useFactory: functionFactoryDataConfig(ProjectDataRegistration), deps: [DataManipulation], multi: true
        },
        {
            provide: ManagerConfigFactory, useClass: ManagerConfigFactory
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
