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
Interval()

document.querySelectorAll('button').forEach(
  function (btn) {
    btn.addEventListener('click', function () {
      var 我的选择 = this.textContent;
      console.log(我的选择, 机器的选择())
      clearInterval(interval);
    })
  }
)