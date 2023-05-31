const readline = require("readline");
const axios = require("axios");

// GitHub API configuration
const GITHUB_API_URL = "https://api.github.com";
const GITHUB_TOKEN = ""; // put your github token

// Freshdesk API configuration
const FRESHDESK_API_URL = "https://your_domain.freshdesk.com/api/v2";
const FRESHDESK_API_KEY = ""; // put your freshdesk api key here

function getUserInput(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function getGithubUser(username) {
  const url = `${GITHUB_API_URL}/users/${username}`;
  const headers = {
    Authorization: `Token ${GITHUB_TOKEN}`,
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error(
      "Failed to retrieve GitHub user information:",
      error.response.data
    );
    return null;
  }
}

async function createOrUpdateFreshdeskContact(contactData, freshdeskConfig) {
  const url = `${freshdeskConfig.api_url}/contacts`;
  const authHeader = `Basic ${Buffer.from(
    freshdeskConfig.api_key + ":X"
  ).toString("base64")}`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: authHeader,
  };

  try {
    const response = await axios.get(url, { headers });
    const contacts = response.data;

    const email = contactData.email;
    const existingContact = contacts.find((contact) => contact.email === email);

    if (existingContact) {
      const contactId = existingContact.id;
      const updateUrl = `${freshdeskConfig.api_url}/contacts/${contactId}`;
      await axios.put(updateUrl, contactData, { headers });
    } else {
      await axios.post(url, contactData, { headers });
    }

    console.log("Contact created/updated successfully!");
  } catch (error) {
    console.error("Failed to create/update contact:", error.response.data);
  }
}

async function main() {
  const githubUsername = await getUserInput("Enter GitHub username: ");
  const freshdeskSubdomain = await getUserInput("Enter Freshdesk subdomain: ");

  const githubUser = await getGithubUser(githubUsername);

  if (githubUser) {
    const contactData = {
      name: githubUser.name,
      email: githubUser.email,
      job_title: githubUser.bio,
    };

    //Update the Freshdesk API URL with the provided subdomain
    const freshdeskApiUrl = FRESHDESK_API_URL.replace(
      "your_domain",
      freshdeskSubdomain
    );

    // Set the updated Freshdesk API URL in the configuration
    const freshdeskConfig = {
      api_url: freshdeskApiUrl,
      api_key: FRESHDESK_API_KEY,
    };

    await createOrUpdateFreshdeskContact(contactData, freshdeskConfig);
  } else {
    console.error("Failed to retrieve GitHub user information.");
  }
}

main();
