export type FilterTypes = {
    result: ResultFilterTypes | null;
    loading: boolean;
    error: string;
}

export type ResultFilterTypes = {
    shema: {
        attributes: {
            origin: {
                enum: any;
            }
        }
    }
}