let obs_lat = 0;
let lerp_start = 0;
let lerp_end = 0;
// let startSec = 0;
let step = 10;
let blockTill = false;
let obs_lng = 0;
let obs_alt = 0;
let obs_lng_slid;
let obs_lat_slid;
let sat_lat = 0;
let sat_lng = 0;
let r = 300;
let s_alt = 150;
let rot = 0;
let limit = 10;
let currentSec = 0;
let lerpFlag = 0;
let lat_grad = [
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
];
let lng_grad = [
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
];
let sat_buf = [
  {
    latitude: 0,
    longitude: 0,
    altitude: 200,
    velocity: 24000,
  },
  {
    latitude: 0,
    longitude: 0,
    altitude: 200,
    velocity: 24000,
  },
  {
    latitude: 0,
    longitude: 0,
    altitude: 200,
    velocity: 24000,
  },
  {
    latitude: 0,
    longitude: 0,
    altitude: 200,
    velocity: 24000,
  },
  {
    latitude: 0,
    longitude: 0,
    altitude: 200,
    velocity: 24000,
  },
  {
    latitude: 0,
    longitude: 0,
    altitude: 200,
    velocity: 24000,
  },
  {
    latitude: 0,
    longitude: 0,
    altitude: 200,
    velocity: 24000,
  },
  {
    latitude: 0,
    longitude: 0,
    altitude: 200,
    velocity: 24000,
  },
  {
    latitude: 0,
    longitude: 0,
    altitude: 200,
    velocity: 24000,
  },
  {
    latitude: 0,
    longitude: 0,
    altitude: 200,
    velocity: 24000,
  },
];
let new_sat_buf = [
  {
    latitude: 0,
    longitude: 0,
    altitude: 200,
    velocity: 24000,
  },
  {
    latitude: 0,
    longitude: 0,
    altitude: 200,
    velocity: 24000,
  },
  {
    latitude: 0,
    longitude: 0,
    altitude: 200,
    velocity: 24000,
  },
  {
    latitude: 0,
    longitude: 0,
    altitude: 200,
    velocity: 24000,
  },
  {
    latitude: 0,
    longitude: 0,
    altitude: 200,
    velocity: 24000,
  },
  {
    latitude: 0,
    longitude: 0,
    altitude: 200,
    velocity: 24000,
  },
  {
    latitude: 0,
    longitude: 0,
    altitude: 200,
    velocity: 24000,
  },
  {
    latitude: 0,
    longitude: 0,
    altitude: 200,
    velocity: 24000,
  },
  {
    latitude: 0,
    longitude: 0,
    altitude: 200,
    velocity: 24000,
  },
  {
    latitude: 0,
    longitude: 0,
    altitude: 200,
    velocity: 24000,
  },
];

