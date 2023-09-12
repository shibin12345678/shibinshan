 function sendMail(){
    var params={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        Message: document.getElementById("Message").value
    };

const serviceId="service_dyrriyj";
const templateId="template_71498tw";

emailjs
.send(serviceId,templateId,params)
.then(
    res =>{
        document.getElementById("name").value = ""; 
        document.getElementById("email").value = ""; 
        document.getElementById("Message").value = ""; 
        console.log(res);
        alert("Your message sent successfully");
    }) 
    .catch((err) => console.log(err));

}