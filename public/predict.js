const female_data = [{"year":2020,"sex":"female","0s":2942.7110000000002,"10s":2199.989,"20s":2720.322,"30s":3162.306,"40s":3371.739,"50s":4254.519,"60s":3997.2709999999997,"70s":2459.549,"80s":1577.598,"90s":561.319},{"year":2025,"sex":"female","0s":1594.488,"10s":2187.860,"20s":2827.802,"30s":3270.777,"40s":3777.484,"50s":4330.649,"60s":4016.651,"70s":2346.530,"80s":1311.445,"90s":267.157},{"year":2030,"sex":"female","0s":1575.125,"10s":1960.042,"20s":2317.470,"30s":3344.040,"40s":3454.199,"50s":4088.144,"60s":4237.793,"70s":3146.242,"80s":1486.966,"90s":373.617},{"year":2035,"sex":"female","0s":1678.894,"10s":1582.162,"20s":2200.136,"30s":2893.110,"40s":3294.388,"50s":3810.674,"60s":4306.330,"70s":3827.534,"80s":1828.206,"90s":464.086},{"year":2040,"sex":"female","0s":1586.317,"10s":1562.503,"20s":1973.048,"30s":2380.670,"40s":3368.351,"50s":3490.007,"60s":4075.569,"70s":4059.747,"80s":2510.846,"90s":555.160},{"year":2045,"sex":"female","0s":1442.437,"10s":1665.509,"20s":1600.986,"30s":2264.505,"40s":2921.219,"50s":3334.208,"60s":3809.914,"70s":4150.301,"80s":3060.629,"90s":733.077},{"year":2050,"sex":"female","0s":1321.028,"10s":1574.174,"20s":1580.388,"30s":2036.122,"40s":2410.952,"50s":3411.466,"60s":3496.879,"70s":3942.418,"80s":3281.877,"90s":1049.711}];

const male_data = [{"year":2020,"sex":"male","0s":2994.3,"10s":2333.5950000000003,"20s":2972.398,"30s":3604.346,"40s":3990.4260000000004,"50s":4354.907,"60s":3938.478,"70s":2217.6820000000002,"80s":1068.786,"90s":210.93599999999998},{"year":2025,"sex":"male","0s":1679.699,"10s":2316.589,"20s":3094.403,"30s":3735.351,"40s":4008.994,"50s":4385.654,"60s":3881.266,"70s":2009.662,"80s":779.712,"90s":82.953},{"year":2030,"sex":"male","0s":1661.072,"10s":2062.431,"20s":2471.743,"30s":3768.464,"40s":3777.894,"50s":4194.302,"60s":4128.871,"70s":2762.189,"80s":979.973,"90s":136.376},{"year":2035,"sex":"male","0s":1770.625,"10s":1665.475,"20s":2302.636,"30s":3124.593,"40s":3740.631,"50s":3983.219,"60s":4238.323,"70s":3439.891,"80s":1288.641,"90s":190.341},{"year":2040,"sex":"male","0s":1673.014,"10s":1646.384,"20s":2046.347,"30s":2491.117,"40s":3777.181,"50s":3764.588,"60s":4080.357,"70s":3709.372,"80s":1847.669,"90s":257.129},{"year":2045,"sex":"male","0s":1521.295,"10s":1755.099,"20s":1655.057,"30s":2323.047,"40s":3137.942,"50s":3739.382,"60s":3902.689,"70s":3865.323,"80s":2325.560,"90s":365.859},{"year":2050,"sex":"male","0s":1393.254,"10s":1658.948,"20s":1636.294,"30s":2068.250,"40s":2507.150,"50s":3783.936,"60s":3706.943,"70s":3758.905,"80s":2567.872,"90s":557.933}];

total_data = [51269,51905,51926,51629,50855,49574,47744]

averageage_data =[43.7,45.4,47.6,49.6,51.4,53.1,54.4]

aging_data = [16.0,20.3,25.0,29.5,33.9,37.0,39.8]

const num = document.querySelectorAll('.population__bar__num');
const chart = document.querySelectorAll('.population__bar__value');
const year = document.querySelector('.population__year');
const total = document.querySelector('.population__title__value');
const averageAge = document.querySelector('.average__age__value');
const aging = document.querySelector('.aging__rate__value')
const chartStart = document.querySelector('.population__chart__start');
const chartStop = document.querySelector('.population__chart__stop');
const volumeUp = document.querySelector('.volume__up');
const volumeOff = document.querySelector('.volume__off');
const chartResume = document.querySelector('.population__chart__resume');


