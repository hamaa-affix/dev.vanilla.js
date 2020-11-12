import "./styles.css";

const onClickAdd = () => {
  //textBoxの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //createDOM
  createIncompleteList(inputText);
};

//未完了のリストに追加する関数
const createIncompleteList = (text) => {
  //dom操作
  // div tagの生成
  const div = document.createElement("div"); //createElementでdom生成する
  div.className = "list-row";

  //li tagの生成
  const li = document.createElement("li");
  //innerTerxtでliにvalue値を挿入する
  li.innerText = text;

  //完了ボタンの作成
  const completeButtoun = document.createElement("button");
  completeButtoun.innerText = "完了";
  completeButtoun.addEventListener("click", () => {
    defaultFormIncomplete(completeButtoun.parentNode);
    //親要素〜子取得
    const addTarget = completeButtoun.parentNode;
    //liの中身を取得する
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;
    //liタグの生成
    const li = document.createElement("li");
    li.innerText = text;
    //buttonの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      //textの取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
    console.log(addTarget);
  });
  //完了ボタンの作成
  const deleteButtoun = document.createElement("button");
  deleteButtoun.innerText = "削除";
  deleteButtoun.addEventListener("click", () => {
    // 親タグをs取得
    const deleteTarget = deleteButtoun.parentNode; //削除したい親要素ごと取得
    //さらに親要素をアクセスして、removeChildで削除していく
    defaultFormIncomplete(deleteTarget);
    console.log(deleteTarget);
  });

  //div tagの配下に各要素を差し込む
  div.appendChild(li);
  div.appendChild(completeButtoun);
  div.appendChild(deleteButtoun);

  //未完了のリストに追加していく。
  document.getElementById("incomplete-list").appendChild(div);
};

//未完成リストからしていの要素を削除
const defaultFormIncomplete = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
