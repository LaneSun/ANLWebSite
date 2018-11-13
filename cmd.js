/*
Cmd Controller
*/

window.Cmd = {};

(function (self){
    // self.username = undefined;
    self.output = undefined;
    self.init = (elem) => {
        self.output = elem;
        Cmd.blinker.start();
        Cmd.refreshHead();
    };
    self.cache = [""];
    self.show_inputer = false;
    self.input_point = 1;
    self.input_head = "login-yourname:";
    self.input_cache = "";
    self.allowEnter = true;
    self.refreshHead = () => {
        let username = localStorage.getItem("anl-username");
        self.input_head = username ? username + "@" + ANL.Site : "login-yourname:";
        self.refreshView();
    };
    self.input = (msg) => {
        self.input_cache = self.input_cache.substring(0,self.input_point) + msg + self.input_cache.substring(self.input_point);
        self.forward(msg.length);
        self.blinker.restart();
    };
    self.delete = (count) => {
        for (let i = 0; i < count; i++) {
            self.input_cache = self.input_cache.substring(0,self.input_point - 1) + self.input_cache.substring(self.input_point);
            self.back(1);
            self.blinker.restart();
        }
    };
    self.print = (msg = "") => {
        self.cache[self.cache.length - 1] += msg;
        self.refreshView();
    };
    self.println = (msg) => {
        self.print(msg);
        self.cache.push("");
        self.refreshView();
    };
    self.refreshView = () => {
        let output = "";
        for (let msg of self.cache) {
            output += msg? "&gt; " + msg + "<br>" : "";
        }
        self.output.innerHTML = output;
        if (self.show_inputer) {
            let input_cache;
            if (self.input_cache) {
                input_cache = self.input_cache + " ";
                input_cache = self.blinker.show ? input_cache.substring(0,self.input_point) + "<div class='blink'>" + input_cache.charAt(self.input_point) + "</div>" + input_cache.substring(self.input_point + 1) : self.input_cache;
                input_cache = input_cache.replace(/;/g,"&nbsp;");
            } else {
                input_cache = "";
            }
            self.output.innerHTML += "[" + self.input_head + "] $&nbsp;" + input_cache;
        }
        self.output.scrollTo({
            top: self.output.scrollHeight,
            left: 0,
            behavior: 'auto'
        });
        if (self.output.scrollTop !== 0) {
            self.cache.shift();
            self.refreshView();
        }
    };
    self.back = (count) => {
        for (let i = 0; i < count; i++){
            self.input_point--;
            self.input_point = self.input_point > 0 ? self.input_point : 0;
        }
        self.blinker.restart();
    };
    self.forward = (count) => {
        let len = self.input_cache.length;
        for (let i = 0; i < count; i++){
            self.input_point++;
            self.input_point = self.input_point < len ? self.input_point : len;
        }
        self.blinker.restart();
    };
    self.delayPrint = (sec,lsec,msgs,resolve) => {
        if (!msgs.length) {
            if (resolve) {
                resolve();
            }
            return 0;
        }
        let ltime = false;
        if (msgs[0] === "&br") {
            self.println();
            msgs.shift();
        } else if (msgs[0] === "") {
            msgs.shift();
            ltime = true;
        } else {
            self.print(msgs[0][0]);
            msgs[0] = msgs[0].substring(1);
        }
        window.setTimeout(self.delayPrint,ltime ? lsec : sec,sec,lsec,msgs,resolve);
    };
    self.blinker = {};
    self.blinker.sec = 500;
    self.blinker.index = undefined;
    self.blinker.show = false;
    self.blinker.start = () => {
        self.blinker.index = window.setInterval(self.blinker.resetHandle,self.blinker.sec);
        self.blinker.show = true;
        self.refreshView();
    };
    self.blinker.stop = () => {
        window.clearInterval(self.blinker.index);
        self.blinker.index = undefined;
        self.blinker.show = false;
        self.refreshView();
    };
    self.blinker.restart = () => {
        if (self.blinker.index !== undefined) {
            self.blinker.stop();
            self.blinker.start()
        } else {
            self.blinker.start();
        }
    };
    self.blinker.resetHandle = () => {
        self.blinker.show = !self.blinker.show;
        self.refreshView();
    };
    self.keyHandle = (e) => {
        switch (e.key) {
            case "ArrowDown":
                // Do something for "down arrow" key press.
                break;
            case "ArrowUp":
                // Do something for "up arrow" key press.
                break;
            case "ArrowLeft":
                // Do something for "left arrow" key press.
                self.back(1);
                break;
            case "ArrowRight":
                // Do something for "right arrow" key press.
                self.forward(1);
                break;
            case "Enter":
                // Do something for "enter" or "return" key press.
                if (!self.allowEnter || !self.input_cache) {
                    return;
                }
                let promise = new Promise((resolve) => {
                    self.allowEnter = false;
                    self.println();
                    self.println(self.input_cache.replace(/;/g,"&nbsp;"));
                    self.refreshView();
                    if (Fun[self.input_cache.split(";")[0]]) {
                        let para = self.input_cache.split(";");
                        Fun[para[0]](resolve,para.slice(1));
                    } else {
                        self.delayPrint(20,0,["No Such Command !"],resolve);
                    }
                });
                promise.then(() => {
                    self.allowEnter = true;
                    self.refreshView();
                });
                self.input_cache = "";
                break;
            case "Escape":
                // Do something for "esc" key press.
                break;
            case "Backspace":
                // Do something for "backspace" key press.
                self.delete(1);
                break;
            case "Shift":
                // Do something for "shift" key press.
                break;
            case "<":
                // Do something for "<" key press.
                break;
            case ">":
                // Do something for ">" key press.
                break;
            case "&":
                // Do something for "&" key press.
                break;
            case "Delete":
                // Do something for "delete" key press.
                break;
            case " ":
                // Do something for " " key press.
                self.input(";");
                break;
            case ";":
                // Do something for ";" key press.
                break;
            default:
                if (e.key.length <= 1) {
                    self.input(e.key);
                }
        }

        // Cancel the default action to avoid it being handled twice
        e.preventDefault();
    };
    self.bindKeyEvent = (elem) => {
        elem.addEventListener("keydown",self.keyHandle);
    }
})(window.Cmd);