let yearNumCount = 0

const nSecond = 5,
      resolutionMS = 33;



chartStop.style.display = "none";
chartResume.style.opacity = "0";
chartResume.style.pointerEvents = "none"

let activate = true;
var audio = new Audio('/music/BattleofKings.mp3');
audio.volume = 0;      


function chart_start(){
  activate = true;
  chartStop.style.display = "";
  chartStart.style.display = "none";
  chartResume.style.opacity = "0";
  chartResume.style.pointerEvents = "none"
  dropUp.style.opacity="0"
  dropDown.style.opacity="0"
  audio.play();
  delayPop(yearNumCount,"90s","male",0);
  delayPop(yearNumCount,"80s","male",1);
  delayPop(yearNumCount,"70s","male",2);
  delayPop(yearNumCount,"60s","male",3);
  delayPop(yearNumCount,"50s","male",4);
  delayPop(yearNumCount,"40s","male",5);
  delayPop(yearNumCount,"30s","male",6);
  delayPop(yearNumCount,"20s","male",7);
  delayPop(yearNumCount,"10s","male",8);
  delayPop(yearNumCount,"0s","male",9);
  delayPop(yearNumCount,"90s","female",10);
  delayPop(yearNumCount,"80s","female",11);
  delayPop(yearNumCount,"70s","female",12);
  delayPop(yearNumCount,"60s","female",13);
  delayPop(yearNumCount,"50s","female",14);
  delayPop(yearNumCount,"40s","female",15);
  delayPop(yearNumCount,"30s","female",16);
  delayPop(yearNumCount,"20s","female",17);
  delayPop(yearNumCount,"10s","female",18);
  delayPop(yearNumCount,"0s","female",19);
  delayYear(yearNumCount);
  delayTotal(yearNumCount);
  delayAverage(yearNumCount);
  delayAging(yearNumCount);
}



console.log(total_data[0])

function stop() {
  
  activate = false;

  chartStop.style.display = "none";
  // audio.pause();
  // audio.currentTime=0;
}

function delayYear(d) {
  if(d==6 || activate==false){
    audio.pause();
    audio.currentTime=0;
    chartStop.style.display = "none";
    chartStart.style.display="";
    chartStart.innerHTML = "처음부터";
    if(d==6&&activate==true){
      chartResume.style.opacity = '0';
      chartResume.style.pointerEvents = 'none';
    } else if(d!=6&&activate==false){
      chartResume.style.opacity = '1';
      chartResume.style.pointerEvents = 'auto';
      console.log('hi')
    };

    dropUp.style.display = "";
    dropDown.style.display = "";
    yearNumCount=(Number(year.innerHTML)-1950)/5;
    return false; 
  }
  countYear(d);
  sleep(5000).then(() => delayYear(d+1));
}

function delayTotal(d) {
  if(d==6 || activate==false){
    return false;
  }
  countTotal(d);
  sleep(5000).then(() => delayTotal(d+1));
}

function delayAverage(d){
  if(d==6 || activate==false){
    return false;
  }
  countAverage(d);
  sleep(5000).then(() => delayAverage(d+1));
}

function delayAging(d){
  if(d==6 || activate==false){
    return false;
  }
  countAging(d);
  sleep(5000).then(() => delayAging(d+1));
}

// 5초마다 숫자 카운팅 이어서하기 
function delayPop(order,age,sex,pos) {
  if(order==6 || activate==false){
    return false;
  }
  countIni(order,age,sex,pos);
  console.log("complete")
  sleep(5000).then(() => delayPop(order+1,age,sex,pos));
}

chartStart.addEventListener('click',()=>{
  if(chartStart.innerHTML=="처음부터"){
    yearNumCount=0;
    chartStart.innerHTML="시작하기"
    dropUp.style.opacity="1"
    dropDown.style.opacity="1"
    chartResume.style.opacity = "0";
    chartResume.style.pointerEvents = "none"
    year.innerHTML = 1950;
    eachYearChart(0);
  } else{
    chart_start()
  }
})



