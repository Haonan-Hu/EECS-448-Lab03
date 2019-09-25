
function validate()
{
  var first = document.getElementById("firstPass").value;
  var second = document.getElementById("secondPass").value;
  if(first.length < 8)
  {
    alert("Password length less than 8");
  }
  else if(first === second)
  {
    alert("Validate!");
  }
  else
  {
    alert("Password doesn't match");
  }
}
