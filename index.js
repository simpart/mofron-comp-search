/**
 * @file mofron-comp-{@comp-name}/index.js
 * @brief component module template for developper
 * @license MIT
 */
const Input  = require("mofron-comp-input");
const Button = require("mofron-comp-button");

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (mixed) 
     *                key-value: component config
     * @short 
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("Search");
	    this.shortForm("text");
            
	    /* init config */
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
	    this.style({ "display" : "flex" });
            
            this.child([
	        new Input({ type:"search", height: "0.31rem", accentColor:[180,180,180] }),
		new Button({
		    text:  "Search",
		    style: { "position": "relative", "left": "-0.01rem" }
		})
            ]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    text (ph, btn) {
        try {
            this.placeholder(ph);
	    this.buttonText(btn);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    placeholder (prm) {
        try {
	    let inp = this.child()[0];
	    return inp.childDom().attrs(
	        (undefined === prm) ? prm :  { "placeholder" : prm }
            );
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    buttonText (prm) {
        try {
            let btn = this.child()[1];
	    return btn.text(prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    fontFamily (prm) {
        try {
            this.child()[0].style({ "font-family" : "'" + prm + "'" });
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    width (prm) {
        try {
            this.child()[0].width(prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
