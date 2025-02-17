/**
 * 課題1: id値が 'title' の要素を取得する
 *   - getElementByIdを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const title = document.getElementById("title");
console.log(title);



/**
 * 課題2: id値が 'item-container' の要素を取得する
 *   - querySelectorを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const itemContainer = document.querySelector("#item-container");
console.log(itemContainer);



/**
 * 課題3: li要素を全て取得する
 *   - console.logで取得したDOMの中身を確認する
 */
const liContents = document.getElementsByTagName("li");
console.log(liContents);

/**
 * 課題4: class値が 'item' の要素を全て取得する
 *   - getElementsByClassNameを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const itemClass = document.getElementsByClassName("item");
console.log(itemClass);



/**
 * 課題5: class値が 'item' の要素を全て取得する
 *   - querySelectorAllを使う
 *   - console.logで取得したDOMの中身を確認する
 */

const itemClass2 = document.querySelectorAll(".item");
console.log(itemClass2);