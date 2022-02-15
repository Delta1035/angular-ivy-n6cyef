interface Dictionary<T = any> {
  [key: string]: T;
}

type StrDict = Dictionary<string>;
type StrDictMember = StrDict[number]; // string

type Method = {
  func: () => void;
};

function foo(): () => void {
  console.log('test void');
  return;
}

type Props = {
  getValue: () => void; // 这里的void表示逻辑上不关注具体的返回值类型，number、string、undefined等都可以
};
// function Child({ getValue }: Props) => {
//   return getValue()
// }

// type SomeConstructor = {
//   new (s: string): SomeObject;
// };
// function fn(ctor: SomeConstructor) {
//   return new ctor("hello");
// }
