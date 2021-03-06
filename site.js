window.SITE = {
    brain: {
        title: "ANL - Home Page",
        maskColor: "#afafaf",
        // language=HTML
        html: `
            <link rel="stylesheet" href="styles/brain.css">
            <canvas class="hello-canvas-top"></canvas>
            <canvas class="hello-canvas-bottom"></canvas>
        `,
        onload: () => {
            if (!localStorage.getItem("anl-username")) {
                // language=HTML
                document.getElementById("container").innerHTML += `
                    <style>
                        .cmd{
                            font-size: 40px;
                            /*animation: zoom-in 8s ease 0s 1 alternate;*/
                        }
                    </style>
                `;
                // Cmd.output.style.fontSize = "40px";
                let promise = new Promise((resolve) => {
                    Cmd.delayPrint(120, 0, [
                        "Wanna a community?","&br",
                        "which is..."
                    ], resolve);
                });
                promise.then(() => {
                    return new Promise((resolve) => {
                        Fun.cd(resolve, "open_introduction");
                    })
                }).then(() => {
                    return new Promise((resolve) => {
                        window.setTimeout(resolve,6000);
                        // Cmd.delayPrint(80, 2000, [
                        //     "Open Source ?",
                        // ], resolve);
                    })
                }).then(() => {
                    return new Promise((resolve) => {
                        Fun.cd(resolve, "creative_introduction");
                    })
                }).then(() => {
                    return new Promise((resolve) => {
                        window.setTimeout(resolve,6000);
                        // Cmd.delayPrint(80, 2000, [
                        //     "freedom ?",
                        // ], resolve);
                    })
                }).then(() => {
                    return new Promise((resolve) => {
                        Fun.cd(resolve, "fun_introduction");
                    })
                }).then(() => {
                    return new Promise((resolve) => {
                        window.setTimeout(resolve,8000);
                        // Cmd.delayPrint(80, 1000, [
                        //     "And...",
                        //     " Really Fun ?",
                        // ], resolve);
                    })
                }).then(() => {
                    return new Promise((resolve) => {
                        Fun.cd(resolve, "end_introduction");
                    })
                }).then(() => {
                    return new Promise((resolve) => {
                        window.setTimeout(resolve,2000);
                        // Cmd.delayPrint(80, 2000, [
                        //     "Then, join us :)",
                        // ], resolve);
                    })
                }).then(() => {
                    if (!localStorage.getItem("anl-username")) {
                        Cmd.println();
                        Cmd.print('<div class="lead" style="display: inline">Type "help" for more information .</div>');
                        Cmd.input_cache = "login;";
                        Cmd.input_point = 6;
                    }
                    Cmd.show_inputer = true;
                    Cmd.bindKeyEvent(document);
                });
            } else {
                Cmd.show_inputer = true;
                Cmd.bindKeyEvent(document);
                Fun.cd(()=>{},"main");
                //Show Select
            }
        }
    },
    main: {
        title: "ANL - Home Page",
        maskColor: "rgba(255,255,255,0.4)",
        // language=HTML
        html: `
            <link rel="stylesheet" href="styles/main.css">
        `,
        javascript: () => {
            //
        }
    },
    intro: {
        title: "ANL - Introduction",
        maskColor: "rgba(255,255,255,0.4)",
        // language=HTML
        html: `
            <link rel="stylesheet" href="styles/intro.css">
            <div class="center">
                <h1>Our Belief Our Motion</h1>
                <h3>An Oath of Freedom</h3>
                <hr>
                <p>我们坚持自由软件，源于我们对人性的信心。</p>
                <p>我们坚持开放源码，源于我们对商业的厌倦。</p>
                <p>加入我们，一起进步。</p>
                <hr>
                <div class="link" id="back">↵ Back</div>
            </div>
        `,
        javascript: () => {
            document.getElementById("back").addEventListener("mousedown",() => {
                Fun.cd(()=>{}, "main");
            })
        }
    },
    web: {
        title: "ANL - Web",
        maskColor: "#2983af",
        // language=HTML
        html: `
            <link rel="stylesheet" href="styles/web.css">
        `,
        javascript: () => {
            //
        }
    },
    hardware: {
        title: "ANL - Hardware",
        maskColor: "#afafaf",
        // language=HTML
        html: `
            <link rel="stylesheet" href="styles/hardware.css">
        `,
        javascript: () => {
            //
        }
    },
    open_introduction: {
        title: "ANL - Home Page",
        maskColor: "rgba(20, 164, 255, 0.4)",
        // language=HTML
        html: `
            <link rel="stylesheet" href="styles/open.css">
            <div class="msg">Open?</div>
            <canvas width="400" height="300" id="cloud1" class="--canvasjs"></canvas>
            <canvas width="400" height="300" id="cloud2" class="--canvasjs"></canvas>
            <canvas width="400" height="300" id="cloud3" class="--canvasjs"></canvas>
            <canvas width="400" height="300" id="cloud4" class="--canvasjs"></canvas>
            <canvas width="400" height="300" id="cloud5" class="--canvasjs"></canvas>
            <canvas width="400" height="300" id="cloud6" class="--canvasjs"></canvas>
            <canvas width="400" height="300" id="cloud7" class="--canvasjs"></canvas>
            <canvas width="400" height="300" id="cloud8" class="--canvasjs"></canvas>
            <canvas width="400" height="300" id="cloud9" class="--canvasjs"></canvas>
            <canvas width="400" height="300" id="cloud10" class="--canvasjs"></canvas>
            <canvas width="400" height="300" id="cloud11" class="--canvasjs"></canvas>
            <canvas width="400" height="300" id="cloud12" class="--canvasjs"></canvas>
            <canvas width="350" height="250" id="cloud0" class="--canvasjs"></canvas>
            <canvas width="179" height="179" id="sun" class="--canvasjs"></canvas>
        `,
        javascript: () => {
            CanvasJS.init();
        }
    },
    creative_introduction: {
        title: "ANL - Home Page",
        maskColor: "#171717",
        // language=HTML
        html: `
            <link rel="stylesheet" href="styles/creative.css">
            <div class="tinkle">
                <div class="msg">Creative?</div>
                <canvas width="544" height="512" id="bubble" class="--canvasjs"></canvas>
            </div>
        `,
        javascript: () => {
            CanvasJS.init();
        }
    },
    fun_introduction: {
        title: "ANL - Home Page",
        maskColor: "rgba(0,0,0,0.5)",
        // language=HTML
        html: `
            <link rel="stylesheet" href="styles/fun.css">
            <div id="yellow">
                <div id="yellow-top"></div>
                <div id="yellow-bottom"></div>
            </div>
            <div id="beans">
                <div id="beans-inner">
                    ・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・
                </div>
            </div>
            <div class="msg">
                <div id="w1">A</div><div id="w2">n</div><div id="w3">d</div><div id="w4">.</div><div id="w5">.</div><div id="w6">.</div><div id="w7">R</div><div id="w8">e</div><div id="w9">a</div><div id="w10">l</div><div id="w11">l</div><div id="w12">y</div><div id="fun">&nbsp;Fun&nbsp;</div><div id="w14">?</div>
            </div>
        `,
    },
    end_introduction: {
        title: "ANL - Home Page",
        maskColor: "#afafaf",
        // language=HTML
        html: `
            <style>
                .cmd{
                    font-size: 40px;
                }
                @keyframes smile-eye
                {
                    0%   {transform:rotate(180deg) rotateX(0deg) translateY(-30%)}
                    50%  {transform:rotate(180deg) rotateX(75deg) translateY(-30%)}
                    100% {transform:rotate(180deg) rotateX(0deg) translateY(-30%)}
                }
                @keyframes smile-mouse
                {
                    0%   {transform:rotate(90deg)  translateY(-50%)}
                    50%  {transform:rotate(75deg)  translateY(-50%)}
                    100% {transform:rotate(90deg)  translateY(-50%)}
                }
                #smile-box{
                    width: 160px;
                    height: 160px;
                    position: fixed;
                    top: 10%;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 6;
                    /*animation: smile 5s ease 2s 1 alternate;*/
                }
                #eye-1{
                    font-family: arial, sans-serif;
                    top: 40px;
                    left: 40px;
                    width: min-content;
                    height: min-content;
                    display: block;
                    position: absolute;
                    font-size: 160px;
                    transform: rotate(180deg);
                }
                #eye-2{
                    font-family: arial, sans-serif;
                    top: -16px;
                    right: 40px;
                    width: min-content;
                    height: min-content;
                    display: block;
                    position: absolute;
                    font-size: 160px;
                    transform: rotate(180deg) translateY(-30%);
                    animation: smile-eye 1s ease 5s 1 alternate;
                }
                #mouse{
                    font-family: arial, sans-serif;
                    top: 80px;
                    left: 28px;
                    width: min-content;
                    height: min-content;
                    display: block;
                    position: absolute;
                    font-size: 80px;
                    transform: rotate(90deg) translateY(-50%);
                    animation: smile-mouse 1s ease 5s 1 alternate;
                }
            </style>
            <div id="smile-box">
                <div id="eye-1">,</div>
                <div id="eye-2">,</div>
                <div id="mouse">)</div>
            </div>
        `,
        onload: () => {
            Cmd.delayPrint(80, 2000, [
                // "Then, let's go :)",
                "Then, join us.",
            ]);
        },
        javascript: () => {
            Fun.clear();
        }
    },
};