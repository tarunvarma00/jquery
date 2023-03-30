$(document).ready(function () {
  $("#submit").click(function () {
    console.log("rtarun - clicking submit button");
    var name = $("#name").val();
    var email = $("#email").val();
    var pass = $("#password").val();

    if (name.length > 0) {
      $("#p1").text("");
    }

    if (email.length > 0) {
      if (email.includes("@")) {
        $("#p2").text("");
      } else {
        $("#p2").text("Please include @");
        return false;
      }
    }
    if (pass.length > 0) {
      $("#p3").text("");
    }

    if (name.length == "") {
      $("#p1").text("Please enter your name");
      $("#name").focus();
      return false;
    } else if (email.length == "") {
      $("#p2").text("Please enter your email address");
      $("#email").focus();
      return false;
    } else if (pass.length == "") {
      $("#p3").text("Please enter your password");
      $("#password").focus();
      return false;
    } else {
      var con = confirm("Are you Done?");
      if (con == true) {
        alert("Successfully you have registered");
        $("#p1").text("");
        $("#p2").text("");
        $("#p3").text("");
        return true;
      } else {
        return false;
      }
    }
  });
});
