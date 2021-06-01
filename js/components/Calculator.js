class Calculator {
    constructor(selector) {
        this.selector = selector;

        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }

        this.render();
    }

    isValidSelector() {
        return true;
    }

    render() {
        let HTML = '';

        this.DOM.innerHTML = HTML;
    }
}

export { Calculator }