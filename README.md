# React Native 學習筆記(未完)
### 引言
也該是時候開始學iOS開發了。就選用 React Native App 吧。剛好也有一個不錯的入門影片 [React Native Tutorial for Beginners - Crash Course 2020](https://www.youtube.com/watch?v=qSRrxpdMpVc&t=4986s)，那就開始吧。   
# 開發環境
* React Native 0.61
* expo sdk: 36.0.0
* IDE: Visual Studio Code v1.42.1
使用expo平台來輔助開發，因為連React Native官網都如此建議。
# Hello World
* [Get Started With Expo](https://expo.io/learn)
* [React Native(v0.61) - Getting Started](https://facebook.github.io/react-native/docs/getting-started)
# 一些開發注意事項與觀念
* React Native無CSS，不過有inline style稱做[StyleSheet](https://docs.expo.io/versions/latest/react-native/stylesheet/)。也就是style組態要全客製化。
* React Native畫面的layout採用Flex的方法。
* 在開發時iOS與Android的模擬器或實機最好同時在旁測試才好發現差異才好即時調整，因為iOS與Android平台在些許規格的實作上仍有差異，比如：Botton的呈現、TextInput的呈現等等等。
* 更先進的新應用，iOS、Android 仍能要各做各個獨立的版本。
# 部署到手機測試
expo有提供相當好用的機制，於[Expo development tools](https://expo.io/tools),有提供Expo Client for Android & iOS 可與expo平台線上連通方便開發與測試。 
expo開發平台做到了只要手機(行動裝置)有安裝expo client，就可以掃描QR code來安裝部署到手機(行動裝置)測試。
# 部署到正式環境
[Building Standalone Apps](https://docs.expo.io/versions/latest/distribution/building-standalone-apps/)   
不管是iOS還是Android都要先註冊帳號才可以build正式模組以發行到手機或行動裝置上，所以真有案子再去申請就行。   
# 基本UI
* [React Navigation 5.x](https://reactnavigation.org/)
* [UI Kitten 4.4](https://akveo.github.io/react-native-ui-kitten/)
* [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
# 拍照&上傳
# 掃條碼
# 簽名板
# 參考
* [React Native Tutorial for Beginners - Crash Course 2020](https://youtu.be/qSRrxpdMpVc)
* [React Native(v0.61) - Getting Started](https://facebook.github.io/react-native/docs/getting-started)
* [Get Started With Expo](https://expo.io/learn)
* [Building Standalone Apps](https://docs.expo.io/versions/latest/distribution/building-standalone-apps/)  
* [React Navigation 5.x](https://reactnavigation.org/)   
* [UI Kitten 4.4](https://akveo.github.io/react-native-ui-kitten/) 
