// oop -abstraction
// idea age pabo
// implementation pore pabo

// 1 interfce
// 2 abtract class

// idea paitechi
interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

// implementaion
class NashidPlayer implements MediaPlayer {
  play(): void {
    console.log("playing nashid");
  }
  pause(): void {
    console.log("nashid pause");
  }
  stop(): void {
    console.log("nashid stopped");
  }
}

const myPlayer = new NashidPlayer();
myPlayer.play();

// abstact clss

abstract class NashidPlayer2 {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class MezbaPlayer extends NashidPlayer2 {
  play(): void {
    console.log("plaing ..");
  }
  pause(): void {
    console.log("pasue");
  }
  stop(): void {
    console.log("pasue");
  }
}
const MezbaPlayer1 = new MezbaPlayer();
MezbaPlayer1.stop();
