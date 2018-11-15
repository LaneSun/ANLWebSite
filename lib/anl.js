window.ANL = {};

(function (self) {
    self.Site = "brain";
    self.init = () => {
        document.title = SITE[self.Site].title;
        document.getElementById("container").innerHTML = SITE[self.Site].html;
    };
    self.loadScript = () => {
        SITE[self.Site].javascript(document);
    };
    self.changeSite = (site,resolve1) => {
        let promise = new Promise((resolve) => {
            Mask.show();
            Mask.fadeOut(resolve);
        });
        promise.then(() => {
            return new Promise((resolve) => {
                self.Site = site;
                self.init();
                // self.loadScript();
                if (SITE[self.Site].javascript) {
                    SITE[self.Site].javascript(document);
                }
                Cmd.refreshHead();
                Mask.fadeIn(resolve);
            })
        }).then(() => {
            Mask.hide();
            resolve1();
            Cmd.refreshHead();
            if (SITE[self.Site].onload) {
                SITE[self.Site].onload(document);
            }
            // self.loadScript();
        })
    }
})(window.ANL);