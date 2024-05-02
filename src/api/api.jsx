// api.js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  limit: 10,
  offset: 0,
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw, // Add body to the request
};

export async function getData() {
  try {
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json(); // Parse JSON response
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
