import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./fonts/iconfont.eot?t=1539095353862'); /* IE9*/
    src: url('./fonts/iconfont.eot?t=1539095353862#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAXMAAsAAAAACGwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8gUpDY21hcAAAAYAAAABqAAABstKdnbVnbHlmAAAB7AAAAdsAAAIQzCvM4GhlYWQAAAPIAAAALwAAADYS5PxvaGhlYQAAA/gAAAAcAAAAJAfeA4ZobXR4AAAEFAAAAA4AAAAUFAAAAGxvY2EAAAQkAAAADAAAAAwA/gGKbWF4cAAABDAAAAAfAAAAIAETADxuYW1lAAAEUAAAAUUAAAJtPlT+fXBvc3QAAAWYAAAAMwAAAESzz77veJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByecb8IZG7438AQw9zA0AAUZgTJAQDkNwxBeJztkcENgCAMRV8BjUGvbuGZsyuwhyeHJmyBhXpwCH/zSPtTemiBCfDKoQSQG6HrUleG74nDD5xaRxYcrqxlL6nm1uCbvxLts+hTvf7QWTLzaxvv+Vahb88Y+W70i5Rk6O6o2UAeXIMXtwAAeJw1kU1rE2EUhe95385MSGMSmvloNBOTTOajIkmYzIeISSZQQZAYXCjaQAOCgnUlZqkQcRP9DYLgqiC468JFS1z4A+yqiAtXgrv+gHbiNFUu3Id77uLAOcSIFlOeDOWpSgSpDCULyZc0v4vQs5rLU1a1sIEzRWEnW40W35tNpwenwubJckfnEtvfakz6sz0eTaeRcHow+vjmH6P/D1pJ/BZ8zokkylGdmkRVw65KBtoFbtmGKHEhaLs6DN8QjZrlez14Rk3SslBkte0GHbD5k1vx0c3HyD3afCaITJB2cNTqvriGar8R7mxH15tjR69cNFuHh5ziDfTyllGIvwqlybdm0Nq4n83cNh8IpaJScs0yEZ1l8Jo/5K8oSxZRD+jhBgzbEpUcoIk5JiY5FKww0btMvYwypPgDeNHHWzCfxb9/ZZSfqZKbYkWWwSXBW63YztrMVJULzzG/OgIbAhitxOvv5PR7JumlFDKajD/p0dr6qpi+ow0TX0pCWcR8wr4suzCJzJplW17YhatqqixlwZMuRFkrww3CwLMbKEAC9r2xORiY46dLbAdXBnqnow/uneMlcvX4+LNj3v0+rDtOPYHp4AcqerTb1ysVvb8b6ZX4U3xcR/4vpXByUQB4nGNgZGBgAOL/+y8GxPPbfGXgZmEAgeuP7lgi6P8NLAzMDUAuBwMTSBQAbR8MPAB4nGNgZGBgbvjfwBDDwgACQJKRARWwAgBHCwJueJxjYWBgYEHDAAEEABUAAAAAAAAAOACCAMYBCHicY2BkYGBgZTBgYGEAASYg5gJCBob/YD4DAA3dAVAAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicY2BigAAuBuyAlZGJkZmRhZGVkY2BpbggM4/JMZGtIDUvOTOHNT0nsbiYgQEAXFMHLQA=') format('woff'),
    url('./fonts/iconfont.ttf?t=1539095353862') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./fonts/iconfont.svg?t=1539095353862#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-spin:before { content: '\\e851'; }

  .icon-Aa:before { content: '\\e636'; }

  .icon-pencil:before { content: '\\e615'; }

  .icon-glass:before { content: '\\e60b'; }
`;
