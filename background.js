chrome.action.onClicked.addListener((tab) => {
    // 拡張機能のアイコンがクリックされたときに実行される関数。
    chrome.scripting.executeScript({
      target: { tabId: tab.id }, // 現在のタブをターゲットに指定。
      files: ['content.js'] // content.jsを実行するよう指示。
    });
  });