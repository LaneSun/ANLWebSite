window.Mask = {};

(function (self) {
    self.canvas = undefined;
    self.context = undefined;
    self.SMOOTH_COUNT = 0.05;
    self.WIDTH = 300;
    self.SEC = 20;
    self.init = (cav) => {
        self.canvas = cav;
        cav.width = window.innerWidth;
        cav.height = window.innerHeight;
        self.context = cav.getContext("2d");
    };
    self.show = () => {
        self.canvas.hidden = false;
    };
    self.hide = () => {
        self.canvas.hidden = true;
    };
    self.color = "#6e7783";
    self.fadeOut = (resolve) => {
        self.fadeOutHandle(0,resolve);
    };
    self.fadeIn = (resolve) => {
        self.fadeInHandle(0,resolve);
    };
    self.liner = (i) => {
        i += 0.1;
        return i * i * i;
    };
    self.fadeOutHandle = (i,resolve) => {
        let width = self.canvas.width;
        let height = self.canvas.height;
        if (width - self.liner(i) * (width + self.WIDTH) + 2 * self.WIDTH <= 0) {
            resolve();
            return;
        }
        let ctx = self.context;
        ctx.clearRect(0,0,width,height);
        ctx.beginPath();
        ctx.moveTo(2 * width,0);
        ctx.lineTo(width,height);
        ctx.lineTo(width - self.liner(i) * (width + self.WIDTH),height);
        ctx.lineTo(width - self.liner(i) * (width + self.WIDTH) + self.WIDTH,0);
        ctx.closePath();
        ctx.fillStyle = SITE[ANL.Site].maskColor;
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(2 * width,0);
        ctx.lineTo(width,height);
        ctx.lineTo(width - self.liner(i) * (width + self.WIDTH) + self.WIDTH,height);
        ctx.lineTo(width - self.liner(i) * (width + self.WIDTH) + 2 * self.WIDTH,0);
        ctx.closePath();
        ctx.fillStyle = self.color;
        ctx.fill();
        i += self.SMOOTH_COUNT;
        window.setTimeout(self.fadeOutHandle,self.SEC,i,resolve);
    };
    self.fadeInHandle = (i,resolve) => {
        let width = self.canvas.width;
        let height = self.canvas.height;
        if (width - self.liner(i) * (width + self.WIDTH) + 2 * self.WIDTH <= 0) {
            resolve();
            return;
        }
        let ctx = self.context;
        ctx.clearRect(0,0,width,height);
        ctx.beginPath();
        ctx.moveTo(-2 * width,height,height);
        ctx.lineTo(0,0);
        ctx.lineTo(width - self.liner(i) * (width + self.WIDTH) + 2 * self.WIDTH,0);
        ctx.lineTo(width - self.liner(i) * (width + self.WIDTH) + self.WIDTH,height);
        ctx.closePath();
        ctx.fillStyle = SITE[ANL.Site].maskColor;
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(-2 * width,height,height);
        ctx.lineTo(0,0);
        ctx.lineTo(width - self.liner(i) * (width + self.WIDTH) + self.WIDTH,0);
        ctx.lineTo(width - self.liner(i) * (width + self.WIDTH),height);
        ctx.closePath();
        ctx.fillStyle = self.color;
        ctx.fill();
        i += self.SMOOTH_COUNT;
        window.setTimeout(self.fadeInHandle,self.SEC,i,resolve);
    }
})(window.Mask);