class Bob {
  constructor(x, y) {
    var options = {
      isStatic: false,
      restitution: 0.2,
      friction: 0.1,
      density: 0.3,
    };
    this.body = Bodies.circle(x, y, 20, options);

    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    fill("pink");
    ellipseMode(RADIUS);
    ellipse(pos.x, pos.y, 20, 20);
  }
}
