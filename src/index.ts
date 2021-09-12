interface User {
  name: string;
  age: number;
}
const user: User = {
  name: '张三',
  age: 14,
};

class UserAccount {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const useraccount: User = new UserAccount('里斯', 18);
console.log(useraccount.name + ': ' + useraccount.age);
//联合型
type myboolean = true | false;
function getLength(obj: string | string[]) {
  return obj.length;
}
//泛型
type stringArray = Array<string>;
type numberArray = Array<number>;
type objectArray = Array<{name: string}>;

let mystr = '';
mystr = 'ooo';
// 类
class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }
}
interface Person {
  firstName: string;
  lastName: string;
}
function greeter(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
const user2 = new Student('Jane', 'M.', 'User');
// document.body.textContent = '999';
console.log(greeter(user2));

// any
const objectAny: any = {};
objectAny.name = 'lisi';
// boolean值
const isDone = false;
// 数组类型
const list1: number[] = [1, 2, 3];
const list2: Array<number> = [4, 5, 6];
// 元组 tuple
const tuple1: [number, string] = [4, '5ongg'];
console.log(tuple1[1].substr(0, 2));
// 枚举
enum Color {
  red,
  green,
  blue,
}
const c: Color = Color.red;
console.log(c, 'color: red');
const blues: string = Color[2];
console.log(blues, 'blue');
// Any
let notSure: any = 4;
notSure.toFixed();
notSure = 'hello world';
notSure = true;
const list3: any[] = [5, false, 'srsr'];
list3[1] = 'true';
list3[3] = 'false';
console.log(list3);
// void
function warnUser(): void {
  console.log('return void; void只能赋值null和undefined');
}
warnUser();
// null 和 undefined
const n = null;
const und = undefined;
// never 表示那些永远不存在的值的类型
function error(message: string): never {
  throw new Error(message);
}
error('出错了');
// object
