function Hero(image, top, left, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function () {
    return (
      "<img width = '" +
      this.size +
      "'" +
      "height = '" +
      this.size +
      "'" +
      "src = '" +
      this.image +
      "'" +
      "style = 'top: " +
      this.top +
      "px; left: " +
      this.left +
      "px;position:absolute;' />"
    );
  };

  this.move = function () {
    this.left += 5;
    this.top += 2;
    console.log("ok: " + this.left);
  };
}

var hero = new Hero("hero1.png", 20, 30, 200);

function start() {
  if (hero.left < window.innerWidth - hero.size) {
    hero.move();
  }
  document.getElementById("game").innerHTML = hero.getHeroElement();
  requestAnimationFrame(start);
}

start();
