function talk(){
    var know = {
    "Hai":"Hello,How can I help You",
    "Hello":"Hai,How can I help You",
    "Who are you" : "I am ChatBot ",
    "How are you" : "Good :)",
    "What can i do for you" : "Please Give us A Follow & Like.",
    "Your followers" : "I have my family of 5000 members, i don't have follower ,have supportive Famiy ",
    "ok" : "Thank You So Much ",
    "Bye" : "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value;
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }