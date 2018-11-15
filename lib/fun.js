/*
Function Scope
 */

window.Fun = {};

Fun.help = (resolve = ()=>{}) => {
    Cmd.delayPrint(20,100,[
        "clear --Clear console.","&br",
        "cd --Go to another site.","&br",
        "login [username] --Login your community account.","&br",
        "logout --Logout your account","&br",
        "help --Show command list.",
    ],resolve);
};
Fun.clear = (resolve = ()=>{}) => {
    Cmd.cache = [""];
    resolve();
};
Fun.cd = (resolve = ()=>{},site) => {
    if (SITE[site]) {
        ANL.changeSite(site,resolve);
    } else {
        Cmd.delayPrint(20,100,[
            "No such Directory !",
        ],resolve);
    }
};
Fun.login = (resolve = ()=>{},username) => {
    if (username) {
        localStorage.setItem("anl-username",username);
        Cmd.refreshHead();
        Fun.clear();
        Fun.cd(resolve,"main");
        // Cmd.delayPrint(20,100,[
        //     "Login with username " + username + ".",
        // ],resolve);
    } else {
        Cmd.delayPrint(20,100,[
            "Please input an username !",
        ],resolve);
    }
};
Fun.logout = (resolve = ()=>{}) => {
    localStorage.removeItem("anl-username");
    Cmd.refreshHead();
    Cmd.delayPrint(20,100,[
        "Logout.",
    ],resolve);
};
Fun.su = (resolve = ()=>{}) => {
    document.getElementById("rooted").hidden = false;
    document.getElementById("rooted").classList.add("show");
    window.setTimeout((resolve) => {
        document.getElementById("rooted").classList.remove("show");
        Cmd.delayPrint(20,100,[
            "Nice job !",
        ],resolve);
    },2000,resolve);
    window.setTimeout(() => {
        document.getElementById("rooted").hidden = true;
    },2500);
};