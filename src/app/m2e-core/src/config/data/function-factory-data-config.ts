import {Data} from './data';
import {DataManipulation} from '../../dataManipulation/data-manipulation';

export function functionFactoryDataConfig (data) {
    return (dataManipulation: DataManipulation) => {
        return new Data(data, dataManipulation);
    };
}
