window.onload = () => {
  const table = document.getElementById("table");
  const td = document.querySelectorAll("td");
  const X = `<i class="X fas fa-times"></i>`;
  const O = `<i class="O fab fa-opera"></i>`;
  const modal = document.getElementById("modal");
  const winner = document.getElementById("winner");
  const loser = document.getElementById("loser");
  const draw = document.getElementById("draw");
  const modal_content = document.getElementById("modal-content");
  const restart = document.getElementById("restart");
  const P1Score = document.getElementById("P1Score");
  const P2Score = document.getElementById("P2Score");

  restart.addEventListener("click", restartGame);

  td.forEach(t => {
    t.addEventListener("click", playGame);
  });

  let turn = false;
  // storing winner td's
  let winArr = [];
  // For checking winner
  const arr = [O, O, O];
  const arr1 = [X, X, X];

  // Scoreboard
  let scoreboard = {
    p1: 0,
    p2: 0
  };

  function playGame(e) {
    turn = turn ? false : true;
    e.target.innerHTML = turn ? X : O;
    e.target.removeEventListener("click", playGame);

    // Showing Winner
    if (P1Win()) {
      console.log("Player 1 Wins");
      removeEvent();
      showWinner(P1Win, P2Win);
      // Incrementing score
      scoreboard.p1++;
      // Adding scores
      P1Score.innerHTML = scoreboard.p1;
      P2Score.innerHTML = scoreboard.p2;
    }
    if (P2Win()) {
      console.log("Player 2 Wins");
      removeEvent();
      showWinner(P1Win, P2Win);
      // Incrementing score
      scoreboard.p2++;
      // Adding scores
      P1Score.innerHTML = scoreboard.p1;
      P2Score.innerHTML = scoreboard.p2;
    }

    // Showing Draw If Neccessary
    showDraw();
  }

  function P2Win() {
    // checking rows
    let checkRow1 = arr.every((v, i) => {
      if (v == table.rows[0].cells[i].innerHTML) {
        winArr[i] = table.rows[0].cells[i];
      }
      return v == table.rows[0].cells[i].innerHTML;
    });

    let checkRow2 = arr.every((v, i) => {
      if (v == table.rows[1].cells[i].innerHTML) {
        winArr[i] = table.rows[1].cells[i];
      }
      return v == table.rows[1].cells[i].innerHTML;
    });

    let checkRow3 = arr.every((v, i) => {
      if (v == table.rows[2].cells[i].innerHTML) {
        winArr[i] = table.rows[2].cells[i];
      }
      return v == table.rows[2].cells[i].innerHTML;
    });

    if (checkRow1 || checkRow2 || checkRow3) {
      return true;
    }

    // checking columns
    let checkColumn1 = arr.every((v, i) => {
      if (v == table.rows[i].cells[0].innerHTML) {
        winArr[i] = table.rows[i].cells[0];
      }
      return v == table.rows[i].cells[0].innerHTML;
    });

    let checkColumn2 = arr.every((v, i) => {
      if (v == table.rows[i].cells[1].innerHTML) {
        winArr[i] = table.rows[i].cells[1];
      }
      return v == table.rows[i].cells[1].innerHTML;
    });

    let checkColumn3 = arr.every((v, i) => {
      if (v == table.rows[i].cells[2].innerHTML) {
        winArr[i] = table.rows[i].cells[2];
      }
      return v == table.rows[i].cells[2].innerHTML;
    });

    if (checkColumn1 || checkColumn2 || checkColumn3) {
      return true;
    }

    // checking diagnols
    let checkDiagnol1 = arr.every((v, i) => {
      if (v == table.rows[i].cells[i].innerHTML) {
        winArr[i] = table.rows[i].cells[i];
      }
      return v == table.rows[i].cells[i].innerHTML;
    });

    let k = 3;
    let checkDiagnol2 = arr.every((v, i) => {
      k--;
      if (v == table.rows[i].cells[k].innerHTML) {
        winArr[i] = table.rows[i].cells[k];
      }

      return v == table.rows[i].cells[k].innerHTML;
    });

    if (checkDiagnol1 || checkDiagnol2) {
      return true;
    }

    return false;
  }

  function P1Win() {
    // checking rows
    let checkRow1 = arr1.every((v, i) => {
      if (v == table.rows[0].cells[i].innerHTML) {
        winArr[i] = table.rows[0].cells[i];
      }
      return v == table.rows[0].cells[i].innerHTML;
    });

    let checkRow2 = arr1.every((v, i) => {
      if (v == table.rows[1].cells[i].innerHTML) {
        winArr[i] = table.rows[1].cells[i];
      }
      return v == table.rows[1].cells[i].innerHTML;
    });

    let checkRow3 = arr1.every((v, i) => {
      if (v == table.rows[2].cells[i].innerHTML) {
        winArr[i] = table.rows[2].cells[i];
      }
      return v == table.rows[2].cells[i].innerHTML;
    });

    if (checkRow1 || checkRow2 || checkRow3) {
      return true;
    }

    // checking columns
    let checkColumn1 = arr1.every((v, i) => {
      if (v == table.rows[i].cells[0].innerHTML) {
        winArr[i] = table.rows[i].cells[0];
      }
      return v == table.rows[i].cells[0].innerHTML;
    });

    let checkColumn2 = arr1.every((v, i) => {
      if (v == table.rows[i].cells[1].innerHTML) {
        winArr[i] = table.rows[i].cells[1];
      }
      return v == table.rows[i].cells[1].innerHTML;
    });

    let checkColumn3 = arr1.every((v, i) => {
      if (v == table.rows[i].cells[2].innerHTML) {
        winArr[i] = table.rows[i].cells[2];
      }
      return v == table.rows[i].cells[2].innerHTML;
    });

    if (checkColumn1 || checkColumn2 || checkColumn3) {
      return true;
    }

    // checking diagnols
    let checkDiagnol1 = arr1.every((v, i) => {
      if (v == table.rows[i].cells[i].innerHTML) {
        winArr[i] = table.rows[i].cells[i];
      }
      return v == table.rows[i].cells[i].innerHTML;
    });

    let k = 3;
    let checkDiagnol2 = arr1.every((v, i) => {
      k--;
      if (v == table.rows[i].cells[k].innerHTML) {
        winArr[i] = table.rows[i].cells[k];
      }
      return v == table.rows[i].cells[k].innerHTML;
    });

    if (checkDiagnol1 || checkDiagnol2) {
      return true;
    }

    return false;
  }

  function removeEvent() {
    td.forEach(t => {
      t.removeEventListener("click", playGame);
    });
  }

  function showWinner(P1Win, P2Win) {
    winArr.forEach(v => (v.style.backgroundColor = "rgba(51, 255, 0,0.5)"));
    setTimeout(function() {
      modal.style.display = "flex";
      modal_content.style.display = "inline";
      draw.style.display = "none";
      if (P1Win()) {
        winner.innerHTML = "Player 1";
        loser.innerHTML = "Player 2";
      }
      if (P2Win()) {
        winner.innerHTML = "Player 2";
        loser.innerHTML = "Player 1";
      }
    }, 1000);
  }

  function showDraw() {
    let row1 = arr.every((v, i) => {
      if (
        v == table.rows[0].cells[i].innerHTML ||
        arr1[i] == table.rows[0].cells[i].innerHTML
      ) {
        return true;
      } else {
        return false;
      }
    });

    let row2 = arr.every((v, i) => {
      if (
        v == table.rows[1].cells[i].innerHTML ||
        arr1[i] == table.rows[1].cells[i].innerHTML
      ) {
        return true;
      } else {
        return false;
      }
    });

    let row3 = arr.every((v, i) => {
      if (
        v == table.rows[2].cells[i].innerHTML ||
        arr1[i] == table.rows[2].cells[i].innerHTML
      ) {
        return true;
      } else {
        return false;
      }
    });
    setTimeout(() => {
      if (row1 && row2 && row3) {
        if (!P1Win() && !P2Win()) {
          modal.style.display = "flex";
          draw.style.display = "inline";
          modal_content.style.display = "none";
          console.log("Its a Draw");
        }
      }
    }, 1000);
  }

  function restartGame() {
    td.forEach(t => {
      t.addEventListener("click", playGame);
    });
    for (let i in arr) {
      for (let k in arr) {
        table.rows[i].cells[k].innerHTML = "";
        table.rows[i].cells[k].style.backgroundColor = "white";
      }
    }
    restart.style.display = "none";
  }

  modal.addEventListener("click", function() {
    this.style.display = "none";
    restart.style.display = "inline";
  });
};
