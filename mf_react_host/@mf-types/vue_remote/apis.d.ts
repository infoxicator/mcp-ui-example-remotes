
    export type RemoteKeys = 'vue_remote';
    type PackageType<T> = T extends 'vue_remote' ? typeof import('vue_remote') :any;