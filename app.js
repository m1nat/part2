class Human {

  #name = "Vitaliy";
  #surname = "Sinkevich";
  #age = '29 years';

  getFullName() {
    return `${this.#name} ${this.#surname} ${this.#age}`;
  };

};

class Worker extends Human {

  #rate = 32;
  #days = 26;

  getSallary() {
    return this.#days * this.#rate;
  };



};

class Developer extends Worker {

  #sphere = "zam po nefiga";
  #company = "Roga i kopyta";

  getFullActivity() {
    return `${this.#company} ${this.#sphere}`;
  };

};

class Designer extends Developer {

  #platform = "different every day";
  #enviroment = "the same";

  getFullPosition() {
    return `${this.#enviroment} ${this.#platform}`;

  };

  getFullName() {
    return `Fullname: ${super.getFullName()}, Sallary: ${super.getSallary()}  sphere:${super.getFullActivity()} Platform: ${this.#platform}, Enviroment: ${this.#enviroment}`;
  };
  
};
  
const vit = new Designer();
console.log(vit.getFullName());