// order: 연도, age: 나이, sex:성별, pos:입력값위치 

// 숫자 카운팅 함수
function countIni(order,age,sex,pos) {
  if (sex == "male") {
    data=male_data
    data= male_data;
  } else if (sex=="female") {
    data = female_data;
  };
  let startNum = Math.floor(data[order][age])*1000,
  endNum = Math.floor(data[order+1][age])*1000,
  deltaNum = (endNum - startNum) / (1000 / resolutionMS) / nSecond;

  let handle = setInterval(() => {
    let x = startNum.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    num[pos].innerHTML = x.toString();
    chart[pos].style.width = startNum/58000 + '%';
    // if already updated the endNum, stop
    if(startNum<=endNum){
      if (startNum >= endNum) clearInterval(handle);
    
    startNum += deltaNum;
    startNum = Math.min(startNum, endNum);
    } else if(startNum>endNum){
      if (startNum <= endNum) clearInterval(handle);
    
    startNum += deltaNum;
    startNum = Math.max(startNum, endNum);
    }
    
  }, resolutionMS);
};



function countYear(counting) {
  let startNum = male_data[counting]["year"],
  endNum = male_data[counting+1]["year"],
  deltaNum = (endNum - startNum) / (1000 / resolutionMS) / nSecond;
  console.log(startNum);
  var handle = setInterval(() => {
    var x = startNum.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    year.innerHTML = x.toString().replace(",", "");
    
    // if already updated the endNum, stop
    if (startNum >= endNum) clearInterval(handle);
    
    startNum += deltaNum;
    startNum = Math.min(startNum, endNum);
  }, resolutionMS);
};

function countTotal(counting) {
  let startNum = Math.floor(total_data[counting]/10),
  endNum = Math.floor(total_data[counting+1]/10),
  deltaNum = (endNum - startNum) / (1000 / resolutionMS) /nSecond;
  console.log(startNum);
  var handle = setInterval(() => {
    var x = startNum.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    total.innerHTML = x.toString()+"만";
    
    if(startNum<=endNum){
      if (startNum >= endNum) clearInterval(handle);
    
    startNum += deltaNum;
    startNum = Math.min(startNum, endNum);
    } else if(startNum>endNum){
      if (startNum <= endNum) clearInterval(handle);
    
    startNum += deltaNum;
    startNum = Math.max(startNum, endNum);
    }
    
  }, resolutionMS);
};



function countAverage(counting) {
  let startNum = averageage_data[counting]*10,
  endNum = averageage_data[counting+1]*10,
  deltaNum = (endNum - startNum) / (1000 / resolutionMS) /nSecond;
  console.log(startNum);
  var handle = setInterval(() => {
    var x = startNum.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    natNum=x.substr(0,2);
    decNum=x.substr(2,1);
    averageAge.innerHTML = natNum+"."+decNum;
    // averageAge.innerHTML = x.toString();
    
    // if already updated the endNum, stop
    if (startNum >= endNum) clearInterval(handle);
    
    startNum += deltaNum;
    startNum = Math.min(startNum, endNum);
  }, resolutionMS);
};

function countAging(counting) {
  let startNum = aging_data[counting]*10,
  endNum = aging_data[counting+1]*10,
  deltaNum = (endNum - startNum) / (1000 / resolutionMS) /nSecond;
  console.log(startNum);
  var handle = setInterval(() => {
    var x = startNum.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    if(Number(x)<100){
      natNum=x.substr(0,1);
      decNum=x.substr(1,1);
    } else {
      natNum=x.substr(0,2);
      decNum=x.substr(2,1);
    }
    aging.innerHTML = natNum+"."+decNum+"%";
    // averageAge.innerHTML = x.toString();
    
    // if already updated the endNum, stop
    if (startNum >= endNum) clearInterval(handle);
    
    startNum += deltaNum;
    startNum = Math.min(startNum, endNum);
  }, resolutionMS);
};

// 볼륨관련 함수
volumeUp.style.display='none';

volumeUp.addEventListener('click',()=>{
  volumeUp.style.display = 'none';
  volumeOff.style.display = '';
  audio.volume = 0;
})

volumeOff.addEventListener('click',()=>{
  volumeUp.style.display = '';
  volumeOff.style.display = 'none';
  audio.volume = 1;
})

