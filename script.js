
let libro = {
    titolo: "Come trattare gli altri e farseli amici",
    autore: "Dale Carnegie",
    pagine: 300,
    letto: "letto",

    info: function () {
        return `${this.titolo} ${this.autore} ${this.pagine}`;
    },

    stampaComeLetto: function () {
        if (this.letto) {
            console.log('il libro è stato ' + this.letto)
        } else {
            console.log('il libro non è stato letto ' + this.letto)
        }
    },
};
libro.stampaComeLetto();
console.log(libro.info());