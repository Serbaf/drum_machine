import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";

const audiosKeys = {
    Q: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    W: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    E: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    A: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    S: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    D: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    Z: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    X: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    C: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
}

const DrumMachine = () => {
    const [lastKey, pressKey] = useState("");

    return (
        <div id="drum-machine" className="row">
            <div id="keyboard" className="container bg-secondary col-9">
                <div className="row border border-dark p-4">
                    <div className="col-4"><KeyPad namae="Q" pressKey={pressKey} audioName="heater1" /></div>
                    <div className="col-4"><KeyPad namae="W" pressKey={pressKey} audioName="heater2" /></div>
                    <div className="col-4"><KeyPad namae="E" pressKey={pressKey} audioName="heater3" /></div>
                </div>
                <div className="row border border-dark border-top-0 p-4">
                    <div className="col-4"><KeyPad namae="A" pressKey={pressKey} audioName="heater4" /></div>
                    <div className="col-4"><KeyPad namae="S" pressKey={pressKey} audioName="clap" /></div>
                    <div className="col-4"><KeyPad namae="D" pressKey={pressKey} audioName="openHH" /></div>
                </div>
                <div className="row border border-dark border-top-0 p-4">
                    <div className="col-4"><KeyPad namae="Z" pressKey={pressKey} audioName="kicknhat" /></div>
                    <div className="col-4"><KeyPad namae="X" pressKey={pressKey} audioName="kick" /></div>
                    <div className="col-4"><KeyPad namae="C" pressKey={pressKey} audioName="closedHH" /></div>
                </div>
            </div>
            <div id="display" className="col-3">
                <p>Last pressed key: {lastKey}</p>
            </div>
        </div>
    )
}

const KeyPad = ({ namae, pressKey, audioName }) => {
    const onKeyPress = (key) => {
        document.getElementById(key).play();
        pressKey(key);
    }
    window.addEventListener("keydown", (event) => {
        if (event.key.toUpperCase() === namae) {
            onKeyPress(namae);
        }
    })

    return (
        <button id={audioName} className="col-4 drum-pad btn btn-lg btn-primary" onClick={() => onKeyPress(namae)}>
            {namae}
            <audio id={namae} className="clip" src={audiosKeys[namae]}></audio>
        </button>
    );
}

export default DrumMachine;