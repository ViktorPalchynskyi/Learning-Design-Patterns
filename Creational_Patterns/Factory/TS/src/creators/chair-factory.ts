import { IChair } from '../interfaces';
import BigChair from '../products/big-chair';
import MediumChair from '../products/medium-chair';
import SmallChair from '../products/small-chair';

export default class ChairFactory {
    static getChair(size: string): IChair {
        if (size == 'big') {
            return new BigChair();
        } else if (size == 'medium') {
            return new MediumChair();
        } else {
            return new SmallChair();
        }
    }
}
