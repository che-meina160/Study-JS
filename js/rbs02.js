var com = document.querySelector("#com");
com.style.width = "595px";
com.style.backgroundImage = "url(../img/rbs.jpg)";
com.style.backgroundPosition = "0 0"
com.style.backgroundRepeat = "no-repeat"
var same = 0;
var win_counter = 0;
var lose_counter = 0;
document.querySelectorAll('button').forEach(
  function (btn) {
    btn.addEventListener('click', function () {
      var my_choice = this.textContent;
      console.log(my_choice);
      com.style.width = "210px";
      var com_choice = Math.floor(Math.random() * 3) + 1;
      switch (com_choice) {
        case 1:
          com.style.backgroundPosition = "-200px 0";
          break;
        case 2:
          com.style.backgroundPosition = "0 0"
          break;
        case 3:
          com.style.backgroundPosition = "-400px 0"
          break;
        default:
          com.style.backgroundPosition = "-200px 0"
          break;
      }
      if (com_choice == 1) {
        com.textContent = "石头"
      } else if (com_choice == 2) {
        com.textContent = "剪刀"
      } else {
        com.textContent = "布"
      }
      console.log(com.textContent)
      var 分数表 = {
        石头: 1,
        剪刀: 0,
        布: -1,
      }
      var pop = document.querySelector("#pop_result");
      if (分数表[my_choice] - 分数表[com.textContent] == 0) {
        pop.style.display = "block";
        pop.textContent = "平了";
        same++;
      } else if ([-2, 1].includes(分数表[my_choice] - 分数表[com.textContent])) {
        pop.style.display = "block";
        pop.textContent = "你赢了";
        win_counter++;
      } else {
        pop.style.display = "block";
        pop.textContent = "你输了";
        lose_counter++;
      }
      document.querySelector("#result").textContent = "输了" + lose_counter + "次， " + "赢了" + win_counter + "次， " + "平了" + same + "次"
    })
  }
)