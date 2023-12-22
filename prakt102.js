function Accumulator(startValue) {
    this.startValue = startValue;

    this.read = function(){
       this.startValue += +prompt('Введите число', 0);
    };
}

let accu = new Accumulator(3);

accu.read();
accu.read();

alert(accu.startValue);