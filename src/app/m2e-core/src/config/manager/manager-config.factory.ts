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
        this.dataConfig = this.mergeConfigs();
    }

    mergeConfigs() {
        let result = {};

        for (let i = 0; i < this.allDataConfig.length; i++) {
            result = this.dataManipulation.mergeData(result, this.allDataConfig[i].get());
        }

        return result;
    }

    create() {
        return new Manager(
            this.arrayWrapperFactory.create(this.dataConfig)
        );
    }
}
