
    export type RemoteKeys = 'mfe1';
    type PackageType<T> = T extends 'mfe1' ? typeof import('mfe1') :any;