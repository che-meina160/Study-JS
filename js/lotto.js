var 후보숫자 = Array(45).fill().map(function (item, index) {
  return index + 1;
})
var 셔플 = [];
while (후보숫자.length > 0) {
  var 랜덤숫자 = 후보숫자.splice(Math.floor(Math.random() * 후보숫자.length), 1)[0];
  셔플.push(랜덤숫자)
}
var 당첨숫자들 = 셔플.slice(0, 6).sort(function (a, b) {
  return a - b;
});
var 보너스 = 셔플[셔플.length - 1];
console.log(당첨숫자들);
console.log(보너스);
var 결과창 = document.querySelector('#결과창');
var 칸 = document.querySelector('.보너스');
console.log(결과창);

function 공색칠하기(숫자, 결과창) {
  var 공 = document.createElement('p');
  공.textContent = 숫자;
  공.style.display = 'inline-block';
  공.style.borderRadius = '50%';
  공.style.height = '80px';
  공.style.width = '80px';
  공.style.lineHeight = '80px';
  공.style.textAlign = 'center';
  공.style.marginRight = '50px';
  공.style.marginTop = '-5px';
  공.style.fontSize = '20px';
  공.style.fontWeight = 'bold';
  공.style.color = '#fff';
  공.className = '공아이디' + 숫자;
  var 배경색;
  if (숫자 <= 10) {
    배경색 = 'red';
  } else if (숫자 <= 20) {
    배경색 = 'orange';
  } else if (숫자 <= 30) {
    배경색 = 'blue';
  } else {
    배경색 = 'green';
  }
  공.style.backgroundColor = 배경색;
  결과창.appendChild(공);
}
var val = 0; //放置输入的值
var repeat = false;
console.log(repeat)
//点击数字放入到input框里
function inputEvent(e) {
  val = e.innerHTML;
  var my_num = document.getElementById("input_num");
  my_num.value += e.innerHTML + " ";
  console.log(my_num.value);
  repeat = !repeat;
}

//点击确认按钮
document.querySelector("button").onclick = function (e) {
  e.preventDefault();
  setTimeout(() => {
    공색칠하기(당첨숫자들[0], 결과창)
  }, 1000);
  setTimeout(() => {
    공색칠하기(당첨숫자들[1], 결과창)
  }, 2000);
  setTimeout(() => {
    공색칠하기(당첨숫자들[2], 결과창)
  }, 3000);
  setTimeout(() => {
    공색칠하기(당첨숫자들[3], 결과창)
  }, 4000);
  setTimeout(() => {
    공색칠하기(당첨숫자들[4], 결과창)
  }, 5000);
  setTimeout(() => {
    공색칠하기(당첨숫자들[5], 결과창)
  }, 6000);
  setTimeout(() => {
    공색칠하기(보너스, 칸)
  }, 7000);
  var my_num = document.getElementById("input_num");
  var my_arr = my_num.value.split(" ");
  var my_arr2 = my_arr.splice(0, 6);
  var count = 0;
  var bonus_equal = 0;
  console.log(my_arr2);
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      if (my_arr2[j] == 당첨숫자들[i]) {
        count++;
      }
    }
  }
  console.log(count);
  for (var j = 0; j < 6; j++) {
    if (my_arr2[j] == 보너스) {
      bonus_equal++;
    }
  }
  console.log(bonus_equal);
  var pop_result = document.querySelector("#pop_result");
  if (count == 6) {
    pop_result.style.display = "block";
    pop_result.innerHTML = "恭喜你获得一等奖！"
  } else if (count == 5) {
    pop_result.style.display = "block";
    pop_result.innerHTML = "恭喜你获得三等奖！";
    if (bonus_equal == 1) {
      pop_result.innerHTML = "恭喜你获得二等奖！"
    }
  } else if (count == 4) {
    pop_result.style.display = "block";
    pop_result.innerHTML = "恭喜你获得五等奖！";
    if (bonus_equal == 1) {
      pop_result.innerHTML = "恭喜你获得四等奖！"
    }
  } else if (count == 3) {
    pop_result.style.display = "block";
    pop_result.innerHTML = "恭喜你获得七等奖！";
    if (bonus_equal == 1) {
      pop_result.innerHTML = "恭喜你获得六等奖！"
    }
  } else {
    pop_result.style.display = "block";
    pop_result.innerHTML = "很可惜，你没有中奖哦~";
  }
}