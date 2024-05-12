export class Concatenate {
    constructor(word1, word2) {
        this.word1 = word1;
        this.word2 = word2;
    }

    _capitalizeWords(word) {
        return word[0].toUpperCase() + word.slice(1, word.length);
    }

    combineString() {
        return this._capitalizeWords(this.word1) + this._capitalizeWords(this.word2);
    }

    combineStringSpace() {
        return `${this._capitalizeWords(this.word1)} ${this._capitalizeWords(this.word2)}`;
    }
}