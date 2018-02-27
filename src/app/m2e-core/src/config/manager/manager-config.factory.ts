import {Inject, Injectable, Optional} from '@angular/core';
import {Manager} from '../manager';

import {Data} from '../data/data';

import {ArrayWrapperFactory} from '../../arrayWrapper/array-wrapper.factory';
import {REGISTRATION_CONFIG_DATA_TOKEN} from '../data/data-token';
import {DataManipulation} from '../../dataManipulation/data-manipulation';

@Injectable()
export class ManagerConfigFactory {
    private dataConfig;

    constructor(
        private arrayWrapperFactory: ArrayWrapperFactory,
        private dataManipulation: DataManipulation,
        @Optional() @Inject(REGISTRATION_CONFIG_DATA_TOKEN) private allDataConfig: Data[]
    ) {
        this.mergeConfigs();
    }

    mergeConfigs() {
        for (let i = 0; i < this.allDataConfig.length; i++) {
            this.dataConfig = this.dataManipulation.mergeData(this.dataConfig, this.allDataConfig[i].get());
        }
    }

    create() {
        return new Manager(
            this.arrayWrapperFactory.create(this.dataConfig)
        );
    }
}
