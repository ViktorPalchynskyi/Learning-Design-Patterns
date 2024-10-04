import ChairFactory from './creators/chair-factory';

const c = ChairFactory.getChair('b');
console.log(c.getDimensions());
