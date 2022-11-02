import React from 'react'
import './Content.css'

export class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          colors: ["red", "yellow", "blue", "green", "purple", "pink"]
        };
      }
    
    changeBg() {
        const { colors } = this.state;
        const color = colors[Math.floor(Math.random() * colors.length)];
        document.getElementById('tenthEl').style.backgroundColor = color;
    }
    changeBg2() {
        const { colors } = this.state;
        const color = colors[Math.floor(Math.random() * colors.length)];
        document.getElementById('eleventhEl').style.backgroundColor = color;
    }

    render() {
        return (<>
            <p>Хобі:</p>
            <ul>
                <li>Готувати</li>
                <li>Кататися на велосипеді</li>
                <li>Малювати</li>
                <li>Дивитися кіно/серіали із близькими</li>
            </ul>

            <p onClick={() => this.changeBg()} id="tenthEl">Улюблені фільми:</p>
            <ol onClick={() => this.changeBg2()} id='eleventhEl'>
                <li>"Inception" ("Початок"), 2010</li>
                <li>"Harry Potter" - всі частини</li>
                <li>"Star Wars" - всі частини</li>
            </ol>

            <p>Дубай розташований на узбережжі Перської затоки, є великим фінансовим і торговельним центром на Близькому Сході. 
                Найбільше місто ОАЕ і туристичний центр усього Близького Сходу. 
                <br/>Всесвітньо відомих пам'яток тут більше, ніж у багатьох столицях світу. 
                Це ніби втілення арабської казки в сучасному світі. Він наповнений найкращим, від чого перехоплює подих.
                Дубай починав свій шлях, як невеличке рибальське поселення на узбережжі Арабської затоки. 
                <br/>Сьогодні це футуристичний мегаполіс, де мешкають представники понад 200 різних національностей. 
                Від найвищої будівлі світу, хмарочоса Burj Khalifa, до історичних кварталів уздовж затоки Dubai Creek — Дубаю є чим вас здивувати. 
            </p>
        </>);
    }
}
