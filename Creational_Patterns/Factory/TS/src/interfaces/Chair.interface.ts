import { Demention } from '../types';

export interface IChair {
    height: number;
    width: number;
    depth: number;
    getDimensions(): Demention;
}
