export type DisplayValues =  {
    id: number;
    label: string;
    componentValue: () => JSX.Element;
}[]