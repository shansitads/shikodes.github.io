var challenges;
var challengeData = {
	"all_challenges" : [
		{
			"header" : "swifter than swift",
			"info"   : "some info",
			"date"   : "Friday, 7 Aug 2020",
			"time"   : "6.00pm"
		},{
			"header" : "rustier than rust",
			"info"   : "some info",
			"date"   : "Friday, 7 Aug 2020",
			"time"   : "6.00pm"
		},{
			"header" : "some other coding challenge",
			"info"   : "some info",
			"date"   : "Friday, 7 Aug 2020",
			"time"   : "6.00pm"
		}
	]
}

$ = arg => document.getElementById(arg)

modifyNav = () => {
	x = getPositionFromTop($("navbar"))
	if (x > 100 && $("navbar").className.indexOf("has-shadow") < 0) {
		$("navbar").className += " has-shadow"
	} else if (x < 100) {
		$("navbar").className = $("navbar").className.replace("has-shadow","")
	}
}

function getPositionFromTop (element) {
	return window.pageYOffset + element.getBoundingClientRect().top
}

renderVueElems = () => {
	var challenges = new Vue ({
		el   : "#challenges", 
		data : challengeData
	})
}

renderVueElems()