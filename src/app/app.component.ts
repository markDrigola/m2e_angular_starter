import {Component, Inject, OnInit} from '@angular/core';
import {CORE_METADATA_TOKEN} from './m2e-core/src/metadata/token';
import {Metadata} from './m2e-core/src/metadata/metadata';
import {BASE_METADATA_TOKEN} from './m2e-base/src/metadata/token';
import {PROJECT_METADATA_TOKEN} from '../../metadata/token';
import {ArrayWrapperFactory} from './m2e-core/src/arrayWrapper/array-wrapper.factory';
import {Data} from './m2e-core/src/config/data/data';
import {ManagerConfigFactory} from './m2e-core/src/config/manager/manager-config.factory';
import {REGISTRATION_CONFIG_DATA_TOKEN} from './m2e-core/src/config/data/data-token';
import {Manager} from './m2e-core/src/config/manager';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    managerConfig: Manager;
    constructor(
        @Inject(CORE_METADATA_TOKEN) private coreMetadata: Metadata,
        @Inject(PROJECT_METADATA_TOKEN) private projectMetadata: Metadata,
        @Inject(BASE_METADATA_TOKEN) private baseMetadata: Metadata,
        private test: ArrayWrapperFactory,
        @Inject(REGISTRATION_CONFIG_DATA_TOKEN) private coreDataConfig: Data,
        private managerConfigFactory: ManagerConfigFactory
    ) { }

    ngOnInit(): void {
        console.log(this.coreMetadata.get('/name/'));
        console.log(this.baseMetadata);
        console.log(this.projectMetadata);
        console.log(this.test);
        console.log('coreData', this.coreDataConfig);
        console.log('managerFactory', );

        this.managerConfig = this.managerConfigFactory.create();

        console.log(this.managerConfig.get('/system/'));
    }
}
