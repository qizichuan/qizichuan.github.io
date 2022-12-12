/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "043ef1d901c4a235c348706fba700363"
  },
  {
    "url": "assets/css/0.styles.f3cc988a.css",
    "revision": "7eaa6572cc33d5b65a098162a4e93bc1"
  },
  {
    "url": "assets/fonts/iconfont.f21be7a0.woff",
    "revision": "f21be7a0c706d698ffdbd25fa7de762b"
  },
  {
    "url": "assets/fonts/iconfont.fc054a47.ttf",
    "revision": "fc054a47d70c165f60f0b4d200c05a86"
  },
  {
    "url": "assets/img/0.9a47f404.jpg",
    "revision": "9a47f404f92a7db056509df93f6b91d1"
  },
  {
    "url": "assets/img/1665364726107.b0c5b3db.png",
    "revision": "b0c5b3db06e7298040c042cb77a47621"
  },
  {
    "url": "assets/img/1665369001265.dbd40527.png",
    "revision": "dbd405270c481d07c2c2b431ad6737bb"
  },
  {
    "url": "assets/img/1665369397757.f65afb2e.png",
    "revision": "f65afb2e92ba82167cf9469e5c9b0047"
  },
  {
    "url": "assets/img/1665369470671.7b288cdd.png",
    "revision": "7b288cdd04de47ab1155a004144361ca"
  },
  {
    "url": "assets/img/1665369600454.625b21fb.png",
    "revision": "625b21fba3830d46fd5dff452630f53e"
  },
  {
    "url": "assets/img/1665369735907.6b2b517d.png",
    "revision": "6b2b517d15f2270c79efcd324b5034aa"
  },
  {
    "url": "assets/img/1665369991815.9c7b9863.png",
    "revision": "9c7b986337f95a86d31ec79a738d6380"
  },
  {
    "url": "assets/img/1665396047313.bcd88c5d.png",
    "revision": "bcd88c5d210b10d7a37fe34849ee32d7"
  },
  {
    "url": "assets/img/1665396348967.956dea91.png",
    "revision": "956dea91ee29b591712c3a541bc62b9e"
  },
  {
    "url": "assets/img/1665402990433.122d6c8e.png",
    "revision": "122d6c8e45c501fd0c218f4f72d42638"
  },
  {
    "url": "assets/img/1665404348473.56d4af60.png",
    "revision": "56d4af609ce4c71ff166e1f07449ef9a"
  },
  {
    "url": "assets/img/1665404705512.afc0e420.png",
    "revision": "afc0e420da594da1e58a425bbe581c41"
  },
  {
    "url": "assets/img/1665406315916.4677fcb3.png",
    "revision": "4677fcb386cb59bdba92a44bc14b47b3"
  },
  {
    "url": "assets/img/1665406335537.b711e4d9.png",
    "revision": "b711e4d94136c7a916a95436cee37749"
  },
  {
    "url": "assets/img/1665406347983.465b83bc.png",
    "revision": "465b83bc3e148df910d0ea2996d627eb"
  },
  {
    "url": "assets/img/1665406371760.01acfe68.png",
    "revision": "01acfe685b0a1fe5b695e32b422ed0ac"
  },
  {
    "url": "assets/img/1665406377683.29571194.png",
    "revision": "295711940164f136cd1cdfc635b8294f"
  },
  {
    "url": "assets/img/1665406385067.02246933.png",
    "revision": "022469334f32a4d1f12d70d015f4ded2"
  },
  {
    "url": "assets/img/1665406399698.44335c8d.png",
    "revision": "44335c8d0641090ef779563831cff247"
  },
  {
    "url": "assets/img/1665406410285.682005fc.png",
    "revision": "682005fce6686bc65bbd4ecccd45f921"
  },
  {
    "url": "assets/img/1665406420343.e40f0d98.png",
    "revision": "e40f0d981bff49e67f16911446b7af9c"
  },
  {
    "url": "assets/img/1665406426215.a7374ae0.png",
    "revision": "a7374ae011955a640d78d9a49f8966e9"
  },
  {
    "url": "assets/img/1665406433293.33a03bb3.png",
    "revision": "33a03bb3f6d07bcf95e9820ac775d25b"
  },
  {
    "url": "assets/img/1665406444717.4686a259.png",
    "revision": "4686a2593d9e41de3628b42956457627"
  },
  {
    "url": "assets/img/1665406463032.bef4df6d.png",
    "revision": "bef4df6d08147ee616b5eebdf3575348"
  },
  {
    "url": "assets/img/1665406468375.1cd5da13.png",
    "revision": "1cd5da136c9d435857e8faa3ca0a722a"
  },
  {
    "url": "assets/img/1665406682521.e49bc2b3.png",
    "revision": "e49bc2b34f4d3fe65d61478be235d4be"
  },
  {
    "url": "assets/img/1665406714999.ceed9b4b.png",
    "revision": "ceed9b4b9d4b5cae0a021b5c5795cc15"
  },
  {
    "url": "assets/img/1665406734449.b0bcfeed.png",
    "revision": "b0bcfeed9b8084d7ecfb378e643505f3"
  },
  {
    "url": "assets/img/1665406904416.f9dca290.png",
    "revision": "f9dca290f0e02311116beceaf1c28fb2"
  },
  {
    "url": "assets/img/1665406914135.86dc81db.png",
    "revision": "86dc81dbf5240abd7ffff550d4977b01"
  },
  {
    "url": "assets/img/1665406935727.fab239c9.png",
    "revision": "fab239c95d8fcace19417bad9fe8f897"
  },
  {
    "url": "assets/img/1665406941156.7f496198.png",
    "revision": "7f4961987741099feb1a6693c7ae64fd"
  },
  {
    "url": "assets/img/1665406946297.e7dea0f3.png",
    "revision": "e7dea0f351dda06adbc9c9fedd311c81"
  },
  {
    "url": "assets/img/1665559689037.59778dcc.png",
    "revision": "59778dcc0f35a580a7098d865e5cb8a5"
  },
  {
    "url": "assets/img/1665560662218.d5e81d19.png",
    "revision": "d5e81d19aa6433e67b7b1b7fea26d10b"
  },
  {
    "url": "assets/img/1666447092898.ab3317f6.png",
    "revision": "ab3317f64c2222474bcb29f633f2c00d"
  },
  {
    "url": "assets/img/1666447422025.0f846f5e.png",
    "revision": "0f846f5e569bbb41f3a06d47fb62ee7b"
  },
  {
    "url": "assets/img/1667999112416.d6c3bd64.png",
    "revision": "d6c3bd6442b554a3eef12cd80ba50660"
  },
  {
    "url": "assets/img/1667999227757.a9059e3c.png",
    "revision": "a9059e3c7fc5c1aa4ce67574140f7ea5"
  },
  {
    "url": "assets/img/1667999972288.f43c1e12.png",
    "revision": "f43c1e12b2ca78f8398cfd4d429f7788"
  },
  {
    "url": "assets/img/1668000341480.cada59a6.png",
    "revision": "cada59a6ad40450ebc964c7214b4441f"
  },
  {
    "url": "assets/img/1668001719727.54c58913.png",
    "revision": "54c58913f455a2ed92272cb369cbc543"
  },
  {
    "url": "assets/img/1668001830198.c1402b9d.png",
    "revision": "c1402b9dda0289bce80d1031513b83b5"
  },
  {
    "url": "assets/img/1668001978736.17746513.png",
    "revision": "17746513cf99b85965f9d39094c34d8a"
  },
  {
    "url": "assets/img/1668002116998.2c3130fc.png",
    "revision": "2c3130fc45b22b7f783648d5e82b13f7"
  },
  {
    "url": "assets/img/1668002421848.9a4a3350.png",
    "revision": "9a4a3350cb64e37ecc11afd07ad76e54"
  },
  {
    "url": "assets/img/1668002663777.a3afdb3b.png",
    "revision": "a3afdb3bba167ab84e00ebe2a5202ee2"
  },
  {
    "url": "assets/img/1668002801577.f73b0d1d.png",
    "revision": "f73b0d1dcc7af000e6336bd14ce7539d"
  },
  {
    "url": "assets/img/1668041574418.1c5af764.png",
    "revision": "1c5af764c8c289f1b9f5f06b716eed39"
  },
  {
    "url": "assets/img/1668130961376.8715efa6.png",
    "revision": "8715efa6754862b10f88b6e9034d3afc"
  },
  {
    "url": "assets/img/1668152687754.77bf786a.png",
    "revision": "77bf786a11eafd6c0ac471c828a0ecf4"
  },
  {
    "url": "assets/img/1668155531788.7d09eaf6.png",
    "revision": "7d09eaf66d02dfd1bbcaaa6bd73fbfc8"
  },
  {
    "url": "assets/img/1668179589955.3eb71a6b.png",
    "revision": "3eb71a6b41d9c49c9803043ff9e92b0a"
  },
  {
    "url": "assets/img/1668179600490.a2bcb8b4.png",
    "revision": "a2bcb8b4667715b0cfc25d029331c55e"
  },
  {
    "url": "assets/img/1669181502819.0baa2899.png",
    "revision": "0baa2899faed84e5f36991749cd179dd"
  },
  {
    "url": "assets/img/1669181539241.faefb962.png",
    "revision": "faefb962c5fb950d9d2c48f217c33565"
  },
  {
    "url": "assets/img/1670764021541.f766aef4.png",
    "revision": "f766aef4327e2a743ee43402cf660880"
  },
  {
    "url": "assets/img/1670765227567.09e9f524.png",
    "revision": "09e9f5241d4c8faa60942af286004b35"
  },
  {
    "url": "assets/img/1670765445971.a9bbe74a.png",
    "revision": "a9bbe74af717d675f92ad643b521e0a0"
  },
  {
    "url": "assets/img/1670766817398.fe0a6813.png",
    "revision": "fe0a6813f15b5dda5d3748eb0b862075"
  },
  {
    "url": "assets/img/1670808569999.25ac6b44.png",
    "revision": "25ac6b4451f37c298647f6f4faa42530"
  },
  {
    "url": "assets/img/1670810468571.5cdfe9cf.png",
    "revision": "5cdfe9cfa66012b3d5dfc255a9b19e21"
  },
  {
    "url": "assets/img/1670811298597.6688e35e.png",
    "revision": "6688e35e51149455056a3bb8087bcd90"
  },
  {
    "url": "assets/img/1670811559327.f2a89244.png",
    "revision": "f2a892448ef778da21094ac334b57b1f"
  },
  {
    "url": "assets/img/1670813850837.0b94e48a.png",
    "revision": "0b94e48a1575f4342f679b7cb42a77c1"
  },
  {
    "url": "assets/img/1670815886913.af798f82.png",
    "revision": "af798f82df3cec8f5c00607ddbe06145"
  },
  {
    "url": "assets/img/2470943-20220613001750515-1645637694.9a5ed233.png",
    "revision": "9a5ed233d93a8c5205b44edd58e0c038"
  },
  {
    "url": "assets/img/3.fd737b82.png",
    "revision": "fd737b8298537a1bf94b5c33295dd49b"
  },
  {
    "url": "assets/img/4.6fadef2b.png",
    "revision": "6fadef2bb3999c3ab6ec81a2842cb51d"
  },
  {
    "url": "assets/img/claw.f886b8d5.svg",
    "revision": "f886b8d5021c8af029e2cd4dea609bcc"
  },
  {
    "url": "assets/img/D3C1DABF-87E8-4ae3-9FF0-E874285905F9.8bafae6d.png",
    "revision": "8bafae6de1bb021d2c38a9e1d3dfe14d"
  },
  {
    "url": "assets/img/hbcm_20221014145827.a4ef1efd.jpg",
    "revision": "a4ef1efd741c2e7f3eac3b746b21ecd6"
  },
  {
    "url": "assets/img/hbcm_20221014145907.650f381b.jpg",
    "revision": "650f381bfaf5459443412b097700adbe"
  },
  {
    "url": "assets/img/hbcm_20221014145919.51931bf5.jpg",
    "revision": "51931bf565ffd9ff166f9c3796482a11"
  },
  {
    "url": "assets/img/hbcm_20221014145922.5681a5a1.jpg",
    "revision": "5681a5a1d05ad327eb5e715bac2af7d2"
  },
  {
    "url": "assets/img/hbcm_20221014145926.525a83b7.jpg",
    "revision": "525a83b720712c38802ff4b7ba77f39b"
  },
  {
    "url": "assets/img/hbcm_20221014145930.2a845d0c.jpg",
    "revision": "2a845d0c748ffee5628b2cf298b32799"
  },
  {
    "url": "assets/img/hbcm_20221014145934.7953bf26.jpg",
    "revision": "7953bf2695ecb36c4ed3603821177f24"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/img/wx1123.c68add79.png",
    "revision": "c68add790a6ce2ee4f09a9bb9ad05873"
  },
  {
    "url": "assets/js/1.9a190af8.js",
    "revision": "2d9ef1f893de46f2f91475307af088a2"
  },
  {
    "url": "assets/js/10.9bfa054c.js",
    "revision": "b53117ce22d14c35ce39d38dcd5778fe"
  },
  {
    "url": "assets/js/11.bd60bb1c.js",
    "revision": "23962b63b239dea058bfea2a29374002"
  },
  {
    "url": "assets/js/12.7c60b1dd.js",
    "revision": "cd23c2422605d3277fa389819ff1c1ff"
  },
  {
    "url": "assets/js/13.db735d3f.js",
    "revision": "19b2dae390639dace361350ddc889989"
  },
  {
    "url": "assets/js/14.c47a6c97.js",
    "revision": "8af602fc8194c1ff89f0c45152883512"
  },
  {
    "url": "assets/js/15.6f92465e.js",
    "revision": "f9749abd4cc712b7179d44f060be9836"
  },
  {
    "url": "assets/js/16.d3b8dabb.js",
    "revision": "3cd0dc21c5b2fbe01d5658e211f146b6"
  },
  {
    "url": "assets/js/17.0c76d1b2.js",
    "revision": "60dd00f09d73ba928da6a1e494c10318"
  },
  {
    "url": "assets/js/18.d7e71898.js",
    "revision": "64ee4adec9dcf67196a3f60038175719"
  },
  {
    "url": "assets/js/19.2afdaef8.js",
    "revision": "7cfc0da6969372d788ec14fe3f17ef02"
  },
  {
    "url": "assets/js/20.12909951.js",
    "revision": "b64df00c9bfe0e0344edce018e0904bb"
  },
  {
    "url": "assets/js/21.ad0d0c6a.js",
    "revision": "852f096a82ad2ccfe882617a81495b3a"
  },
  {
    "url": "assets/js/22.335b98c5.js",
    "revision": "9f30b5afa6d748b9976970c9bbd5e2c6"
  },
  {
    "url": "assets/js/23.fb4f4876.js",
    "revision": "a72e72fe6b704c22b2312da0fceb8d63"
  },
  {
    "url": "assets/js/24.26980084.js",
    "revision": "9f17c3b49d20217d100754f49bdd1b87"
  },
  {
    "url": "assets/js/25.a8ac6fc9.js",
    "revision": "5cde33ab115667c0457a587bf98c0057"
  },
  {
    "url": "assets/js/26.5f317ec5.js",
    "revision": "57b40be70847ce104e46e9449179e08b"
  },
  {
    "url": "assets/js/27.33cfea0c.js",
    "revision": "2e8003e5cf06109caa0aad509a8dabf5"
  },
  {
    "url": "assets/js/28.d39b97c7.js",
    "revision": "96b980232ed6ab17a2f5f454f4e37a03"
  },
  {
    "url": "assets/js/29.59686629.js",
    "revision": "62ba8e40f9b435d5506aecf2528ceb46"
  },
  {
    "url": "assets/js/30.c5618418.js",
    "revision": "36e58b044f30a11f0070f9e52d521836"
  },
  {
    "url": "assets/js/31.7654e4fa.js",
    "revision": "997f76a16c91deff458b3a00a6142ae2"
  },
  {
    "url": "assets/js/32.bf6fd65f.js",
    "revision": "9c5dbb6f567fea67ebd651faefe8d313"
  },
  {
    "url": "assets/js/33.cd71c559.js",
    "revision": "96e2c8103a923fef272a8d0917d513b2"
  },
  {
    "url": "assets/js/34.23979045.js",
    "revision": "9e5266f4762f7efdf7bcef09da66f7fa"
  },
  {
    "url": "assets/js/35.d232c859.js",
    "revision": "120a7801caaffa3ebfe33548da2036ef"
  },
  {
    "url": "assets/js/4.e75652af.js",
    "revision": "7464e1116b4d9cae62a1a2c53d32b5c0"
  },
  {
    "url": "assets/js/5.468b3dcf.js",
    "revision": "4cdc627d4d372b45b9d0e221f9957e5b"
  },
  {
    "url": "assets/js/6.257a7096.js",
    "revision": "663b7559f0b697236b1d40d7ffeee913"
  },
  {
    "url": "assets/js/7.63181bcd.js",
    "revision": "2a88227b421d13ba479e7951d09e32bd"
  },
  {
    "url": "assets/js/8.01e9ea5e.js",
    "revision": "b14419604ae81d31624f531722aa232a"
  },
  {
    "url": "assets/js/9.0fda7338.js",
    "revision": "32cd3e4909398b5f8799ac5580973b5a"
  },
  {
    "url": "assets/js/app.7dac0b1e.js",
    "revision": "8d6bd184c7cdb4dbc17fcbe83775978d"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.a06daa30.js",
    "revision": "f6edc34f38a5b6e290fd5985c6d6d76a"
  },
  {
    "url": "categories/index.html",
    "revision": "01ce8c2faf9f88ea4ac3cc8df688fdfc"
  },
  {
    "url": "categories/leetcode/index.html",
    "revision": "eb1c39b07ab62a38fa3bee8b908c88d9"
  },
  {
    "url": "categories/技术文章/index.html",
    "revision": "f7a256a3e3f3987196ac5d0e194d540e"
  },
  {
    "url": "categories/技术文章/page/2/index.html",
    "revision": "63d73eff86eaa6ab2903d42ace3927dd"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "78c4b31fb712b5ca74ffe5a88d13233a"
  },
  {
    "url": "css/style.css",
    "revision": "da6de7812cd6008028cc7ce054a08355"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "2926b4c45be9bd49dd7f3c1f08622753"
  },
  {
    "url": "iconfont/iconfont.js",
    "revision": "61079b9ae5ece6b1f3df120e84772a86"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "fc054a47d70c165f60f0b4d200c05a86"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "f21be7a0c706d698ffdbd25fa7de762b"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "56cf6cf4ae783b1d9999b5ee4981eda9"
  },
  {
    "url": "img/detail/face.jpg",
    "revision": "8585f0af3dc806952eecc6d06b587678"
  },
  {
    "url": "img/detail/gupiao2.jpg",
    "revision": "998fc51862d7459fa13c8251faa81e07"
  },
  {
    "url": "img/detail/hongri.jpg",
    "revision": "43adc8172fbc33a3514fe70f19a961b4"
  },
  {
    "url": "img/detail/hu.jpg",
    "revision": "b8efe4a6e00706e7e0f72c421a3f86f9"
  },
  {
    "url": "img/detail/lou.jpg",
    "revision": "f7708f8f5f6a661777d3e83fc60b9a55"
  },
  {
    "url": "img/detail/m1.jpg",
    "revision": "0a6ab3905b9f6bd5fa32538429d6089c"
  },
  {
    "url": "img/detail/wuzi.jpg",
    "revision": "5546ac23440cf6e7d2fb738ec7246300"
  },
  {
    "url": "img/detail/wuzi1.jpg",
    "revision": "7ef58ac48d43ec74325aa6bb50f7c486"
  },
  {
    "url": "img/detail/yewan.jpg",
    "revision": "8d6aaa767ec5f0dad922bb3cf11b3847"
  },
  {
    "url": "img/detail/yun.jpg",
    "revision": "ff674343879116e22e3cf713358f2cb5"
  },
  {
    "url": "img/head.png",
    "revision": "1506176be1b1456d640a7562f49e06ac"
  },
  {
    "url": "img/huojian.png",
    "revision": "826a7c3d2d1a03184853c5f0106f07a0"
  },
  {
    "url": "img/main/aboutvuepress.png",
    "revision": "94af60e1b3b688adcef01da56fd6cec3"
  },
  {
    "url": "img/main/anquan.jpg",
    "revision": "44d18c81702ea2cc07c48cbce81fa1d5"
  },
  {
    "url": "img/main/anquan2.jpg",
    "revision": "c43e8a2dc057e5c358a2ae7d31f22f6f"
  },
  {
    "url": "img/main/face.jpg",
    "revision": "f40b753cae5e1006221f5a7dec53240e"
  },
  {
    "url": "img/main/fei.jpg",
    "revision": "2b01f916ddea8985ea7c16887028433c"
  },
  {
    "url": "img/main/feiji.jpg",
    "revision": "653244fbda4d90de4e2082736a810976"
  },
  {
    "url": "img/main/fengjing.jpg",
    "revision": "35d68020bbc81a4eccd54d27ef11b177"
  },
  {
    "url": "img/main/gupiao.jpg",
    "revision": "bdc059e713c1ce8421505859c535e712"
  },
  {
    "url": "img/main/heike.jpg",
    "revision": "00be5ccad57f16b1cc7780285ea0ae67"
  },
  {
    "url": "img/main/jian.jpg",
    "revision": "410c3c04f8108075a7b166d2462b3f46"
  },
  {
    "url": "img/main/jiaoshi2.jpg",
    "revision": "ff1f2dd15c858c492b243a3b2c59ab9c"
  },
  {
    "url": "img/main/jiedao2.jpg",
    "revision": "d38a5a2b8e77ad235f9069977a9fb80a"
  },
  {
    "url": "img/main/m2.jpg",
    "revision": "9e8e409f1a45c469308eded46a0d32ce"
  },
  {
    "url": "img/main/qinglv.jpg",
    "revision": "876bbabf8a5fa106832ccc7c679fe192"
  },
  {
    "url": "img/main/sunmeimei.jpg",
    "revision": "cb0fce1750ea00d4272a9630d52fdb8c"
  },
  {
    "url": "img/main/yuan.jpg",
    "revision": "c167321aa215d7c1a74108ba7b832241"
  },
  {
    "url": "img/qq.png",
    "revision": "edc09d2828074fa9ac8ecd3557e85f3f"
  },
  {
    "url": "img/Sitich30.gif",
    "revision": "20646eff96051f36dd39926fff002004"
  },
  {
    "url": "img/wx.png",
    "revision": "af5ff2b95d8c76b7ccc8d737aa2f2fc0"
  },
  {
    "url": "index.html",
    "revision": "183a6bf429633b1a1961d0c02ffa23ab"
  },
  {
    "url": "js/custom.js",
    "revision": "8bb1c725a240b1489f08fd27461154d1"
  },
  {
    "url": "js/Valine.min.js",
    "revision": "906ba20e000e7dc1549a79af00628179"
  },
  {
    "url": "live2d/koharu/assets/moc/koharu.2048/texture_00.png",
    "revision": "495eea8d906c2b03abfe3fa9de2f2a8b"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "b1a74a6b754371e588d4e958f63172ce"
  },
  {
    "url": "tag/Elasticsearch/index.html",
    "revision": "0b9b0768c35a445692e90d05bef2dc26"
  },
  {
    "url": "tag/git/index.html",
    "revision": "918333b3872f89fd58cab496e5936f68"
  },
  {
    "url": "tag/index.html",
    "revision": "fda5f3f4fcf22b5ca72743478d66de57"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "405e496faa4fa025878e3f85873d7efd"
  },
  {
    "url": "tag/leetcode/index.html",
    "revision": "e258777db2f2dcf3034acc2705eb8195"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "e0e54692c2529e5cd6afb9020b1100cd"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "bc1ec63f3f3f671a49d7ad0d8f31c503"
  },
  {
    "url": "tag/python/index.html",
    "revision": "1b640074ce2abd74a972e0134a25caf9"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "69b164dabab248188e761e34c4f0c4d1"
  },
  {
    "url": "tag/技术文章/index.html",
    "revision": "92cdc88a150ef41166ad14fea3faa486"
  },
  {
    "url": "tag/技术文章/page/2/index.html",
    "revision": "817368c71286516cf4779834ca15295a"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "fc9dcfa19e13305aae4276af280081f3"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "4fa14f8749fd335024bea4cb4a23c04d"
  },
  {
    "url": "tag/股票/index.html",
    "revision": "aeed46aa1194508f34b4405ea87f180b"
  },
  {
    "url": "timeline/index.html",
    "revision": "07aeeecdc52a03c0b61c4a930ba0e0bd"
  },
  {
    "url": "utils/js/MouseClickEffect.js",
    "revision": "7b2f404492406fd33975a7faf5ace0c0"
  },
  {
    "url": "技术文章/deepin/deepin.html",
    "revision": "131048d0595442806d818662c17c089c"
  },
  {
    "url": "技术文章/git/gitee-pages.html",
    "revision": "63bd7669bcc29cc257f19f390fbe0c51"
  },
  {
    "url": "技术文章/java/Java学习路线.html",
    "revision": "658b4de8c43679d1f275888e61fb73c7"
  },
  {
    "url": "技术文章/leetcode/20.html",
    "revision": "a67222a6c8744375c1b32854375f1cc8"
  },
  {
    "url": "技术文章/linux/frp.html",
    "revision": "eee099e4381de403b61316645f460a26"
  },
  {
    "url": "技术文章/linux/safe.html",
    "revision": "8216eebb354b8f9895b7decbe199a315"
  },
  {
    "url": "技术文章/nginx/first.html",
    "revision": "923519f5182604a9fc0581aeb33a1311"
  },
  {
    "url": "技术文章/python/ElasticSearch/es.html",
    "revision": "16465aa01171eb938a4c197eba8eb074"
  },
  {
    "url": "技术文章/python/ElasticSearch/xxt.html",
    "revision": "92c111fb36b64fa0ae38fded135ac7ac"
  },
  {
    "url": "技术文章/python/face/face.html",
    "revision": "2bdba4be5166300374e747d14a7a2232"
  },
  {
    "url": "技术文章/python/flask/flask.html",
    "revision": "0d83ecce949f9979a9f8d494ea0e4d87"
  },
  {
    "url": "技术文章/python/kugou/music.html",
    "revision": "2be802ed2a63ed74ed0376d557499151"
  },
  {
    "url": "技术文章/vue/aboutvuepress/vuepress.html",
    "revision": "5b7a955e86b797d99233a1da731f7746"
  },
  {
    "url": "技术文章/vue/打字机/writing.html",
    "revision": "4c7747ee47e4a8b51f17dca2d715c519"
  },
  {
    "url": "生活分享/关于作者/about.html",
    "revision": "947370a07e8081342670172fdc4f3c0f"
  },
  {
    "url": "生活分享/关于作者/resume.html",
    "revision": "4d1994ad430b42cd6dbf2afa0e038bee"
  },
  {
    "url": "生活分享/大学生活/dingding/fiddler.html",
    "revision": "38fba3a584ebf3ebc2a357e64c4607ec"
  },
  {
    "url": "生活分享/大学生活/university/university.html",
    "revision": "2d09a24dcb5dfb86be84159860640ab2"
  },
  {
    "url": "生活分享/大学生活/wifi/index.html",
    "revision": "efb8ac3603f63733d9de2e49eaa20b3f"
  },
  {
    "url": "生活分享/股票/2022.html",
    "revision": "1f5a9da4e12dfc33ce9db63e3c2895d2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
