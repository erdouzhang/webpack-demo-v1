import './style.css';
import Icon from './icon.png';
import Data from './data.xml';

//main.js 
const greeter = require('./Greeter.js');

// 将图像添加到我们现有的 div。
var myIcon = new Image();
myIcon.src = Icon;

document.querySelector("#root").appendChild(greeter()).appendChild(myIcon);

console.log(Data);