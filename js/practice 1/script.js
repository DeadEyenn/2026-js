const digits = {
  "0": [[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,2],[3,0],[3,2],[4,0],[4,1],[4,2]],
  "1": [[0,1],[1,1],[2,1],[3,1],[4,1]],
  "2": [[0,0],[0,1],[0,2],[1,2],[2,0],[2,1],[2,2],[3,0],[4,0],[4,1],[4,2]],
  "3": [[0,0],[0,1],[0,2],[1,2],[2,0],[2,1],[2,2],[3,2],[4,0],[4,1],[4,2]],
  "4": [[0,0],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2],[3,2],[4,2]],
  "5": [[0,0],[0,1],[0,2],[1,0],[2,0],[2,1],[2,2],[3,2],[4,0],[4,1],[4,2]],
  "6": [[0,0],[0,1],[0,2],[1,0],[2,0],[2,1],[2,2],[3,0],[3,2],[4,0],[4,1],[4,2]],
  "7": [[0,0],[0,1],[0,2],[1,2],[2,2],[3,2],[4,2]],
  "8": [[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2],[3,0],[3,2],[4,0],[4,1],[4,2]],
  "9": [[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2],[3,2],[4,0],[4,1],[4,2]]
};

function createDigitTable(pattern) {
  let str = "<table>";
  
  for (let i = 0; i < 5; i++) {
    str = str + "<tr>";
    
    for (let j = 0; j < 3; j++) {
      let isMarked = false;
      
      for (let k = 0; k < pattern.length; k++) {
        if (pattern[k][0] === i && pattern[k][1] === j) {
          isMarked = true;
        }
      }
      
      if (isMarked === true) {
        str = str + '<td class="marked"></td>';
      } else {
        str = str + '<td></td>';
      }
    }
    
    str = str + "</tr>";
  }
  
  str = str + "</table>";
  return str;
}

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }
  
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  const timeString = hours + "" + minutes;
  const clockContainer = document.querySelector('.clock');
  
  let html = '';
  
  for (let i = 0; i < timeString.length; i++) {
    let digit = timeString[i];
    html = html + createDigitTable(digits[digit]);
  }
  
  clockContainer.innerHTML = html;
}

setInterval(updateClock, 1000);
updateClock();