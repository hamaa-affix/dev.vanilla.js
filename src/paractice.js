//tenplate
const myProfile1 = {
  name: "yuta",
  age: 31
};
const message = `私は${myProfile1.name}です。年齢は${myProfile1.age}です`;
console.log(message);

//分割代入
const myProfile = {
  name: "mami",
  age: "31"
};
//オブジェクトから指定のプロパティを抜き出してcodeの冗長化を防ぐ
const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}です`;
console.log(message2);

//arrow
function func1(string) {
  return string;
}

const func2 = function (string) {
  return string;
};

const func3 = (string) => {
  return string;
};

const func4 = (string) => string;

console.log(func4(" hamada kotoha"));

//default値
const sayHello = (name = "gest") => console.log(`こんにちは${name}さん`);
sayHello();

//スプレット構文
// 配列の展開
const arr1 = [1, 2];
// ...で変数名を指定すると配列の中身を１つずつ出力してくれる
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
//48行目と50行目は同じ意味
sumFunc(...arr1);

//まとめる
const arr2 = [1, 2, 3, 4];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

//配列のコピーや結合
const arr4 = [10, 20];
const arr5 = [30, 40];
//配列のコピー
const arr6 = [...arr4];
console.log(arr6);
//配列の結合
const arr7 = [...arr4, ...arr5];
console.log(arr7);

//mapやfilterを使用して配列処理
const nameArr = ["田中", "山田", "太郎"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index])
// }
//mapを使った例
//mapの第一引数は変数(配列)のvalue値が入ってくる
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);
//これをfor文みたいに置きかてみると
nameArr.map((name) => {
  console.log(name);
});

nameArr.map((name, index) => console.log(`${index}番目は${name}です`));

//fileter
//ある条件に一致したものだけを返却して新しい配列を作成する
const number = [1, 2, 3, 4, 5];
const newNumber = number.filter((num) => {
  // number配列の要素を受け取り、returnの条件にあった要素を新たな配列として生成
  return num % 2 === 1;
});
console.log(newNumber);

//参考演算子
