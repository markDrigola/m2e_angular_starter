import {Metadata} from './metadata';
import {ArrayWrapperFactory} from '../arrayWrapper/array-wrapper.factory';
import {MetadataFactory} from './metadata.factory';


export function functionFactoryMetadata (data) {
    return (metadataFactory: MetadataFactory, arrayWrapperFactory: ArrayWrapperFactory) => {
        return metadataFactory.create(data, arrayWrapperFactory);
    };
}
