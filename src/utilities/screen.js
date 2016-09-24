class Screen {
    width = () => { return window.innerWidth || document.body.clientWidth; }
    height = () => { return window.innerHeight || document.body.clientHeight; }
    getScreenSize = () => {
        let w = this.width();
        if (w < 768) { return "xs"; }
        else if (w >= 768 && w < 992) { return "sm"; }
        else if (w >= 992 && w < 1200) { return "lg"; }
        else if (w >= 1200) { return "lg"; }
        else { return ""; }
    }
}

export default new Screen();