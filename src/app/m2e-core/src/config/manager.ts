import {Injectable} from '@angular/core';
import {ArrayWrapper} from '../arrayWrapper/array-wrapper';


@Injectable()
export class Manager {
    constructor(
        private arrayWrapper: ArrayWrapper
    ) {

    }

    get (path: string) {
        return this.arrayWrapper.get(path);
    }
}
