import * as _ from 'lodash';
import {Injectable} from '@angular/core';
import {ArrayWrapper} from './array-wrapper';
import {DataManipulation} from '../dataManipulation/data-manipulation';

@Injectable()
export class ArrayWrapperFactory {
    constructor(
        private dataManipulation: DataManipulation
    ) { }
    public create(data = {}) {

        if (!_.isObject(data)) {
            throw new Error('Data is not valid.');
        }

        return new ArrayWrapper(data, this.dataManipulation);
    }
}
