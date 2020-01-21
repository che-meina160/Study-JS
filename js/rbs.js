var 图片的坐标 = 0;
var computer = document.querySelector('#computer');
var dictionary = {
  石头: '-200px',
  剪刀: '0',
  布: '-390px',
}

function 机器的选择() {
  return Object.entries(dictionary).find(function (v) {
    return v[1] == 图片的坐标;
  })[0]
};

var interval;

function Interval() {
  interval = setInterval(function () {
    if (图片的坐标 == dictionary.石头) {
      图片的坐标 = dictionary.剪刀;
    } else if (图片的坐标 == dictionary.剪刀) {
      图片的坐标 = dictionary.布;
    } else {
      图片的坐标 = dictionary.石头;
    }
    computer.style.background = 'url(../img/rbs.jpg)' + 图片的坐标 + ' 0';
  }, 100);
}
Interval();
var 分数表 = {
  石头: 1,
  剪刀: 0,
  布: -1,
}
var win_counter = 0;
var lose_counter = 0;
var same = 0;

document.querySelectorAll('button').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var 我的选择 = this.textContent;
    console.log(我的选择, 机器的选择());
    if (分数表[我的选择] - 分数表[机器的选择()] == 0) {
      alert("平了");
      same++;
    }
    // else if (分数表[我的选择] - 分数表[机器的选择()] == -2 || 分数表[我的选择] - 分数表[机器的选择()] == 1) {
    //   alert("你赢了");
    // }
    else if ([-2, 1].includes(分数表[我的选择] - 分数表[机器的选择()])) {
      alert("你赢了");
      win_counter++;
    } else {
      alert("你输了");
      lose_counter++;
    }
    document.querySelector("#result").textContent = "输了" + lose_counter + "次， " + "赢了" + win_counter + "次， " + "平了" + same + "次"
    // if (我的选择 == "石头") {
    //   if (机器的选择() == "石头") {
    //     alert("平了");
    //     console.log("平了");
    //   } else if (机器的选择() == "剪刀") {
    //     alert("赢了");
    //     console.log("赢了");
    //   } else {
    //     alert("输了");
    //     console.log("输了");
    //   }
    // } else if (我的选择 == "剪刀") {
    //   if (机器的选择() == "石头") {
    //     alert("输了");
    //   } else if (机器的选择() == "剪刀") {
    //     alert("平了");
    //   } else {
    //     alert("赢了");
    //   }
    // } else {
    //   if (机器的选择() == "石头") {
    //     alert("赢了");
    //   } else if (机器的选择() == "剪刀") {
    //     alert("输了");
    //   } else {
    //     alert("平了");
    //   }
    // }
    clearInterval(interval);
    setTimeout(function () {
      Interval()
    }, 1000);
  })
})