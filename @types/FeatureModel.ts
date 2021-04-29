export type FeatureValue =
    | null
    | number
    | "Customizable"
    | "Comming soon"
    | "check";

export interface FeatureModel {
    name: string;
    label?: string;
    compare: FeatureValue[];
}
