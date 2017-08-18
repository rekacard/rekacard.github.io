(function () {
    angular
        .module("PAF")          
        .controller("UserEventFeedbackCtrl", UserEventFeedbackCtrl);    

    UserEventFeedbackCtrl.$inject = [ 'user' ];

    function UserEventFeedbackCtrl(user) {

    var vm = this;
    if (user) {
      vm.parseuser = user;
      vm.user = vm.parseuser.split(',')[0];
      vm.role = (vm.parseuser.split(',')[1] == '1')? '1':'';
    }

    Survey.Survey.cssType = "bootstrap";

        var surveyJSON = {"pages":[{"elements":[{"type":"matrix","columns":["1","2","3","4","5"],"isRequired":true,"name":"Event_Rating","rows":[{"value":"well_organized","text":"Well-organised"},{"value":"good_timing","text":"Time well managed"},{"value":"meaningful","text":"Meaningful"},{"value":"fun","text":"Engaging / Fun"}],"title":"Please rate the event programme on the following dimensions (1 = Not at all, 5 = Very much)"}],"name":"page1"},{"elements":[{"type":"matrix","columns":["1","2","3","4","5"],"isRequired":true,"name":"Organizer_rating","rows":["Friendly and approachable","Prompt in responding to emails","Provided clear instructions","Good leadership"],"startWithNewLine":false,"title":"Please rate the event organizers on the following dimensions (1 = Not at all, 5 = Very much)"}],"name":"page2"},{"elements":[{"type":"panel","elements":[{"type":"comment","name":"open_feedback","startWithNewLine":false,"title":"Is there anything else you would like to share? \n(E.g., challenges you encountered, constructive suggestions, words of encouragement)"}],"name":"panel1"}],"name":"page3"}]}

        function sendDataToServer(survey) {
            survey.sendResult('19e3c867-97dd-457d-9575-0ccbd19c75e6');
        }

        var survey = new Survey.Model(surveyJSON);
        $("#surveyContainer").Survey({
            model: survey,
            onComplete: sendDataToServer
        });

    } // END UserEventFeedbackCtrl

})();