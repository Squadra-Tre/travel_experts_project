function Confirm_Buttons() {
    var txtconf;
    if (confirm("Are you sure you want to delete this Travel Package?")) {
      txtconf = "Travel Package Deleted";
    } else {
      txtconf = "Cancelled";
    }
  
    alert(txtconf);
  
    document.getElementById("test").innerHTML = txtconf;
  }