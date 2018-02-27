import {Injectable} from '@angular/core';
import {DataManipulation} from '../../dataManipulation/data-manipulation';
import * as _ from 'lodash';

@Injectable()
export class Data {
    private dataAllItems = {};

    constructor(
        private data,
        private dataManipulation: DataManipulation
    ) {
        this.rebuildingData(this.data);
    }

    rebuildingData(data) {
        const keysObject = Object.keys(data);
        let result = {};

        for (let i = 0; i < keysObject.length; i++) {
            const arrayPath = this.dataManipulation.explodePath(keysObject[i]);

            result = _.merge(result, this.createNewObject(arrayPath, data[keysObject[i]]));
        }

        return this.dataAllItems = result;
    }

    createNewObject(arrayPath, value) {
        const result = {};
        let iterator = result;

        for (let i = 0; i < arrayPath.length; i++) {
            if (i === arrayPath.length - 1) {
                iterator[arrayPath[i]] = value;
            } else {
                iterator[arrayPath[i]] = {};

                iterator = iterator[arrayPath[i]];
            }
        }

        return result;
    }

    get () {
        return this.dataAllItems;
    }
}
