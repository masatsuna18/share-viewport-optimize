## 概要

画面幅の狭い端末で、レイアウトの崩れを防ぐためのパーツです。  
画面幅が指定した最小幅以下のときだけ、ページを最小幅で表示し、端末の画面幅に合わせて縮小します。  
デザインやCSSは最小幅以上の画面幅だけを想定すればよくなります。

最小幅は`js/viewport-optimize.js`の`MIN_WIDTH`で指定します（初期値：360px）。

## 仕組み

ページの表示幅は、`<head>`内の`<meta name="viewport">`で決まります。

```html
<!-- 端末の画面幅に合わせて表示する（通常の指定） -->
<meta name="viewport" content="width=device-width,initial-scale=1">

<!-- 最小幅（例：360px）で表示し、端末の画面幅に合わせて縮小する -->
<meta name="viewport" content="width=360">
```

`js/viewport-optimize.js`は、ブラウザの幅が最小幅以下のときは`width=最小幅`、それより広いときは通常の指定に`content`を書き換えます。

最小幅より広い端末では通常の指定のままのため、表示に影響はありません。

## ダウンロード

GitHubの「Code」→「Download ZIP」から、必要なファイル一式をまとめてダウンロードできます。

## 導入手順（WordPress）

### 1. ファイルのコピー

`js/`を有効化中のテーマ（子テーマを使う場合は子テーマ）の直下にコピーします。

### 2. JSの読み込み

本リポジトリの`functions.php`の内容を、テーマの`functions.php`に追記します。

```php
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_script('viewport-optimize', get_stylesheet_directory_uri() . '/js/viewport-optimize.js', array(), '1.0.0', true);
});
```

### 3. 動作確認

Chromeのデベロッパーツールで、画面幅を最小幅より狭くして確認します。

Elementsパネルで`<meta name="viewport">`の`content`が`width=最小幅`になり、ページが縮小表示されていることを確認する

`<meta name="viewport">`が見つからない場合は、テーマの`header.php`に追加してください（JSは既存のタグを書き換えるだけで、新しく追加はしません）。

## 設定の変更

`js/viewport-optimize.js`冒頭の定数で変更します。

```js
const MIN_WIDTH = 360;
const DEFAULT_CONTENT = 'width=device-width,initial-scale=1';
```


| 定数                | 内容                                   |
| ----------------- | ------------------------------------ |
| `MIN_WIDTH`       | 最小幅（px）。ブラウザの幅がこの値以下のとき、この幅で表示する     |
| `DEFAULT_CONTENT` | ブラウザの幅が`MIN_WIDTH`より広いときの`content`の値 |


`MIN_WIDTH`は、デザインやCSSで想定する最も狭い画面幅に合わせます。値を大きくするほど縮小表示される端末が増え、文字も小さく表示されます。

```js
// SPデザインの基準幅が375pxの場合
const MIN_WIDTH = 375;
```