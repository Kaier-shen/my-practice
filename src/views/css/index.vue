<template>
  <div class="app-container">
    <div class="box-top">
      <span class="window"></span>
      <!-- <span>
      <img
        width="300"
        height="300"
        class="pic"
        src="../../assets/image/cat.jpg"
      />
      <svg>
        <clipPath id="myPath" clipPathUnits="objectBoundingBox">
          <path
            d="M0.5,1
        C 0.5,1,0,0.7,0,0.3
        A 0.25,0.25,1,1,1,0.5,0.3
        A 0.25,0.25,1,1,1,1,0.3
        C 1,0.7,0.5,1,0.5,1 Z"
          />
        </clipPath>
      </svg>
    </span> -->
      <div class="outline"></div>
      <div class="rainbow"></div>
      <div class="conic"></div>
      <div class="hello">Hello</div>
      <div class="custom">Hover Me</div>
      <!-- <div class="no-wrap">
      {{ word }}
    </div> -->
    </div>
    <div class="box-center">
      <div class="main">
        <img src="../../assets/image/cat.jpg" />
        <div>
          东区的咖啡座<br />
          时间的杯子<br />
          满满的心事<br />
          blablabla~~~~<br />
        </div>
      </div>
      <div class="box ui-mb-20">
        <span></span>
      </div>
      <div class="wave">
        <img src="../../assets/image/cat.jpg" />
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="box-bottom">
      <div class="main">
        <div class="left">
          <div class="content">
            <p>
              明月别枝惊鹊，<br />
              清风半夜鸣蝉。<br />
              稻花香里说丰年，<br />
              听取蛙声一片。<br />
              七八个星天外，<br />
              两三点雨山前。<br />
              旧时茅店社林边，<br />
              路转溪桥忽见。<br />
            </p>
          </div>
        </div>
        <div class="right">
          <!-- <div class="top">
          <img src="../../assets/image/cat.jpg" alt="" />
          <img src="../../assets/image/erha.jpg" alt="" />
        </div> -->
          <div class="bottom">
            <div class="image-slider">
              <img class="gray" src="../../assets/image/cat.jpg" />
              <div class="upper-img">
                <img src="../../assets/image/cat.jpg" />
              </div>
              <input type="range" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    let range = document.querySelector('input[type="range"]');
    let upperImg = document.querySelector('.upper-img');
    range.addEventListener('input', ev => {
      upperImg.style.width = ev.target.value + '%';
    });
  }
};
</script>
<style lang="scss" scoped>
.app-container {
  overflow: auto;
}

