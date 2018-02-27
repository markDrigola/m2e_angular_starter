import * as _ from 'lodash';
import {Injectable} from '@angular/core';
import {Metadata} from './metadata';

@Injectable()
export class MetadataFactory {
    public create(data: object = {}, arrayWrapperFactory) {

        if (!_.isObject(data)) {
            throw new Error('Data is not valid.');
        }

        return new Metadata(data, arrayWrapperFactory);
    }
}