// 년도 위,아래 토글
const dropUp = document.querySelector('.drop__up');
const dropDown = document.querySelector('.drop__down');
let yearNum = Number(year.innerHTML)


dropUp.addEventListener('click',()=>{
  if(yearNum == 2050) {
    yearNumCount = 0
    yearNum = 2020;
  } else{
    yearNumCount = yearNumCount+1;
    yearNum = yearNum + 5;
  }
  
  year.innerHTML = yearNum.toString();
  console.log(yearNumCount);
  eachYearChart(yearNumCount);
})

dropDown.addEventListener('click',()=>{
  if(yearNum == 2020) {
    yearNumCount = 6;
    yearNum = 2050;
  } else{
    yearNumCount = yearNumCount-1
    yearNum = yearNum-5;
  }
  console.log(yearNum);
  year.innerHTML = yearNum.toString();
  console.log(yearNumCount);
  eachYearChart(yearNumCount);
})

function eachYearChart(x) {
  num[0].innerHTML = Math.floor(male_data[x]["90s"]*1000)
  num[1].innerHTML = Math.floor(male_data[x]["80s"]*1000)
  num[2].innerHTML = Math.floor(male_data[x]["70s"]*1000)
  num[3].innerHTML = Math.floor(male_data[x]["60s"]*1000)
  num[4].innerHTML = Math.floor(male_data[x]["50s"]*1000)
  num[5].innerHTML = Math.floor(male_data[x]["40s"]*1000)
  num[6].innerHTML = Math.floor(male_data[x]["30s"]*1000)
  num[7].innerHTML = Math.floor(male_data[x]["20s"]*1000)
  num[8].innerHTML = Math.floor(male_data[x]["10s"]*1000)
  num[9].innerHTML = Math.floor(male_data[x]["0s"]*1000)
  num[10].innerHTML = Math.floor(female_data[x]["90s"]*1000)
  num[11].innerHTML = Math.floor(female_data[x]["80s"]*1000)
  num[12].innerHTML = Math.floor(female_data[x]["70s"]*1000)
  num[13].innerHTML = Math.floor(female_data[x]["60s"]*1000)
  num[14].innerHTML = Math.floor(female_data[x]["50s"]*1000)
  num[15].innerHTML = Math.floor(female_data[x]["40s"]*1000)
  num[16].innerHTML = Math.floor(female_data[x]["30s"]*1000)
  num[17].innerHTML = Math.floor(female_data[x]["20s"]*1000)
  num[18].innerHTML = Math.floor(female_data[x]["10s"]*1000)
  num[19].innerHTML = Math.floor(female_data[x]["0s"]*1000)
  chart[0].style.width = Math.floor(male_data[x]["90s"]*1000)/58000 + '%'
  chart[1].style.width = Math.floor(male_data[x]["80s"]*1000)/58000 + '%'
  chart[2].style.width = Math.floor(male_data[x]["70s"]*1000)/58000 + '%'
  chart[3].style.width = Math.floor(male_data[x]["60s"]*1000)/58000 + '%'
  chart[4].style.width = Math.floor(male_data[x]["50s"]*1000)/58000 + '%'
  chart[5].style.width = Math.floor(male_data[x]["40s"]*1000)/58000 + '%'
  chart[6].style.width = Math.floor(male_data[x]["30s"]*1000)/58000 + '%'
  chart[7].style.width = Math.floor(male_data[x]["20s"]*1000)/58000 + '%'
  chart[8].style.width = Math.floor(male_data[x]["10s"]*1000)/58000 + '%'
  chart[9].style.width = Math.floor(male_data[x]["0s"]*1000)/58000 + '%'
  chart[10].style.width = Math.floor(female_data[x]["90s"]*1000)/58000 + '%'
  chart[11].style.width = Math.floor(female_data[x]["80s"]*1000)/58000 + '%'
  chart[12].style.width = Math.floor(female_data[x]["70s"]*1000)/58000 + '%'
  chart[13].style.width = Math.floor(female_data[x]["60s"]*1000)/58000 + '%'
  chart[14].style.width = Math.floor(female_data[x]["50s"]*1000)/58000 + '%'
  chart[15].style.width = Math.floor(female_data[x]["40s"]*1000)/58000 + '%'
  chart[16].style.width = Math.floor(female_data[x]["30s"]*1000)/58000 + '%'
  chart[17].style.width = Math.floor(female_data[x]["20s"]*1000)/58000 + '%'
  chart[18].style.width = Math.floor(female_data[x]["10s"]*1000)/58000 + '%'
  chart[19].style.width = Math.floor(female_data[x]["0s"]*1000)/58000 + '%'
  total.innerHTML = (Math.floor(total_data[x]/10)).toString()+"만";
  averageAge.innerHTML = averageage_data[x].toFixed(1);
  aging.innerHTML = (aging_data[x].toFixed(1)).toString()+"%";
}
// 차트 디폴트값
num[0].innerHTML = Math.floor(male_data[0]["90s"]*1000).toString()
num[1].innerHTML = Math.floor(male_data[0]["80s"]*1000).toString()
num[2].innerHTML = Math.floor(male_data[0]["70s"]*1000).toString()
num[3].innerHTML = Math.floor(male_data[0]["60s"]*1000).toString()
num[4].innerHTML = Math.floor(male_data[0]["50s"]*1000).toString()
num[5].innerHTML = Math.floor(male_data[0]["40s"]*1000).toString()
num[6].innerHTML = Math.floor(male_data[0]["30s"]*1000).toString()
num[7].innerHTML = Math.floor(male_data[0]["20s"]*1000).toString()
num[8].innerHTML = Math.floor(male_data[0]["10s"]*1000).toString()
num[9].innerHTML = Math.floor(male_data[0]["0s"]*1000).toString()
num[10].innerHTML = Math.floor(female_data[0]["90s"]*1000).toString()
num[11].innerHTML = Math.floor(female_data[0]["80s"]*1000).toString()
num[12].innerHTML = Math.floor(female_data[0]["70s"]*1000).toString()
num[13].innerHTML = Math.floor(female_data[0]["60s"]*1000).toString()
num[14].innerHTML = Math.floor(female_data[0]["50s"]*1000).toString()
num[15].innerHTML = Math.floor(female_data[0]["40s"]*1000).toString()
num[16].innerHTML = Math.floor(female_data[0]["30s"]*1000).toString()
num[17].innerHTML = Math.floor(female_data[0]["20s"]*1000).toString()
num[18].innerHTML = Math.floor(female_data[0]["10s"]*1000).toString()
num[19].innerHTML = Math.floor(female_data[0]["0s"]*1000).toString()
chart[0].style.width = Math.floor(male_data[0]["90s"]*1000)/58000 + '%'
chart[1].style.width = Math.floor(male_data[0]["80s"]*1000)/58000 + '%'
chart[2].style.width = Math.floor(male_data[0]["70s"]*1000)/58000 + '%'
chart[3].style.width = Math.floor(male_data[0]["60s"]*1000)/58000 + '%'
chart[4].style.width = Math.floor(male_data[0]["50s"]*1000)/58000 + '%'
chart[5].style.width = Math.floor(male_data[0]["40s"]*1000)/58000 + '%'
chart[6].style.width = Math.floor(male_data[0]["30s"]*1000)/58000 + '%'
chart[7].style.width = Math.floor(male_data[0]["20s"]*1000)/58000 + '%'
chart[8].style.width = Math.floor(male_data[0]["10s"]*1000)/58000 + '%'
chart[9].style.width = Math.floor(male_data[0]["0s"]*1000)/58000 + '%'
chart[10].style.width = Math.floor(female_data[0]["90s"]*1000)/58000 + '%'
chart[11].style.width = Math.floor(female_data[0]["80s"]*1000)/58000 + '%'
chart[12].style.width = Math.floor(female_data[0]["70s"]*1000)/58000 + '%'
chart[13].style.width = Math.floor(female_data[0]["60s"]*1000)/58000 + '%'
chart[14].style.width = Math.floor(female_data[0]["50s"]*1000)/58000 + '%'
chart[15].style.width = Math.floor(female_data[0]["40s"]*1000)/58000 + '%'
chart[16].style.width = Math.floor(female_data[0]["30s"]*1000)/58000 + '%'
chart[17].style.width = Math.floor(female_data[0]["20s"]*1000)/58000 + '%'
chart[18].style.width = Math.floor(female_data[0]["10s"]*1000)/58000 + '%'
chart[19].style.width = Math.floor(female_data[0]["0s"]*1000)/58000 + '%'
total.innerHTML = (Math.floor(total_data[0]/10)).toString()+"만";
averageAge.innerHTML = averageage_data[0].toFixed(1);
aging.innerHTML = (aging_data[0].toFixed(1)).toString()+"%";


