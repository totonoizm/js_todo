import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの入力値を取得
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = ""; //入力欄に空欄を渡す

  // div生成

  const div = document.createElement("div");
  div.className = "input-row";
  console.log(div);

  // li生成
  const li = document.createElement("li");
  li.innerText = inputText; //constしたインプットテキストを取得してliへ入れる
  div.appendChild(li); //divの子要素に各要素を設定
  console.log(div);

  // 未完了リストへ追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
