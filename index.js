
  async function fetchDataAndDisplay() {
    try {
        const response = await fetch("https://devwebapi.edgelearning.co.in/api/interview/certification");
        console.log(response, 'response');
        const data = await response.json();
        console.log(data, 'data');

       
        document.getElementById("certImage").src = data.image_url;
        document.getElementById("certData").innerHTML = `<strong>Certification Name:</strong> ${data.cert_name}<br><strong>Issuer:</strong> ${data.issuer}<br><strong>Expiry Date:</strong> ${data.expiry_date}`;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchDataAndDisplay();