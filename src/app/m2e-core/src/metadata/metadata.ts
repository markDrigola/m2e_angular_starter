import {Injectable, Optional} from '@angular/core';
import {ArrayWrapperFactory} from '../arrayWrapper/array-wrapper.factory';
import {ArrayWrapper} from '../arrayWrapper/array-wrapper';


@Injectable()
export class Metadata {
    arrayWrapperUnit: ArrayWrapper;

    constructor(
        private data,
        private arrayWrapperFactory: ArrayWrapperFactory
    ) {
        this.arrayWrapperUnit = this.arrayWrapperFactory.create(this.data);
    }

    public get(path: string) {
        return this.arrayWrapperUnit.get(path);
    }
}
