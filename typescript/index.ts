abstract class Animal {
  public name: string;

  constructor(parameters) {
  }

  // 抽象方法不需要实现
  public abstract sayHi();
}

// 函数定义
interface Counter {
  (): void,
  count?: number
}

const getCount: Counter = () =>  {
  getCount.count = 1
}
// getCount.count = 1

const getCount2: (() => void) & { count?: number } = () => {
  getCount2.count = 12
}

interface Person extends Animal {
  age: number
}

class PersonImp implements Person {
  age = 12
  name: 'xx'
  sayHi() {
    console.log('hi', this.name, this.age)
  }
}

const getProperty = <T extends keyof Person>(prop: T) => {
  return new PersonImp()[prop]
}

getProperty('name')

// never
// 不存在的值
// 可以是任何集合的子集
type testNever = (string | number)[] & { length: number }
const arr: testNever = []

// 并集
// Pick 是ts的一个语法糖
// 配合never使用
type OmitNever<T> = Pick<T, {[P in keyof T]: T[P] extends string ? P : never}[keyof T]>;

type a = {
    a: string,
    b: never, // never 是任何集合的子集
    c: number,
}
type a1 = OmitNever<a>;

// 交集
// Extract<T, U>
// Exclude 的反操作，取 T，U 两者的交集属性
// type Extract<T, U> = T extends U ? T : never;
type ExtrTest = Extract<'a' | 'b' | 'c' | 'd', 'b' | 'c' | 'e'>

// 推断类型 infer
type foo = string | number
type turnArray<T> = T extends infer I ? I[] : never
type fooE = turnArray<foo>

// diff
type Diff<T extends string, U extends string> = ({ [P in T]: P } & { [P in U]: never })[T];
type A = Diff<"a" | "b" | "c", "a">

// Record
// 标记对象的属性（key）或者属性值（value）的类型
// 设置key和value的类型
const userMap: Record<number, Person> = {
  1: {
    age: 12,
    name: 'x',
    sayHi() {},
  }
}
// 设置value的类型
const info: Record<'name' | 'id', string> = {
  name: '张三',
  id: '1',
}

// Exclude
// 移除特定类型中的某个（些）属性
// type Exclude<T, U> = T extends U ? never : T;
type ExcludeTest = Exclude<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'>

// NonNullable

// Partial
// 将类型 T 的所有属性标记为可选属性
// type Partial<T> = {
// 	[P in keyof T]?: T[P];
// };

// Required
// Required 将类型 T 的所有属性标记为必选属性
// type import storemodel from '@/store';<T> = {
// 	[P in keyof T]-?: T[P];
// };

// Readonly
// 将所有属性标记为 readonly, 即不能修改
// type Readonly<T> = {
// 	readonly [P in keyof T]: T[P];
// };

// ReturnType
// 获取函数类型 T 的返回类型
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
