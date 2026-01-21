export function setupTabs() {
  // HTML要素の取得
  const homeLink = document.querySelector('[data-tab="home"]'); // ホームリンク
  const converterTab = document.querySelector('[data-tab="converter"]'); // 単位変換タブ
  const homeSection = document.getElementById('home'); // ホームセクション
  const converterSection = document.getElementById('converter'); // 単位変換セクション

  // イベント処理
  // ホームリンクがクリックされたとき
  homeLink.addEventListener('click', () => {
    converterSection.classList.add('hidden'); // 単位セクションに hidden クラスを追加
    homeSection.classList.remove('hidden'); // ホームセクションから hidden クラスを削除
  });

  // 単位変換タブがクリックされたとき
  converterTab.addEventListener('click', () => {
    homeSection.classList.add('hidden'); // ホームセクションに hidden クラスを追加
    converterSection.classList.remove('hidden'); // 単位セクションから hidden クラスを削除
  });
}

document.addEventListener('DOMContentLoaded', setupTabs);

export default setupTabs;