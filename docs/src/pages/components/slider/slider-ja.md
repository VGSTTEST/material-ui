---
title: React Slider component
components: Slider, SliderUnstyled
githubLabel: 'component: Slider'
materialDesign: https://material.io/components/sliders
waiAria: 'https://www.w3.org/TR/wai-aria-practices/#slider'
---

# Slider

<p class="description">スライダーを使用すると、ユーザーは値の範囲から選択できます。</p>

[Sliders](https://material.io/design/components/sliders.html) reflect a range of values along a bar, from which users may select a single value. ボリューム、輝度などの設定を調整したり、画像フィルターを適用したりするのに理想的です。

- 📦 [22 kB gzipped](/size-snapshot) (but only +8 kB when used together with other Material-UI components).

{{"component": "modules/components/ComponentLinkHeader.js"}}

## 連続スライダー

連続スライダーにより、ユーザーは主観的な範囲に沿って値を選択できます。

{{"demo": "pages/components/slider/ContinuousSlider.js"}}

## 個別のスライダー

個別のスライダーは、値インジケーターを参照することで特定の値に調整できます。 デモ順：

`marks={true}`で各ステップのマークを生成できます。

{{"demo": "pages/components/slider/DiscreteSlider.js"}}

### Small steps

デフォルトのステップ増分を変更できます。

{{"demo": "pages/components/slider/DiscreteSliderSteps.js"}}

### Custom marks

`marks`プロップに豊富な配列を提供することにより、カスタムマークを作成できます。

{{"demo": "pages/components/slider/DiscreteSliderMarks.js"}}

### Restricted values

選択可能な値を、 `marks` prop with `step ={null}`で、提供される値に制限できます。

{{"demo": "pages/components/slider/DiscreteSliderValues.js"}}

### Label always visible

`valueLabelDisplay = "on"`すると、常にサムラベルを強制的に表示できます。

{{"demo": "pages/components/slider/DiscreteSliderLabel.js"}}

## Range slider

The slider can be used to set the start and end of a range by supplying an array of values to the `value` prop.

{{"demo": "pages/components/slider/RangeSlider.js"}}

## Slider with input field

In this example an input allows a discrete value to be set.

{{"demo": "pages/components/slider/InputSlider.js"}}

## Customized sliders

コンポーネントのカスタマイズの例を次に示します。 詳細については、 [オーバーライドドキュメントページ](/customization/how-to-customize/)ご覧ください。

{{"demo": "pages/components/slider/CustomizedSlider.js"}}

## 垂直スライダー

{{"demo": "pages/components/slider/VerticalSlider.js"}}

**WARNING**: Chrome, Safari and newer Edge versions i.e. any browser based on WebKit exposes `<Slider orientation="vertical" />` as horizontal ([chromium issue #1158217](https://bugs.chromium.org/p/chromium/issues/detail?id=1158217)). By applying `-webkit-appearance: slider-vertical;` the slider is exposed as vertical.

However, by applying `-webkit-appearance: slider-vertical;` keyboard navigation for horizontal keys (<kbd class="key">Arrow Left</kbd>, <kbd class="key">Arrow Right</kbd>) is reversed ([chromium issue #1162640](https://bugs.chromium.org/p/chromium/issues/detail?id=1162640)). Usually, up and right should increase and left and down should decrease the value. If you apply `-webkit-appearance` you could prevent keyboard navigation for horizontal arrow keys for a truly vertical slider. This might be less confusing to users compared to a change in direction.

{{"demo": "pages/components/slider/VerticalAccessibleSlider.js"}}

## Track

The track shows the range available for user selection.

### Removed track

The track can be turned off with `track={false}`.

{{"demo": "pages/components/slider/TrackFalseSlider.js"}}

### Inverted track

The track can be inverted with `track="inverted"`.

{{"demo": "pages/components/slider/TrackInvertedSlider.js"}}

## Non-linear scale

You can use the `scale` prop to represent the `value` on a different scale.

In the following demo, the value _x_ represents the value _2^x_. Increasing _x_ by one increases the represented value by factor _2_.

{{"demo": "pages/components/slider/NonLinearSlider.js"}}

## Unstyled slider

{{"demo": "pages/components/slider/UnstyledSlider.js"}}

## アクセシビリティ

(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#slider)

コンポーネントは、アクセス可能にするために必要なほとんどの作業を処理します。 ただし、次の点を確認する必要があります。 ただし、次の点を確認する必要があります。 ただし、次の点を確認する必要があります。

- Each thumb has a user-friendly label (`aria-label`, `aria-labelledby` or `getAriaLabel` prop).
- Each thumb has a user-friendly text for its current value. 値がラベルのセマンティクスと一致する場合、これは必要ありません。 この名前は、 `getAriaValueText`または`aria-valuetext`プロパティを使用して変更できます。
