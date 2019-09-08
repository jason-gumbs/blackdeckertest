import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [tiger, setTger] = useState({
        energy: 43,
        name: "tiger"
    });
    const [monkeys, setmonkeys] = useState({
        energy: 32,
        name: "monkey"
    });
    const [snakes, setsnakes] = useState({
        energy: 23,
        name: "snake"
    });

    const soundOff = () => {


        return function displayName() {

            let sound = () => {
                setTger({energy :tiger.energy - 3 });
                setmonkeys({energy :monkeys.energy - 3});
                setsnakes({energy :snakes.energy - 3});
            }
            sound()

        }
    }

    const animal = (type, action) => {

        return function displayName() {

        let sound = () => {

            if(type === 'tiger') {
                setTger({energy :tiger.energy - 3 });

            }
            if(type === 'monkeys') {
                setmonkeys({energy :monkeys.energy - 3});
            }
            if(type === 'snake') {
                setsnakes({energy :snakes.energy - 3});
            }


        }
            let play = () => {
                if(type === 'monkeys') {
                    if(monkeys.energy> 0){
                        alert(" Monkey saidddOooo Oooo Oooo")
                        setmonkeys({energy :monkeys.energy - 8});
                    }
                    else {
                        alert("Monkey is too tired")
                    }
                }
            }
        let eating = () => {
            if(type === 'tiger') {
                setTger({energy :tiger.energy + 5});
            }
            if(type === 'monkeys') {
                setmonkeys({energy :monkeys.energy + 5});
            }
            if(type === 'snake') {
                setsnakes({energy :snakes.energy + 5});
            }

        }

        let sleeping = () => {

            if(type === 'tiger') {
                setTger({energy :tiger.energy + 10});
            }
            if(type === 'monkeys') {
                setmonkeys({energy :monkeys.energy + 10});
            }
            if(type === 'snake') {
                setsnakes({energy :snakes.energy  + 10});
            }
        }

        if(action === 'sound'){
            sound()
        }
            if(action === 'play'){
                play()
            }
        if(action === 'eating'){
            eating()
        }
        if(action === 'sleeping'){
            sleeping()
        }
            // console.log(tempdata);
        };
    };

    useEffect(() => {

    }, [tiger])
    return (
        <div className="App">
            <header className="App-header">
                "tiger attribute"
                <br/>
                {tiger.energy}
                <br/>
                {tiger.name}
                <button onClick={animal("tiger","sleeping")}>
                   tiger sleep
                </button>
                <button onClick={animal("tiger","sound")}>
                    tiger sound
                </button>
                <button onClick={animal("tiger","eating")}>
                    tiger eating
                </button>
                "monkeys attribute"
                <br/>
                {monkeys.energy}
                <br/>
                {monkeys.name}
                <button onClick={animal("monkeys","sleeping")}>
                    monkeys sleep
                </button>
                <button onClick={animal("monkeys","play")}>
                    monkeys play
                </button>

                <button onClick={animal("monkeys","sound")}>
                    monkeys sound
                </button>
                <button onClick={animal("monkeys","eating")}>
                    monkeys eating
                </button>
                "snake attribute"
                <br/>
                {snakes.energy}
                <br/>
                {snakes.name}
                <button onClick={animal("snake","sleeping")}>
                snake sleep
            </button>
                <button onClick={animal("snake","sound")}>
                    snake sound
                </button>
                <button onClick={animal("snake","eating")}>
                    snake eating
                </button>
                <br/>
                <br/>
                <button onClick={soundOff()}>
                sound off
            </button>

            </header>
        </div>
    );
}

export default App;
