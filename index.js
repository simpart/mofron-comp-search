/**
 * @file mofron-comp-{@comp-name}/index.js
 * @brief component module template for developper
 * @license MIT
 */
const Input  = require("mofron-comp-input");
const Button = require("mofron-comp-button");
const comutl = mofron.util.common;

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
            
            this.confmng().add("searchEvent", { type: "event", list: true });

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
            
	    this.button().config({ text:"Search" });
            this.child([this.input(), this.button()]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    input (prm) {
        try {
	    if (true === comutl.isinc(prm, "Input")) {
                prm.config({
                    type: "search", height: "0.31rem", accentColor: [180,180,180]
		});
	    }
            return this.innerComp("input", prm, Input);
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
    
    button (prm) {
        try {
            if ("string" === typeof prm) {
                this.button().text(prm);
                return;
            } else if (true === comutl.isinc(prm, "Button")) {
                prm.style({ "position": "relative", "left": "-0.01rem" });
		prm.clickEvent((p1,p2,p3) => {
		    let evt = p3.searchEvent();
		    for (let eidx in evt) {
                        evt[eidx][0](
			    p3,
			    p3.input().value(),
			    evt[eidx][1]);
		    }
		}, this);
	    }
            return this.innerComp("button", prm, Button);
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

    height (prm) {
        try {
            this.child()[0].height(prm);
	    return this.child()[1].height(comutl.sizediff(prm,"0.06rem"));
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    searchEvent (fnc,prm) {
        try {
            return this.confmng(
	        "searchEvent",
		(undefined === fnc) ? undefined : [fnc,prm]
            );
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */
