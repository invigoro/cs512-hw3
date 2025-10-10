function drawPlanets() {
     //Main Planet
      let p1 = createShape("Sphere");
      p1.rotX = -.1;
      p1.scaX = 0.5;
      p1.scaY = 0.5;
      p1.scaZ = 0.5;
      p1.rotZSpeed = 5.0;
      p1.rotYSpeed = 1.0;
      p1.rotXSpeed = 1.0;
      p1.setColors([1, 1, 1], [1,1,1]);

      //Terrain
      let co1 = createShape("Cone", p1);
      co1.posY = 0.8;
      co1.scaY = 0.5;
      co1.scaX = 0.5;
      co1.scaZ = 0.5;
      let co2 = createShape("Cone", p1);
      co2.posY = -0.8;
      co2.scaY = 0.5;
      co2.scaX = 0.5;
      co2.scaZ = 0.5;
      co2.rotX = Math.PI;
      let co3 = createShape("Cone", p1);
      co3.posX = 0.8;
      co3.scaY = 0.6;
      co3.scaX = 0.6;
      co3.scaZ = 0.6;
      co3.rotZ = -Math.PI / 2;
      let cy1 = createShape("Cylinder", p1);
      cy1.posZ = 0.9;
      cy1.scaX = 0.2;
      cy1.scaY = 0.2;
      cy1.scaZ = 0.2;
      cy1.rotX = Math.PI / 2;

      //planet 1 ring
      // let t1 = createShape("Torus", s1);
      // t1.scaX = 2;
      // t1.scaY = 1;
      // t1.scaZ = 2;

      //Planet 2
      let p2 = createShape("Sphere", p1);
      p2.posX = 3;
      p2.scaX = 0.3;
      p2.scaY = 0.3;
      p2.scaZ = 0.3;
      p2.rotZSpeed = 10;
      p2.setColors([1, 0, 0], [1, 0, 0])

      //Planet 2 rings
      let t1 = createShape("Torus", p2);
      t1.rotX = 90;
      t1.scaX = 2;
      t1.scaZ = 2;
      t1.scaY = .2;
      //t1.rotZSpeed = 5;

      //Planet 2 Moon
      let p2m1 = createShape("Sphere", p2);
      p2m1.posX = 4;
      p2m1.scaX = 0.5;
      p2m1.scaY = 0.5;
      p2m1.scaZ = 0.5;
      p2m1.rotZSpeed = 10;

      //Planet 2 Moon orbital satellite
      let p2m1s1 = createShape("Tetrahedron", p2m1);
      p2m1s1.scaX = 0.25;
      p2m1s1.scaY = 0.25;
      p2m1s1.scaZ = 0.25;
      p2m1s1.posX = 2;

      //Planet 3
      let p3 = createShape("Sphere", p1)
      p3.posX = 1;
      p3.posY = 5;
      p3.scaX = 0.2;
      p3.scaY = 0.2;
      p3.scaZ = 0.2;
      p3.rotX = Math.PI;
      p3.rotYSpeed = 5;
      //Planet 3 Moon1
      let p3m1 = createShape("Sphere", p3);
      p3m1.posX = 4;
      p3m1.scaX = 0.5;
      p3m1.scaY = 0.5;
      p3m1.scaZ = 0.5;
      p3m1.rotZSpeed = 10;
      //Planet 3 Moon2
      let p3m2 = createShape("Sphere", p3);
      p3m2.posX = -2.5;
      p3m2.poxY = 1;
      p3m2.scaX = 0.5;
      p3m2.scaY = 0.5;
      p3m2.scaZ = 0.5;
      p3m2.rotZSpeed = 50;
    //Planet 3 Moon orbital satellite
      let p3m2s1 = createShape("Cube", p3m2);
      p3m2s1.scaX = 0.25;
      p3m2s1.scaY = 0.25;
      p3m2s1.scaZ = 0.25;
      p3m2s1.posX = 2;

      //Planet 4
      let p4 = createShape("Sphere", p1)
      p4.posX = -3.5;
      p4.posY = -2;
      p4.scaX = .15;
      p4.scaY = 0.15;
      p4.scaZ = 0.15;
      p4.rotX = Math.PI;
      p4.rotYSpeed = 15;

      //Planet 4 Moon1
      let p4m1 = createShape("Sphere", p4);
      p4m1.posX = 4;
      p4m1.scaX = 0.5;
      p4m1.scaY = 0.5;
      p4m1.scaZ = 0.5;
      p4m1.rotZSpeed = 10;

      //Space Station
      let st1 = createShape("Torus", p1);
      st1.posX = -3;
      st1.posY = 3;
      //st1.rotX = Math.PI /2;
      st1.scaX = 0.2;
      st1.scaY = 0.2;
      st1.scaZ = 0.2;
      st1.rotYSpeed = 30;
      st1.rotZSpeed = 0;
      st1.rotXSpeed = 0;

      //Space Station center cylinder
      let st1cyl1 = createShape("Cylinder", st1);
      st1cyl1.scaX = 0.4;
      st1cyl1.scaY = 1;
      st1cyl1.scaZ = 0.4;

      // Space station ring cylinders
      let nCylinders = 8;
      let torusRadius = 1.4;

for (let i = 0; i < nCylinders; i++) {
    let angle = (i / nCylinders) * 2 * Math.PI;
    let cx = torusRadius * Math.cos(angle);
    let cy = torusRadius * Math.sin(angle);

    let cyl = createShape("Cylinder", st1);
    cyl.posX = cx;
    cyl.posZ = cy;
    cyl.posY = 0;       
    cyl.scaX = 0.2;
    cyl.scaY = 0.6;
    cyl.scaZ = 0.2;
}
}