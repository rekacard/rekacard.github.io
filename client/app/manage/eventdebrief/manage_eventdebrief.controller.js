(function () {
    angular
        .module("PAF")          
        .controller("EventDebriefCtrl", EventDebriefCtrl);    

    function EventDebriefCtrl() {

        var vm = this;

Survey.Survey.cssType = "bootstrap";

var surveyJSON = {pages:[{elements:[{type:"comment",name:"3 Challenges Encountered",title:"Please list 3 challenges encountered."},{type:"comment",name:"question1",title:"Please list 3 things worth-mentioning (e.g., things done well)."}],name:"page1"},{elements:[{type:"matrix",columns:["1","2","3","4","5"],name:"question2",rows:["Emcee","Attitude","Punctuality"],title:"Please rate the emcee on the following scales (1 = Poor, 5 = Excellent)"},{type:"matrix",columns:["1","2","3","4","5"],name:"question3",rows:["Photography","Attitude","Punctuality"],title:"Please rate the photographer on the following scales (1 = Poor, 5 = Excellent)"},{type:"matrix",columns:["1","2","3","4","5"],name:"question4",rows:["Logistics","Attitude","Punctuality"],title:"Please rate the logistics in-charge on the following scales (1 = Poor, 5 = Excellent)"}],name:"page2"}]}

function sendDataToServer(survey) {
    survey.sendResult('b87b4992-78e0-427b-b7da-fa4501a0de61');
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});




    } // END EventDebriefCtrl

})();