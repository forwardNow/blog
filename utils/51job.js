;(function() {
  class Main {
    telephoneNumber = '18707127626';

    email = 'wuqinfei@qq.com';

    constructor() {
      this.removeTop();
      this.removeBottom();
      this.removeNameMark();
      this.repairTelephoneNumber();
      this.repairEmail();
      this.repairStyle();

      window.print();
    }

    removeTop() {
      this.removeElement('.chead');
    }

    removeBottom() {
      this.removeElement('.footer');
    }

    removeNameMark() {
      this.removeElement('.rz');
    }

    removeElement(selector) {
      const element = document.querySelector(selector);

      element.parentNode.removeChild(element);
    }

    repairTelephoneNumber() {
      const element = document.querySelector('table.infr tbody tr:nth-of-type(3) td:nth-of-type(1)');

      const mixedNumberArray = this.telephoneNumber.split('');

      mixedNumberArray.splice(3, 4, '****');

      const mixedNumber = mixedNumberArray.join('');

      element.innerHTML = element.innerHTML.replace(mixedNumber, this.telephoneNumber);
    }

    repairEmail() {
      const element = document.querySelector('table.email tbody tr td.txt4');

      element.innerHTML = this.email;
    }

    repairStyle() {
      const styleElement = document.createElement('style');
      document.head.appendChild(styleElement);

      styleElement.innerHTML = `
body .column .box1 {
  color: #000;
  background-color: #fff;
}

body .column .infr {
  color: #000;
}

body .column .txt4 {
  color: #000;
}

body .column .p5 {
  color: #aaa;
}
      `;
    }

  }

  new Main();
})();