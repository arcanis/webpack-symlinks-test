import {SomeClass as A} from './SomeClass';
import {SomeClass as B} from 'test/SomeClass';

let a: A = new A();
a = new B();
