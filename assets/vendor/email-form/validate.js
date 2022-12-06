$("#submit-form").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzn2JCEzDjL8jZ9lqpgFE0-Ula483ZReeyG-as4ft1geLGwPLpb12OMg-39jUebbNgGrg/exec",
    data: $("#submit-form").serialize(),
    method: "post",
    success: function (response) {
      var msg = document.getElementById('sent-message');

      msg.style.display = 'block';
      setTimeout(function () {
        window.location.reload();
      }, 3000);
      //window.location.href="https://google.com"
    },
    error: function (err) {
      alert("Something Error")

    }
  })
})