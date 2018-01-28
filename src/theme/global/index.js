import { css } from 'react-emotion'
import { injectGlobal } from 'emotion'

const reset = css`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
      background-color: #F5F5F5;
      overflow: hidden;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    
    ::-webkit-scrollbar-track
    {
        background-color: #e2e2e2;
    }

    ::-webkit-scrollbar
    {
        width: 1px;
        background-color: #F5F5F5;
    }

    ::-webkit-scrollbar-thumb
    {
        background-color: #838383;
        border: 1px solid #555555;
    }
    
    
    /* This stylesheet generated by Transfonter (https://transfonter.org) on January 26, 2018 9:25 PM */

    @font-face {
        font-family: 'FS Millbank Negative';
        src: local('FS Millbank Negative Italic'), local('FSMillbankNegative-Italic'),
            url('FSMillbankNegative-Italic.woff2') format('woff2'),
            url('FSMillbankNegative-Italic.woff') format('woff');
        font-weight: normal;
        font-style: italic;
    }
    
    @font-face {
        font-family: 'FS Millbank Negative';
        src: local('FS Millbank Negative Bold Italic'), local('FSMillbankNegative-BoldItalic'),
            url('FSMillbankNegative-BoldItalic.woff2') format('woff2'),
            url('FSMillbankNegative-BoldItalic.woff') format('woff');
        font-weight: bold;
        font-style: italic;
    }
    
    @font-face {
        font-family: 'FS Millbank Negative';
        src: local('FS Millbank Negative Heavy'), local('FSMillbankNegative-Heavy'),
            url('FSMillbankNegative-Heavy.woff2') format('woff2'),
            url('FSMillbankNegative-Heavy.woff') format('woff');
        font-weight: 900;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'FS Millbank Negative';
        src: local('FS Millbank Negative Regular'), local('FSMillbankNegative-Regular'),
            url('FSMillbankNegative-Regular.woff2') format('woff2'),
            url('FSMillbankNegative-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'FS Millbank Negative';
        src: local('FS Millbank Negative Heavy Italic'), local('FSMillbankNegative-HeavyItalic'),
            url('FSMillbankNegative-HeavyItalic.woff2') format('woff2'),
            url('FSMillbankNegative-HeavyItalic.woff') format('woff');
        font-weight: 900;
        font-style: italic;
    }
    
    @font-face {
        font-family: 'FS Millbank Negative';
        src: local('FS Millbank Negative Light'), local('FSMillbankNegative-Light'),
            url('FSMillbankNegative-Light.woff2') format('woff2'),
            url('FSMillbankNegative-Light.woff') format('woff');
        font-weight: 300;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'FS Millbank Negative';
        src: local('FS Millbank Negative Light Italic'), local('FSMillbankNegative-LightItalic'),
            url('FSMillbankNegative-LightItalic.woff2') format('woff2'),
            url('FSMillbankNegative-LightItalic.woff') format('woff');
        font-weight: 300;
        font-style: italic;
    }
    
    @font-face {
        font-family: 'FS Millbank Negative';
        src: local('FS Millbank Negative Bold'), local('FSMillbankNegative-Bold'),
            url('FSMillbankNegative-Bold.woff2') format('woff2'),
            url('FSMillbankNegative-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
    font-family: 'Operator Mono';
    src: local('Operator Mono Bold'), local('OperatorMono-Bold'),
        url('OperatorMono-Bold.woff2') format('woff2'),
        url('OperatorMono-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    }
    
    @font-face {
        font-family: 'Operator Mono';
        src: local('Operator Mono Extra Light Italic'), local('OperatorMono-XLightItalic'),
            url('OperatorMono-XLightItalic.woff2') format('woff2'),
            url('OperatorMono-XLightItalic.woff') format('woff');
        font-weight: 200;
        font-style: italic;
    }
    
    @font-face {
        font-family: 'Operator Mono';
        src: local('Operator Mono Bold'), local('OperatorMono-Bold'),
            url('OperatorMono-Bold.woff2') format('woff2'),
            url('OperatorMono-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Operator Mono';
        src: local('Operator Mono Light'), local('OperatorMono-Light'),
            url('OperatorMono-Light.woff2') format('woff2'),
            url('OperatorMono-Light.woff') format('woff');
        font-weight: 300;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Operator Mono';
        src: local('Operator Mono Book'), local('OperatorMono-Book'),
            url('OperatorMono-Book.woff2') format('woff2'),
            url('OperatorMono-Book.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Operator Mono';
        src: local('Operator Mono Book Italic'), local('OperatorMono-BookItalic'),
            url('OperatorMono-BookItalic.woff2') format('woff2'),
            url('OperatorMono-BookItalic.woff') format('woff');
        font-weight: normal;
        font-style: italic;
    }
    
    @font-face {
        font-family: 'Operator Mono';
        src: local('Operator Mono Book Italic'), local('OperatorMono-BookItalic'),
            url('OperatorMono-BookItalic.woff2') format('woff2'),
            url('OperatorMono-BookItalic.woff') format('woff');
        font-weight: normal;
        font-style: italic;
    }
    
    @font-face {
        font-family: 'Operator Mono';
        src: local('Operator Mono Bold Italic'), local('OperatorMono-BoldItalic'),
            url('OperatorMono-BoldItalic.woff2') format('woff2'),
            url('OperatorMono-BoldItalic.woff') format('woff');
        font-weight: bold;
        font-style: italic;
    }
    
    @font-face {
        font-family: 'Operator Mono';
        src: local('Operator Mono Medium'), local('OperatorMono-Medium'),
            url('OperatorMono-Medium.woff2') format('woff2'),
            url('OperatorMono-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Operator Mono';
        src: local('Operator Mono Extra Light'), local('OperatorMono-XLight'),
            url('OperatorMono-XLight.woff2') format('woff2'),
            url('OperatorMono-XLight.woff') format('woff');
        font-weight: 200;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Operator Mono';
        src: local('Operator Mono Light Italic'), local('OperatorMono-LightItalic'),
            url('OperatorMono-LightItalic.woff2') format('woff2'),
            url('OperatorMono-LightItalic.woff') format('woff');
        font-weight: 300;
        font-style: italic;
    }
    
    @font-face {
        font-family: 'Operator Mono';
        src: local('Operator Mono Medium Italic'), local('OperatorMono-MediumItalic'),
            url('OperatorMono-MediumItalic.woff2') format('woff2'),
            url('OperatorMono-MediumItalic.woff') format('woff');
        font-weight: 500;
        font-style: italic;
    }
    
    @font-face {
        font-family: 'Operator Mono';
        src: local('Operator Mono Book'), local('OperatorMono-Book'),
            url('OperatorMono-Book.woff2') format('woff2'),
            url('OperatorMono-Book.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Operator Mono';
        src: local('Operator Mono Bold Italic'), local('OperatorMono-BoldItalic'),
            url('OperatorMono-BoldItalic.woff2') format('woff2'),
            url('OperatorMono-BoldItalic.woff') format('woff');
        font-weight: bold;
        font-style: italic;
    }
    
`

export default injectGlobal`
  ${ reset }
`