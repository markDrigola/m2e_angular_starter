import * as _ from 'lodash';
import {Injectable} from '@angular/core';
import {DataManipulation} from '../dataManipulation/data-manipulation';

@Injectable()
export class ArrayWrapper {

    constructor(
        private data = {},
        private dataManipulation: DataManipulation
        ) { }

    public get(path: string = null) {

        if (path === null) {

            return this.data;
        }

        this.validatePath(path);

        let result = this.data;

        for (const node of this.dataManipulation.explodePath(path)) {

            if (!_.isObject(result) || !_.has(result, node)) {
                throw new Error(path);
            }

            result = result[node];
        }

        return result;
    }

    private validatePath(path) {

        if (typeof path === 'string' && path.length > 2) {
            if (path[0] === '/' && path.substr(-1) === '/') {

                return true;
            }
        }

        throw new Error(path);
    }
}
