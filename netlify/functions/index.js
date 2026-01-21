const responses = [
  "Still not yet.",
  "Nope, not ready.",
  "Almost there. Just kidding.",
  "Coming soon™",
  "In progress...",
  "Not today.",
  "Maybe tomorrow.",
  "Still working on it.",
  "Getting closer. Not really.",
  "Soon-ish.",
  "Eventually.",
  "Not quite.",
  "Still loading...",
  "Under construction.",
  "Patience, grasshopper.",
  "Rome wasn't built in a day. Neither is this.",
  "Check back later.",
  "Still brewing.",
  "Not finished yet.",
  "Work in progress."
];

function calculateDevelopmentTime() {
  const START_DATE = new Date("2016-04-01T00:00:00Z");
  const now = new Date();
  const diff = now - START_DATE;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  return { days, hours };
}

exports.handler = async (event, context) => {
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  const time = calculateDevelopmentTime();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      message: randomResponse,
      developmentTime: `In development for ${time.days} days, ${time.hours} hours.`
    })
  };
};