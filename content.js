(async () => {
    // 非同期関数を即時実行。
    const response = await fetch('https://your-notebooklm-api-endpoint', {
      method: 'POST', // HTTP POSTメソッドを使用。
      headers: {
        'Content-Type': 'application/json', // リクエストの内容がJSON形式であることを指定。
        'Authorization': 'Bearer YOUR_API_TOKEN' // 認証トークンをヘッダーに含める。
      },
      body: JSON.stringify({ url: window.location.href }) // 現在のページのURLをリクエストボディに含める。
    });
    
    const result = await response.json(); // レスポンスをJSON形式でパース。
    if (result.success) {
      alert('Successfully added to NotebookLM'); // 成功メッセージを表示。
    } else {
      alert('Failed to add to NotebookLM'); // 失敗メッセージを表示。
    }
  })();