// 팝업차트 

// 1.드래그앤 드롭
dragElement(document.getElementById("popup1"));
dragElement(document.getElementById("popup2"));
dragElement(document.getElementById("popup3"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  // 이동 목적지
  if (document.querySelector(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // 시작지점 마우스좌표 얻기
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // 이동지점 마우스좌표 얻기
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // 이동지점 커서좌표 계산
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // 요소의 새 위치 설정
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* 마우스버튼 풀렸을 때, 이동 멈춤 */
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// 2.팝업창 끄기 켜기
const popupTotal = document.querySelector('.popup__total');
const popupAverage = document.querySelector('.popup__average__age');
const popupAging = document.querySelector('.popup__aging');
const populationTitle = document.querySelector('.population__title');
const averageAgeContainer = document.querySelector('.average__age');
const agingContainer = document.querySelector('.aging__rate');
const popupClose = document.querySelectorAll('.popup__close');
const popupChart = document.querySelectorAll('.popup__chart');



for(i=0;i<popupChart.length;i++){
  popupChart[i].style.zIndex='1';
}

let zIndexVal = 1;


popupChart[0].addEventListener('click',()=>{
  zIndexVal = zIndexVal+1
  popupChart[0].style.zIndex = zIndexVal.toString(); 
})

popupChart[1].addEventListener('click',()=>{
  zIndexVal = zIndexVal+1
  popupChart[1].style.zIndex = zIndexVal.toString(); 
})

popupChart[2].addEventListener('click',()=>{
  zIndexVal = zIndexVal+1
  popupChart[2].style.zIndex = zIndexVal.toString(); 
})


popupTotal.style.display='none';
popupAverage.style.display='none';
popupAging.style.display='none';

populationTitle.addEventListener('click',()=>{
  zIndexVal = zIndexVal+1
  popupChart[1].style.zIndex = zIndexVal.toString(); 
  popupTotal.style.display = '';
  google.charts.setOnLoadCallback(drawBasicTotal);
  
})

averageAgeContainer.addEventListener('click',()=>{
  zIndexVal = zIndexVal+1
  popupChart[0].style.zIndex = zIndexVal.toString(); 
  popupAverage.style.display ='';
  google.charts.setOnLoadCallback(drawBasicAv);
})

agingContainer.addEventListener('click',()=>{
  zIndexVal = zIndexVal+1
  popupChart[2].style.zIndex = zIndexVal.toString(); 
  popupAging.style.display ='';
  google.charts.setOnLoadCallback(drawBasicAging);
})


popupClose[0].addEventListener('click',()=>{
  setTimeout(()=>{
    popupAverage.style.display = 'none';
  },1)})

popupClose[1].addEventListener('click',()=>{
  setTimeout(()=>{
    popupTotal.style.display = 'none';
  },1)
  
})

popupClose[2].addEventListener('click',()=>{
  setTimeout(()=>{
    popupAging.style.display = 'none';
  },1)
  
})



// 구글차트

google.charts.load('current', {packages: ['corechart']});


function drawBasicAv() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'X');
      data.addColumn('number', '평균 연령');

      data.addRows([
        ['2020',43.7],['2025(전망)',45.4],['2030(전망)',47.6],['2035(전망)',49.6],['2040(전망)',51.4],['2045(전망)',53.1],['2050(전망)',54.4],['2055(전망)',55.5],['2060(전망)',56.4],['2065(전망)',56.9]
      ]);

      var options = {
        width:795,
        height:560,
        chartArea: {'width': '85%', 'height': '75%','left':'12%'},
        hAxis: {
          title: '년도',
          textStyle: {
            fontSize: 11,
            fontName: 'Arial',
            italic: true,
            bold: true,
          },
          direction: 1, 
          slantedText: true, 
          slantedTextAngle: -30
          
        },
        vAxis: {
          
          title: '평균 연령',
          textStyle: {
            bold:true
          }
          
        }
      }
      options.legend = ('top');

      var chart = new google.visualization.LineChart(document.getElementById('chart_div_av'));

      chart.draw(data, options);
      window.addEventListener('resize',drawBasicAv,false);
    }

    function drawBasicTotal() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'X');
      data.addColumn('number', '총인구(만)');
    
      data.addRows([
        ['2020',5126],['2025(전망)',5190],['2030(전망)',5192],['2035(전망)',5162],['2040(전망)',5085],['2045(전망)',4957],['2050(전망)',4774],['2055(전망)',4540],['2060(전망)',4283],['2065(전망)',4029]
      ]);
    
      
    
      var options = {
        width:795,
        height:560,
        chartArea: {'width': '85%', 'height': '75%','left':'12%'},
        hAxis: {
          title: '년도',
          textStyle: {
            fontSize: 11,
            fontName: 'Arial',
            italic: true,
            bold: true
          },
          direction: 1, 
          slantedText: true, 
          slantedTextAngle: -30
        },
        vAxis: {
          
          title: '총인구 ( 만 )',
          textStyle: {
            bold:true
          }
          
        }
      }
    
      options.legend = ('top');
    
      var chart = new google.visualization.LineChart(document.getElementById('chart_div_total'));
    
      chart.draw(data, options);
      window.addEventListener('resize',drawBasicTotal,false);
    }
    
    function drawBasicAging() {
    
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'X');
      data.addColumn('number', '고령화(%)');
    
      data.addRows([
        ['2020',16.0],['2025(전망)',20.3],['2030(전망)',25.0],['2035(전망)',29.5],['2040(전망)',33.9],['2045(전망)',37.0],['2050(전망)',39.8],['2055(전망)',41.4],['2060(전망)',43.9],['2065(전망)',46.1]
      ]);
    
    
    
      var options = {
        seriesType:'bars',
        series:{2:{type:'line'}},
        width:795,
        height:560,
        chartArea: {'width': '85%', 'height': '75%','left':'12%'},
        hAxis: {
          title: '년도',
          textStyle: {
            fontSize: 11,
            fontName: 'Arial',
            italic: true,
            bold:true
          },
          direction: 1, 
          slantedText: true, 
          slantedTextAngle: -30
        },
        vAxis: {
          
          title: '고령화 ( % )',
          textStyle: {
            bold:true
          },
        },
        
      }
    
      options.legend = ('top');
    
      var chart = new google.visualization.ComboChart(document.getElementById('chart_div_aging'));
    
      chart.draw(data, options);
      window.addEventListener('resize',drawBasicAging,false);
    }
    


