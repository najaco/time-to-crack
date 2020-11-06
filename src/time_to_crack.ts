export function timeToCrack(cracksPerSecond: number, passwordLength: number, numberOfPossibleCharacters: number): Duration {
    if (passwordLength === 0) {
        return new Duration();
    }
    const milliseconds: number = (numberOfPossibleCharacters ** passwordLength) / cracksPerSecond / 100 * 100;
    const seconds: number = Math.floor((numberOfPossibleCharacters ** passwordLength) / cracksPerSecond);
    console.log(JSON.stringify({ n: numberOfPossibleCharacters ** passwordLength, milliseconds, seconds }));
    return new Duration({ milliseconds, seconds }); //.add(timeToCrack(cracksPerSecond, passwordLength - 1, numberOfPossibleCharacters));
}
const remainderAndDivide = (a: number, b: number) => { return [a % b, Math.floor(a / b)] }
export class Duration {
    milliseconds: number;
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
    years: number;
    centuries: number;
    millennia: number;



    constructor({ milliseconds = 0, seconds = 0, minutes = 0, hours = 0, days = 0, years = 0, centuries = 0, millennia = 0 }: { milliseconds?: number, seconds?: number, minutes?: number, hours?: number, days?: number, years?: number, centuries?: number, millennia?: number } = {}) {
        var carry: number = 0;
        [this.milliseconds, carry] = remainderAndDivide(carry + Math.floor(milliseconds), 100);
        [this.seconds, carry] = remainderAndDivide(carry + seconds, 60);
        [this.minutes, carry] = remainderAndDivide(carry + minutes, 60);
        [this.hours, carry] = remainderAndDivide(carry + hours, 24);
        [this.days, carry] = remainderAndDivide(carry + days, 365);
        [this.years, carry] = remainderAndDivide(carry + years, 100);
        [this.centuries, carry] = remainderAndDivide(carry + centuries, 10);
        [this.millennia, carry] = remainderAndDivide(carry + millennia, 10);
    }

    add(d: Duration): Duration {
        return new Duration({
            milliseconds: this.milliseconds + d.milliseconds,
            seconds: this.seconds + d.seconds,
            minutes: this.minutes + d.minutes,
            hours: this.hours + d.hours,
            days: this.days + d.days,
            years: this.years + d.years,
            centuries: + this.centuries + d.centuries,
            millennia: this.millennia + d.millennia
        });
    }
}
