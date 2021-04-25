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

  //button生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("kanryou");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div)を削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //divの子要素に各要素を設定

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストへ追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
