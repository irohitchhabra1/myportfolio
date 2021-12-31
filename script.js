let expandableCircle = document.getElementById("expandableCircle");
let navBar = document.getElementById("navBar");
let hamCon = document.getElementById("ham-con");
let bar1 = document.getElementById("bar1");
let bar2 = document.getElementById("bar2");
let bar3 = document.getElementById("bar3");
let popup = document.getElementById("contact-popup");

function myFunction(x) {
  x.classList.toggle("change");
  expandableCircle.classList.toggle("circle-click");
  navBar.classList.toggle("active-nav");
  bar1.classList.toggle("bar1-active");
  bar2.classList.toggle("bar2-active");
  bar3.classList.toggle("bar3-active");
  }

function closeNav() {
  expandableCircle.classList.remove("circle-click");
  navBar.classList.remove("active-nav");
  bar1.classList.remove("bar1-active");
  bar2.classList.remove("bar2-active");
  bar3.classList.remove("bar3-active");
  hamCon.classList.remove("change");
}


// Form validation starts here 

document.getElementById('form-submit').addEventListener('click', function(){
  let name = document.getElementById('exampleInputPassword1').value;
  let email = document.getElementById('exampleInputEmail1').value;
  let message = document.getElementById('exampleFormControlTextarea1').value;
  if (name==['']) {
    document.getElementById('name-error').innerText ="Your Name is Required";
    // alert('name required')
  } else if(email==''){
    document.getElementById('email-error').innerText ="Your Email is Required";
  } else if (message=='') {
    document.getElementById('message-error').innerText ="Your Message is Required";
  } else{
    var myModal = new bootstrap.Modal(document.getElementById('myModal'), options);
    myModal.show()
  }
})