let font;
let jp;
let shape;
function preload() {
  font = loadFont("./Orbit-Regular.ttf");
  jp = loadFont("./NotoSansJP-VariableFont_wght.ttf");
  itl = loadFont("./CormorantGaramond-Italic-VariableFont_wght.ttf");
  shape = loadModel("./ISS_stationary.obj");
  // shape = loadModel("./scene.gltf")
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // obs_lng_slid = createSlider(0, 360);
  // obs_lat_slid = createSlider(-90, 90);
  // obs_lng_slid.position(10, 10);
  // obs_lat_slid.position(10, 30);

  textFont(font);
}
async function draw() {
  // obs_lat = obs_lat_slid.value();
  // obs_lng = obs_lng_slid.value();

  // console.log("obs_lat:", obs_lat, "obs_lng:", obs_lng);
  background(10);
  push();

  translate(-200, 300, 100);
  rotateX(PI / 12);
  rotateZ(PI / 6);
  rotateY((PI / 12) * (1 + mouseX / width));
  stroke(255, 255, 255, 30);
  scale(10);
  // noFill();
  model(shape);
  pop();
  // orbitControl();
  fill(255, 0, 0);
  textSize(60);
  // textFont(font);
  // text("Trackthe#25544", width / 2 - 600, -height / 2 + 60);
  // textFont(itl);
  // text("WhereTheISS.At", width / 2 - 380, -height / 2 + 120)
  //   textFont(font);
  noStroke();
  fill(255);
  textSize(20);
  push();

  // text(obs_lng, -width / 2 + 150, -height / 2 + 25);
  // text(obs_lat, -width / 2 + 150, -height / 2 + 45);
  // textSize(24);
  // translate(r,0,0);
  text("0", r + 40, 0);
  pop();

  push();
  // translate(0,-r,0);
  text("90N", 0, -r - 40);
  pop();

  push();
  // translate(0,r,0);
  text("90S", 0, r + 60);
  pop();
  // fill(255,255,255,100)
  noFill();
  stroke(255, 255, 255, 50);

  rotateX(-0.5);
  rotateY(rot);

  // fill(100);
  // for (let i = 0; i < 360; i += 10) {
  //   for (let j = 0; j < 360; j += 10) {
  //     push();
  //     let x = r * cos(radians(i)) * sin(radians(j));
  //     let y = r * sin(radians(i));
  //     let z = r * cos(radians(i)) * cos(radians(j));
  //     push();
  //     translate(x, y, z);
  //     circle(0,0,1)
  //     pop();
  //   }
  // }
  sphere(r);

  noStroke();
  // let x = r * cos(radians(obs_lat)) * sin(radians(obs_lng));
  // let y = r * sin(radians(obs_lat));
  // let z = r * cos(radians(obs_lat)) * cos(radians(obs_lng));
  // push();
  // translate(x, y, z);
  // fill(50);
  // box(10);
  // pop();
  rot += 0.005;
  // console.log("sat_buf:", sat_buf);
  // console.log("new_sat_vuf:", new_sat_buf);

  for (let j = 0; j < sat_buf.length; j++) {
    const cur = millis() > lerp_end ? lerp_end : millis();
    lerpFlag = millis() > lerp_end;
    const sat_lat = lerpFlag
      ? new_sat_buf[j].latitude
      : lerp(
          sat_buf[j].latitude,
          new_sat_buf[j].latitude,
          (cur - lerp_start) / (lerp_end - lerp_start)
        );

    const inverse = abs(new_sat_buf[j].longitude - sat_buf[j].longitude) > 180 ? true : false;
    let s = sat_buf[j].longitude
    let e = new_sat_buf[j].longitude
    if (inverse) {
      if (s > e) {
        e += 360
      } else {
        s += 360
      }
    }
    const sat_lng = lerpFlag
      ? new_sat_buf[j].longitude
      : lerp(
          s,
          e,
          (cur - lerp_start) / (lerp_end - lerp_start)
        );
    let sat_alt = lerpFlag
      ? new_sat_buf[j].altitude
      : lerp(
          sat_buf[j].altitude,
          new_sat_buf[j].altitude,
          (cur - lerp_start) / (lerp_end - lerp_start)
        );
    sat_alt *= r / 1280;
    const sat_vel = lerp(
      sat_buf[j].velocity,
      new_sat_buf[j].velocity,
      (cur - lerp_start) / (lerp_end - lerp_start)
    );
    // console.log();

    let sx = (r + sat_alt) * cos(radians(sat_lat)) * sin(radians(sat_lng));
    let sy = (r + sat_alt) * sin(radians(sat_lat));
    let sz = (r + sat_alt) * cos(radians(sat_lat)) * cos(radians(sat_lng));
    push();
    translate(sx, sy, sz);
    fill(255, 0, 0, 200 * (j / sat_buf.length));
    sphere(10);
    rotateY(-rot);
    if (j == sat_buf.length - 1) {
      fill(255, 50, 50);
      console.log(currentSec);
      text(`${new Date(currentSec * 1000)}`, 0, -30);
      text(`${Number(sat_lat).toFixed(4)} ${Number(sat_lng).toFixed(4)}`, 0, 0);
    }
    // fill(255);
    text(`lat_grad: ${lat_grad[j]} lng_grad: ${lng_grad[j]}`, 0, 0);
    // noFill();
    pop();
  }
  //   // if (sat_buf.length >1) sat_buf.splice(0,1)
  // const a  =new Date(millis())
  //   console.log(a)
}
async function keyPressed() {
  if (key === "r") {
    if (millis() < blockTill) return;
    currentSec = currentSec !== 0 ? currentSec : Math.round(new Date() / 1000);
    let timestamplist = "";
    for (let i = 0; i < limit; i++) {
      timestamplist += currentSec.toString();
      if (i != limit - 1) timestamplist += ",";
      currentSec += 150;
    }
    const res = await fetchData({ id: 25544, timestamplist });

    for (let i = 0; i < limit; i++) {
      res[i].latitude += 360;
      res[i].longitude += 360;
      lat_grad[i] =
        res[i].latitude - new_sat_buf[i].latitude > 0 ? true : false;
      lng_grad[i] =
        res[i].longitude - new_sat_buf[i].longitude > 0 ? true : false;
    }
    lerp_start = millis();
    lerp_end = lerp_start + 3000;
    sat_buf = new_sat_buf;
    new_sat_buf = res;
    console.log("stabled");
    lerpFlag = true;
    blockTill = millis() + 1500;
  }
}
