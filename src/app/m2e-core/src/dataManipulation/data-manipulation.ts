import {Injectable} from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class DataManipulation {
    explodePath(path) {
        const result = [];

        for (const chunk of this.trimChars(path, '/').split('/')) {
            if (chunk === '' || chunk.trim() !== chunk) {

                throw new Error(path);
            }

            result.push(chunk);
        }

        return result;
    }

    trimChars(str, char) {
        if (str[0] === char) {
            str = str.substring(1);
        }

        if (str[str.length - 1] === char) {
            str = str.substring(0, str.length - 1);
        }

        return str;
    }

    mergeData(target = {}, obj) {
        return _.merge(target, obj);
    }
}
