/**
 *  const, letについて
 */

// var val1 = "var変数"
// console.log(val1)

// // var変数は上書き可能
// val1 = "var変数を上書き"
// console.log(val1)

// var変数は再宣言可能
// var val1 = "var変数を再宣言"
// console.log(val1)

// //テンプレート文字列
// const name = "kawai";
// const age = 23;
// const message = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

//アロー関数
//従来

// function func1(str){
//   console.log(str)
// }

// func1("akihiro")

//アロー関数
// const func2 = (str) =>  str;

// console.log(func2("kawai"));

// const func3 = (x,y) => {
//   return x+y;
// }

// console.log(func3())

//分割代入

// const myProfile = {
//   name: "kawai",
//   age: 23
// };

// // const message = `名前は${myProfile.name}です。
// // 年齢は${myProfile.age}です。`;

// // console.log(message)

// const { name, age } = myProfile;

// const message = `名前は${name}です。年齢は${age}です。`;

// console.log(message);
