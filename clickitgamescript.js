var scoresVar = 0;

var position = 20;
var block = document.getElementById('block');
var t = setInterval(move, 5);
  function move() {
    if (position <= 566 ) {
    position += 1;
    block.style.top = position+'px';
    } else if (position == 567) {
    document.getElementById("status").innerHTML = 'Start again';
    document.getElementById('status').style.backgroundColor = '#FF0018';
      if (position == 567) {
        document.getElementById("level").innerHTML = '1';
        document.getElementById('level').style.backgroundColor = '#6BAAD1';
        scoresVar = 0;
        document.getElementById("scores").innerHTML = scoresVar;
        
        
      }
    }
};

  var clickOnBlock = document.getElementById('block');
    
    clickOnBlock.onclick = function() {
    scoresVar += 10;
    document.getElementById("scores").innerHTML = scoresVar;
    position = 20;
    
    document.getElementById("status").innerHTML = 'Active';
    document.getElementById('status').style.backgroundColor = '#6BAAD1';
    
    var randomBlockPosition = Math.floor(Math.random() * (935 - 601 + 1)) + 601;
    block.style.right = randomBlockPosition;
    
    var blockColor = [
      '#BF16E5',
      '#CD0029',
      '#6DCD00',
      '#003ACD',
      '#CD00BF',
      '#B5CD00',
      '#18CD7C'
    ]
    var randomBlockColor = Math.floor(Math.random() * blockColor.length);
    document.getElementById('block').style.backgroundColor = blockColor[randomBlockColor];
    
    var randomBlockSize = Math.floor(Math.random() * (60 - 20 + 1)) + 20;
    block.style.width = randomBlockSize;
    
    if (scoresVar < 50) {
        document.getElementById("level").innerHTML = '1';
      } else if (scoresVar >= 50 && scoresVar < 100) {
        document.getElementById("level").innerHTML = '2';
        document.getElementById('level').style.backgroundColor = '#FFF600';
      } else if (scoresVar >= 100 && scoresVar < 500) {
        document.getElementById("level").innerHTML = '3';
        document.getElementById('level').style.backgroundColor = '#FF19E8';
      } else if (scoresVar >= 500 && scoresVar < 1000) {
        document.getElementById("level").innerHTML = '4';
        document.getElementById('level').style.backgroundColor = '#00BFFF';
      } else if (scoresVar >= 1000 && scoresVar < 1500) {
        document.getElementById("level").innerHTML = '5';
        document.getElementById('level').style.backgroundColor = '#FF2DCA';
      } else if (scoresVar >= 1500 && scoresVar < 2500) {
        document.getElementById("level").innerHTML = '6';
        document.getElementById('level').style.backgroundColor = '#FFC800';
      } else if (scoresVar >= 2500 && scoresVar < 3000) {
        document.getElementById("level").innerHTML = '7';
        document.getElementById('level').style.backgroundColor = '#FF0077';
      } else if (scoresVar >= 3000 && scoresVar < 5000) {
        document.getElementById("level").innerHTML = '8';
        document.getElementById('level').style.backgroundColor = '#0AFF2F';
      } else if (scoresVar >= 5000 && scoresVar < 8000) {
        document.getElementById("level").innerHTML = '9';
        document.getElementById('level').style.backgroundColor = '#FF870F';
      } else if (scoresVar >= 8000) {
        document.getElementById("level").innerHTML = 'Maniac!';
        document.getElementById('level').style.backgroundColor = '#FF0D00';
      }
     };