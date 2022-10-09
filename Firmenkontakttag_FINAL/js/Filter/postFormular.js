/**
 * Post form data
 */

function post() {
  const logo = document.getElementById("input_file").value;
  const name = document.getElementById("input_name").value;
  const location = document.getElementById("input_location").value;
  const url = document.getElementById("input_url").value;
  const shortText = document.getElementById("input_shortText").value;
  const longText = document.getElementById("input_longText").value;
  const applyUrl = document.getElementById("input_applyUrl").value;
  const applyEmail = document.getElementById("input_applyEmail").value;
  const applyNumber = document.getElementById("input_applyNumber").value;
  const upload = document.getElementById("input_upload").value;
  const otherApplys = document.getElementById("input_otherApplys").value;

  // validate inputs
  if (
    logo == "" ||
    name == "" ||
    location == "" ||
    url == "" ||
    shortText == "" ||
    longText == ""
  ) {
    alert("Bitte alle Pflichtfelder ausfüllen");
    return;
  }

  if (!validateUrl(url)) {
    alert("Bitte richtige website angeben");
    return;
  }

  if(applyUrl != "" && !validateUrl(applyUrl)){
    alert("Bitte richtige url angeben");
    return;
  }

  if(applyEmail != "" && !validateEmail(applyEmail)){
    alert("Bitte richtige Email angeben");
    return;
  }

  if(applyNumber != "" && !validateNumber(applyNumber)){
    alert("Bitte richtige Nummer angeben");
    return;
  }

  // Success
  const data = {
    logo: logo,
    name: name,
    location: location,
    website: url,
    shortText: shortText,
    longText: longText,
    applyUrl: applyUrl,
    applyEmail: applyEmail,
    applyNumber: applyNumber,
    upload: upload,
    otherApplys: otherApplys,
  };

  // run in terminal "node js/server.js" for terminal (npm package node required)
  fetch("http://localhost:3001/form", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  // clear inputs
  document.getElementById("input_file").value = "";
  document.getElementById("input_name").value = "";
  document.getElementById("input_location").value = "";
  document.getElementById("input_url").value = "";
  document.getElementById("input_shortText").value = "";
  document.getElementById("input_longText").value = "";
  document.getElementById("input_applyUrl").value = "";
  document.getElementById("input_applyEmail").value = "";
  document.getElementById("input_applyNumber").value = "";
  document.getElementById("input_upload").value = "";
  document.getElementById("input_otherApplys").value = "";
}

function validateEmail (email) {
  return email.indexOf("@") >= 0 && email.indexOf(".") >= 0;
}


function validateUrl (email) {
  return email.indexOf("www.") >= 0 && email.indexOf(".de") >= 0;
}

function validateNumber (number) {
  return !isNaN(number);
}