// 비동기 지연함수
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}


//차트 숨기기
const chartSection = document.querySelector('.section');


chartSection.style.display='none';


const URL = "https://teachablemachine.withgoogle.com/models/P452ZsioK/";

let model, webcam, labelContainer, maxPredictions;

// Load the image model and setup the webcam
async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append elements to the DOM
    webcamContainer=document.getElementById("webcam-container")
    webcamContainer.appendChild(webcam.canvas);

    labelContainer = document.getElementById("label-container");
    // for (let i = 0; i < maxPredictions; i++) { // and class labels
    //     labelContainer.appendChild(document.createElement("div"));
    // }
    labelContainer.appendChild(document.createElement("div"));
    document.querySelector('.webcam-div').style.display='none';
    
}

async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
}

// run the webcam image through the image model
async function predict() {
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(webcam.canvas);
    // for (let i = 0; i < maxPredictions; i++) {
    //     const classPrediction =
    //         prediction[i].className + ": " + prediction[i].probability.toFixed(2);
    //     labelContainer.childNodes[i].innerHTML = classPrediction;
    // }
        const classPrediction = Math.ceil(prediction[0].probability.toFixed(2)*100)+"% ";    
        labelContainer.childNodes[0].innerHTML = classPrediction;
        labelContainer.childNodes[0].style.backgroundColor="#03fcb6";
        labelContainer.childNodes[0].style.width=classPrediction;
        labelContainer.childNodes[0].style.borderRadius="5px";
        labelContainer.childNodes[0].style.textAlign="right";
        labelContainer.childNodes[0].style.fontStyle="italic";
}