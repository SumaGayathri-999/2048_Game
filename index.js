document.addEventListener('DOMContentLoaded', () => {
    const grid_cont = document.querySelector('.entireGrid');
    const score = document.querySelector('.score');
    score.innerHTML = 0;
    let score_value = 0;
    var width = 4;
    const squares = [];
    const rows = [];
    const cols = [];
    var crossed = false;
  
    createBoard();
    generateNum();
    generateNum();

    function createBoard(columns) {
      
      width = columns ? columns : 4;
      for (i = 0; i < width * width; i++) {
        let square = document.createElement('div');
        square.innerHTML = ' ';
        grid_cont.appendChild(square);
        squares.push(square);
        if(columns === 4){
            square.style.width = "8.5rem";
            square.style.height = "8.5rem";

        }
        if(columns === 5){
            square.style.width = "6.8rem"
            square.style.height = "6.8rem"

        }
        if(columns === 6){
            square.style.width = "5.6666rem"
            square.style.height = "5.6666rem"

        }
      }

    }
  
    // Generating two numbers placed at random position
    function generateNum() {
      let random_position = Math.floor(Math.random() * squares.length);
      if (squares[random_position].innerHTML == ' ') {
        squares[random_position].innerHTML = 2;
        squares[random_position].style.backgroundColor = '#ede3d7';
        squares[random_position].classList.add("div_anim");
        for (i = 0; i < width * width; i++) {
          if (squares[i].innerHTML == ' ') {
            squares[i].style.backgroundColor = '#c6b8af';
          } else if (squares[i].innerHTML == 2) {
            squares[i].style.backgroundColor = '#eee4da';
            squares[i].style.color = '#727371';
          } else if (squares[i].innerHTML == 4) {
            squares[i].style.backgroundColor = '#ece0ca';
            squares[i].style.color = '#727371';
          } else if (squares[i].innerHTML == 8) {
            squares[i].style.backgroundColor = '#f4b17a';
            squares[i].style.color = 'white';
          } else if (squares[i].innerHTML == 16) {
            squares[i].style.backgroundColor = '#f59575';
            squares[i].style.color = 'white';
          } else if (squares[i].innerHTML == 32) {
            squares[i].style.backgroundColor = '#f57c5f';
            squares[i].style.color = 'white';
          } else if (squares[i].innerHTML == 64) {
            squares[i].style.backgroundColor = '#f65d3b';
            squares[i].style.color = 'white';
          } else if (squares[i].innerHTML == 128) {
            squares[i].style.backgroundColor = '#edce71';
            squares[i].style.color = 'white';
          } else if (squares[i].innerHTML == 256) {
            squares[i].style.backgroundColor = '#edcc63';
            squares[i].style.color = 'white';
          } else if (squares[i].innerHTML == 512) {
            squares[i].style.backgroundColor = '#edc651';
            squares[i].style.color = 'white';
          } else if (squares[i].innerHTML == 1024) {
            squares[i].style.backgroundColor = '#eec744';
            squares[i].style.color = 'white';
          } else if (squares[i].innerHTML == 2048) {
            squares[i].style.backgroundColor = '#ecc230';
            squares[i].style.color = 'white';
          } else if (squares[i].innerHTML == 4096) {
            squares[i].style.backgroundColor = '#fe3d3d';
            squares[i].style.color = 'white';
          } else if (squares[i].innerHTML == 8192) {
            squares[i].style.backgroundColor = '#ff2020';
            squares[i].style.color = 'white';
          }
        }
      } else {
        generateNum();
      }
    }
    let fourcol = document.getElementById("four");
    fourcol.addEventListener('click',()=>{
        grid_cont.innerHTML ="";
        squares.length = 0;
        createBoard(4);
        generateNum();
        generateNum();
        score_value = 0;
        score.innerText = 0;

    })
    let fivecol = document.getElementById("five");
    fivecol.addEventListener('click',()=>{
        
        grid_cont.innerHTML ="";
        squares.length = 0;
        createBoard(5);
        generateNum();
        generateNum();
        score_value = 0;
        score.innerText = 0;

    })
    let sixcol = document.getElementById("six");
    sixcol.addEventListener('click',()=>{
        
        grid_cont.innerHTML ="";
        squares.length = 0;
        createBoard(6);
        generateNum();
        generateNum();
        score_value = 0;
        score.innerText = 0;
    })
    //move right
    function moveRight() {
      rows.length = 0;
      for (i = 0; i < width * width; i++) {
        squares[i].classList.remove("div_anim");
        if (i % width === 0) {
            var row = [];
            for(let j=0; j <= (width-1); j++){
               row.push(parseInt(squares[i + j].innerHTML))
            }
        //   let firstvalue = squares[i].innerHTML;
        //   let secondvalue = squares[i + 1].innerHTML;
        //   let thirdvalue = squares[i + 2].innerHTML;
        //   let fourthvalue = squares[i + 3].innerHTML;
        //   let row = [
        //     parseInt(firstvalue),
        //     parseInt(secondvalue),
        //     parseInt(thirdvalue),
        //     parseInt(fourthvalue),
        //   ];
          let valuedElements = row.filter((num) => num);
          let emptyLength = width - valuedElements.length;
          let emptyArray = Array(emptyLength).fill(' ');
          let alignRight = emptyArray.concat(valuedElements);
          for(let k=0; k <= (width-1); k++){
            squares[i + k].innerHTML = alignRight[k];
         }
        //   squares[i].innerHTML = alignRight[0];
        //   squares[i + 1].innerHTML = alignRight[1];
        //   squares[i + 2].innerHTML = alignRight[2];
        //   squares[i + 3].innerHTML = alignRight[3];
          rows.push(alignRight);
        }
      }
    }
    function moveLeft() {
      rows.length = 0;
      for (i = 0; i < width * width; i++) {
        squares[i].classList.remove("div_anim");
        if (i % width === 0) {
            var row = [];
            for(let j=0; j <= (width-1); j++){
               row.push(parseInt(squares[i + j].innerHTML))
            }
          let valuedElements = row.filter((num) => num);
          let emptyLength = width - valuedElements.length;
          let emptyArray = Array(emptyLength).fill(' ');
          let alignLeft = valuedElements.concat(emptyArray);
          for(let k=0; k <= (width-1); k++){
            squares[i + k].innerHTML = alignLeft[k];
         }
          rows.push(alignLeft);
        }
      }
    }
    function moveUp() {
      cols.length = 0;
      for (i = 0; i < width; i++) {
        squares[i].classList.remove("div_anim");
        var col = [];
        for(j = 0 ; j <= (width-1); j++){
           col.push(parseInt(squares[i+ (width * j)].innerHTML))
        }
        let valuedElements = col.filter((num) => num);
        let emptyLength = width - valuedElements.length;
        let emptyArray = Array(emptyLength).fill(' ');
        let alignUp = valuedElements.concat(emptyArray);
        for(k = 0 ; k <= (width-1); k++){
            squares[i + (width * k)].innerHTML = alignUp[k];
         }
        cols.push(alignUp);
      }
    }
    function moveDown() {
      cols.length = 0;
      for (i = 0; i < width; i++) {
        squares[i].classList.remove("div_anim");
        var col = [];
        for(j = 0 ; j <= (width-1); j++){
           col.push(parseInt(squares[i+ (width * j)].innerHTML))
        }
        let valuedElements = col.filter((num) => num);
        let emptyLength = width - valuedElements.length;
        let emptyArray = Array(emptyLength).fill(' ');
        let alignDown = emptyArray.concat(valuedElements);
        for(k = 0 ; k <= (width-1); k++){
            squares[i + (width * k)].innerHTML = alignDown[k];
         }
        cols.push(alignDown);
      }
    }
    function combineRow(dir) {
      for (let i = 0; i < rows.length; i++) {

        let row = rows[i];
        if (dir === 'left') {
          for (let j = 0; j < row.length - 1; j++) {
            if (row[j] === row[j + 1] && !(row[j] == ' ')) {
              let combinerow = row[j] + row[j + 1];
              let nextIndex = width * i + j + 1;
              let currentIndex = width * i + j;
  
              squares[nextIndex].innerHTML = ' ';
              squares[currentIndex].innerHTML = combinerow;
              row[j + 1] = ' ';
              score_value +=combinerow;
              score.innerText = score_value;
            }
          }
        } else if (dir === 'right') {
          for (let j = row.length - 1; j >= 0; j--) {
            if (row[j] === row[j - 1] && !(row[j] == ' ')) {
              let combinerow = row[j] + row[j - 1];
              let prevIndex = width * i + j - 1;
              let currentIndex = width * i + j;
  
              squares[prevIndex].innerHTML = ' ';
              squares[currentIndex].innerHTML = combinerow;
              row[j - 1] = ' ';
              score_value +=combinerow;
              score.innerText = score_value;
            }
          }
        }
      }
    }
    function combineCol(dir) {
      for (let i = 0; i < cols.length; i++) {
        let col = cols[i];
        if (dir === 'up') {
          for (let j = 0; j < col.length - 1; j++) {
            if (
              col[j] === col[j + 1] &&
              !(col[j] == ' ') &&
              !(col[j - 1] == ' ')
            ) {
              let combinecol = col[j] + col[j + 1];
              let nextIndex = width * j + i + width;
              let currentIndex = width * j + i;
              squares[nextIndex].innerHTML = ' ';
              squares[currentIndex].innerHTML = combinecol;
              col[j + 1] = ' ';
              score_value +=combinecol;
              score.innerText = score_value;
            }
          }
        } else if (dir === 'down') {
          for (let j = col.length - 1; j >= 0; j--) {
            if (
              col[j] === col[j - 1] &&
              !(col[j] == ' ') &&
              !(col[j - 1] == ' ')
            ) {
              let combinecol = col[j] + col[j - 1];
              let prevIndex = width * j + i - width;
              let currentIndex = width * j + i;
              squares[prevIndex].innerHTML = ' ';
              squares[currentIndex].innerHTML = combinecol;
              col[j - 1] = ' ';
              score_value +=combinecol;
              score.innerText = score_value;
            }
          }
        }
      }
    }
    function control(e) {
      if (e.keyCode === 39) {
        keyRight();
      } else if (e.keyCode === 37) {
        keyLeft();
      } else if (e.keyCode === 38) {
        keyUp();
      } else if (e.keyCode === 40) {
        keyDown();
      }
    }
    var startingX, startingY, endingX, endingY;
    var moving = false;
    document.body.addEventListener('touchstart', touchstart);
    document.body.addEventListener('touchmove', touchmove);
    document.body.addEventListener('touchend', touchend);
    function touchstart(evt) {
      startingX = evt.touches[0].clientX;
      startingY = evt.touches[0].clientY;
    }
    function touchmove(evt) {
      moving = true;
      endingX = evt.touches[0].clientX;
      endingY = evt.touches[0].clientY;
    }
    function touchend() {
      if (moving === true) {
        if (startingX + 100 < endingX) {
          keyRight();
        } else if (startingX - 100 > endingX) {
          keyLeft();
        }
        if (startingY + 100 < endingY) {
          keyDown();
        } else if (startingY - 100 > endingY) {
          keyUp();
        }
      }
    }
  
    document.addEventListener('keyup', control);
    function keyRight() {
      moveRight();
      combineRow('right');
      moveRight();
      generateNum();
      setTimeout(() => {
        checkForWin();
      }, 200);
    }
    function keyLeft() {
      moveLeft();
      combineRow('left');
      moveLeft();
      generateNum();
      setTimeout(() => {
        checkForWin();
      }, 200);
    }
    function keyUp() {
      moveUp();
      combineCol('up');
      moveUp();
      generateNum();
      setTimeout(() => {
        checkForWin();
      }, 200);
    }
    function keyDown() {
      moveDown();
      combineCol('down');
      moveDown();
      generateNum();
      setTimeout(() => {
        checkForWin();
      }, 200);
    }
    function checkForWin() {
      checkForLoose();
      if (crossed === false) {
        for (i = 0; i < width * width; i++) {
          if (squares[i].innerHTML == 2048) {
            window.alert('Congrats! You have crossed 2048!!');
            crossed = true;
            break;
          }
        }
      } else {
        for (i = 0; i < width * width; i++) {
          if (squares[i].innerHTML == 8192) {
            window.alert('You Win!!');
            document.removeEventListener('keyup', control);
            document.body.addEventListener('touchstart', touchstart);
            document.body.addEventListener('touchmove', touchstart);
            document.body.addEventListener('touchend', touchstart);

            break;
          }
        }
      }
    }
    function checkForLoose(){
       //check for loose
       let zero = 0;
       for(i=0; i< width * width; i++){
         if(squares[i].innerHTML == " "){
           zero++;
         }
       }
       if(zero == 0){
           window.alert("You Loose!!");
           document.removeEventListener('keyup', control);
           document.body.addEventListener('touchstart', touchstart);
           document.body.addEventListener('touchmove', touchstart);
           document.body.addEventListener('touchend', touchstart);
         }
    }
  });