.box-top {
  padding: 20px;
  background: green;
  .window {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background: url(../../assets/image/star.jpg) no-repeat;
    background-size: auto 100%;
    animation: move-pic 20s linear infinite alternate;
    animation-play-state: paused; /*非hover状态，动画暂停*/
  }
  .window:hover {
    animation-play-state: running; /*hover状态，动画继续*/
  }
  @keyframes move-pic {
    to {
      background-position: 100%;
      transform: rotate(10deg);
    }
  }
  .pic {
    clip-path: url(#myPath);
  }
  .no-wrap {
    white-space: pre-line;
  }

  .outline {
    position: relative;
    width: 140px;
    height: 64px;
    // margin: auto;
    border: 1px solid #333;
    outline: 1px solid #333;
    outline-offset: -1px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:hover {
      border: 1px solid transparent;
      outline: 1px solid transparent;
      background: linear-gradient(90deg, #333 50%, transparent 0) repeat-x,
        linear-gradient(90deg, #333 50%, transparent 0) repeat-x,
        linear-gradient(0deg, #333 50%, transparent 0) repeat-y,
        linear-gradient(0deg, #333 50%, transparent 0) repeat-y;
      background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
      background-position: 0 0, 0 100%, 0 0, 100% 0;
      animation: linearGradientMove 0.3s infinite linear;
    }
  }

  @keyframes linearGradientMove {
    100% {
      background-position: 4px 0, -4px 100%, 0 -4px, 100% 4px;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  .rainbow {
    position: relative;
    z-index: 0;
    width: 100px;
    height: 60px;
    border-radius: 10px;
    overflow: hidden;
    padding: 2rem;

    &::before {
      content: '';
      position: absolute;
      z-index: -2;
      left: -50%;
      top: -50%;
      width: 200%;
      height: 200%;
      background-color: #399953;
      background-repeat: no-repeat;
      background-size: 50% 50%, 50% 50%;
      background-position: 0 0, 100% 0, 100% 100%, 0 100%;
      background-image: linear-gradient(#399953, #399953),
        linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33),
        linear-gradient(#377af5, #377af5);
      animation: rotate 4s linear infinite;
    }

    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      left: 6px;
      top: 6px;
      width: calc(100% - 12px);
      height: calc(100% - 12px);
      background: white;
      border-radius: 5px;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  .conic {
    position: relative;
    z-index: 0;
    width: 100px;
    height: 60px;
    margin: 20px 0;
    border-radius: 10px;
    overflow: hidden;
    padding: 2rem;

    &::before {
      content: '';
      position: absolute;
      z-index: -2;
      left: -50%;
      top: -50%;
      width: 200%;
      height: 200%;
      background-color: #1a232a;
      background-repeat: no-repeat;
      background-position: 0 0;
      background-image: conic-gradient(
        transparent,
        rgba(168, 239, 255, 1),
        transparent 30%
      );
      animation: rotate 4s linear infinite;
    }

    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      left: 6px;
      top: 6px;
      width: calc(100% - 12px);
      height: calc(100% - 12px);
      background: #000;
      border-radius: 5px;
    }
  }

  .hello {
    position: relative;
    width: 120px;
    line-height: 64px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    border: 2px solid gold;
    border-radius: 10px;
    background: gold;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      filter: contrast(1.1);
    }

    &:active {
      filter: contrast(0.9);
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      border: 2px solid gold;
      transition: all 0.5s;
      animation: clippath 3s infinite linear;
      border-radius: 10px;
    }

    &::after {
      animation: clippath 3s infinite -1.5s linear;
    }
  }

  @keyframes clippath {
    0%,
    100% {
      clip-path: inset(0 0 98% 0);
    }

    25% {
      clip-path: inset(0 98% 0 0);
    }
    50% {
      clip-path: inset(98% 0 0 0);
    }
    75% {
      clip-path: inset(0 0 0 98%);
    }
  }

  .bg::before {
    background: rgba(255, 215, 0, 0.5);
  }

  div.custom {
    position: relative;
    margin: 11px 0;
    width: 200px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    overflow: hidden;

    &::after {
      content: 'Hover Me';
      position: absolute;
      top: 4px;
      bottom: 4px;
      right: 4px;
      left: 4px;
      line-height: 92px;
      font-size: 24px;
      background: #fff;
      // border-radius: 50%;
      border: 2px solid yellowgreen;
      cursor: pointer;
      color: yellowgreen;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0px;
      bottom: 0px;
      right: -20px;
      left: 0px;
      background: #fff;
      //border-radius: 50%;
      transform: rotateZ(-90deg) translate(-100%, -100%);
      transform-origin: top left;
      transition: transform 0.3s;
      transition-timing-function: linear;
    }

    &:hover {
      filter: contrast(1.2);
    }

    &:hover::before {
      transform: rotateZ(0deg) translate(0%, -0%);
    }
  }

  div:nth-child(1):hover ~ div:nth-child(2)::before {
    transform: rotateZ(0deg) translate(0%, -0%);
  }
}

.box-center {
  .main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    text-align: center;
    font-size: 20px;
    line-height: 2em;
    background: rgba(0, 0, 0, 0.1);
  }
  .main:before {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: url('../../assets/image/cat.jpg');
    background-size: cover;
    filter: blur(30px) opacity(0.6);
    /*
     这里不能将滤镜直接加在.main元素，而是将背景和滤镜都加在伪类上。
     因为，父元素加了滤镜，它的子元素都会一起由该滤镜改变。
     */
  }
  .main > img {
    height: 160px;
    width: 160px;
    border-radius: 50%;
    margin: 100px 0 50px;
    animation: rotate 5s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }

  .box {
    span {
      display: inline-block;
      height: 30px;
      width: 30px;
      border: 2px solid;
      border-color: transparent lightcoral lightcoral lightcoral;
      border-radius: 50%;
      animation: rotates 1.5s linear infinite;
    }
    @keyframes rotates {
      to {
        transform: rotate(360deg);
      }
    }
  }

  .wave {
    position: relative;
  }
  .wave img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
  .wave span {
    position: absolute;
    z-index: 0;
    top: -1px;
    left: -1px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 1px solid orange;
    animation: 2s wave linear infinite;
    opacity: 0;
  }
  .wave span:nth-of-type(2) {
    animation-delay: 1s;
    /*用animation-delay将两个span的动画错开，形成水波纹*/
  }
  @keyframes wave {
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(1.4);
      opacity: 0;
    }
  }
}

.box-bottom {
  .main {
    display: flex;
    height: 100%;
  }
  .right {
    flex: 1;
    .top {
      img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        filter: sepia() hue-rotate(70deg);
        transition: 0.5s filter;
      }
      img:hover {
        filter: none;
      }
    }
    .bottom {
      .image-slider {
        position: relative;
        display: inline-block;
      }
      .image-slider > div {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 50%;
        overflow: hidden;
      }
      .image-slider img {
        display: inline-block;
        user-select: none;
      }
      .image-slider .gray {
        filter: sepia();
      }
      .image-slider input[type='range'] {
        position: absolute;
        left: 0;
        bottom: 10px;
        width: 100%;
        margin: 0;
        filter: contrast(0.5);
        mix-blend-mode: luminosity;
      }
    }
  }
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
  }
  .left,
  .content::before {
    background: url('../../assets/image/cat.jpg');
    background-size: contain;
    background-attachment: fixed;
  }
  .left .content {
    box-sizing: border-box;
    color: #f9f9f9;
    font-size: 20px;
    line-height: 2.2em;
    letter-spacing: 3px;
    text-align: center;
    padding: 40px 30px 35px 40px;
    background: hsla(0, 0%, 100%, 0.3);
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  .left .content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    filter: blur(30px);
    margin: -30px;
    z-index: -1;
  }
}
</style>
