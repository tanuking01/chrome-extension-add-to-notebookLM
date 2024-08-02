document.getElementById('add-button').addEventListener('click', () => {
    // ボタンがクリックされたときのイベントリスナーを設定。
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      // 現在のウィンドウ内のアクティブタブを取得。
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id }, // アクティブタブをターゲットに指定。
        files: ['content.js'] // content.jsを実行するよう指示。
      });
    });
  });