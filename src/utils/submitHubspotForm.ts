import Cookies from "js-cookie";
import getIPAddress from "./getIPAddress";

export default async function submitHubspotForm(
  name: string,
  phone: string,
  email: string,
  portalId: string,
  formGuid: string
) {
  console.log("name", name);
  console.log("phone", phone);
  console.log("email", email);
  // Set the URL for the HubSpot form submission endpoint
  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

  // Set the HubSpot portal ID and form GUID for your specific form

  // Create an object with the submission data
  const submissionData = {
    submittedAt: new Date(Date.now()).getTime().toString(),
    fields: [
      // {
      //   name: "name",
      //   value: name,
      // },
      {
        objectTypeId: "0-1",
        name: "phone",
        value: phone,
      },
      {
        objectTypeId: "0-1",
        name: "email",
        value: email,
      },
    ],
    context: {
      hutk: Cookies.get("hubspotutk"),
      pageUri: window.location.href,
      ipAddress: await getIPAddress(),
    },
  };

  // Send a POST request to the HubSpot API with the submission data
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submissionData),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          "Error submitting HubSpot form: " + response.statusText
        );
      }
    })
    .then((data) => {
      // Handle the successful submission of the form
      console.log("HubSpot form submitted successfully:", data);
      // You can add your own code here to handle the successful submission of the form
    })
    .catch((error) => {
      // Handle any errors that occurred during the submission of the form
      console.error("Error submitting HubSpot form:", error);
      // You can add your own code here to handle errors that occurred during the submission of the form
    });
}
