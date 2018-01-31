window.Scott = {

	selectors: {
        FORM:     "#form",
		QUESTION: "#question",
		RESPONSE: "#response",
		ANSWER:   "#answer",
		ASK:      ".askScott",
		RESET:    ".reset"
	},

	strings: {
        TRACKING_ID: "What Would Scott Do",
        EMPTY_QUESTION: "Even Scott, in his infinite wisdom, cannot read your mind. Please enter a question."
	},
	
	prefaces: [
	    "That's a dumb question ... of course he would ",
	    "Ooh, tough one ... ",
	    "Without a doubt, Scott would ",
	    "Good question. In this situation Scott would ", 
	    "This is only a guess, but Scott would probably ",
	    "You're screwed. Scott says you should immediately ",
	    "I'm just sayin' ... ",
	    "Are you a mindless ninny ... "
	],
	    
    answers: [
	    "drink beer and sit on the front porch.", 
	    "drink beer and watch soccer.", 
	    "drink beer and sit on the back porch.",
	    "watch soccer, and probably ... who are we kidding ... definitely drink beer."
	],

	init: function() {
		$(Scott.selectors.ASK).bind("click", function(e) {
			e.preventDefault();
			Scott.ask();
		});
		$(Scott.selectors.RESET).bind("click", function(e) {
			e.preventDefault();
			Scott.reset();
		});
		$(Scott.selectors.QUESTION).val("").focus();
	},
	
	ask: function() {
	
        var thePreface  = "";
        var lastPreface = "";
        var lastAnswer  = "";
        var theAnswer   = "";
        var max = 100;
        var n = 0;

        var question = $(Scott.selectors.QUESTION).val().replace(/^\s*|\s*$/g,"");
        if (question == "") {
            alert(Scott.strings.EMPTY_QUESTION);
            return false;
        }
        
        n = 0;
        while (thePreface == lastPreface && n<max) {
            thePreface = Scott.prefaces[Math.floor(Math.random() * Scott.prefaces.length)];
            n++;
        }
        
        n = 0;
        while (theAnswer == lastAnswer && n<max) {
             theAnswer = Scott.answers[Math.floor(Math.random() * Scott.answers.length)];
             n++;
        }
        
        $(Scott.selectors.FORM).fadeOut(200, function() {
            $(Scott.selectors.RESPONSE).fadeIn(200);
            $(Scott.selectors.ANSWER).text(thePreface + theAnswer);
        });
        
        window.pageTracker._trackPageview(Scott.strings.TRACKING_ID);
    },
    
    reset: function() {
        $(Scott.selectors.RESPONSE).fadeOut(200, function() {
            $(Scott.selectors.FORM).fadeIn(200);
            $(Scott.selectors.ANSWER).text("");
			$(Scott.selectors.QUESTION).val("").focus();
        });
    }

};