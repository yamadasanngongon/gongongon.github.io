.confetti {
  position: relative;
  box-shadow: 0 1px 8px rgba(0,0,0,0.2);
  border-radius: 6px;
  background: #000;
  width: 200px;
  height: 200px;
}

.confetti > span {
  display: block;
  position: absolute;
  opacity: 0;
}

.confetti > span > span {
  display: block;
  width: 100%;
  height: 100%; }

.confetti > span > span > span {
  display: block;
  width: 100%;
  height: 100%;
}

@keyframes rotateY {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

@keyframes rotate360 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/****** Base style. ******/
body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: 0;
}