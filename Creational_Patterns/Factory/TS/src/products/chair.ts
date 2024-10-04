import { IChair } from '../interfaces';
import { Demention } from '../types';

export default class Chair implements IChair {
    height = 0;
    width = 0;
    depth = 0;

    getDimensions(): Demention {
        return {
            width: this.width,
            depth: this.depth,
            hight: this.height,
        };
    }
}
