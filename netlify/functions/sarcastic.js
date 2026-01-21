const responses = [
  "Oh, you're still here?",
  "Shocking. It's not done yet.",
  "What a surprise. Still nothing.",
  "Did you really think it would be ready?",
  "Wow, such patience. Still no.",
  "Amazing. Still in development.",
  "Incredible. Nothing has changed.",
  "Groundbreaking. It's still not ready.",
  "Revolutionary. Still the same answer.",
  "Brilliant. You got nothing again.",
  "Genius move. Still waiting.",
  "Outstanding. Zero progress to report.",
  "Magnificent. The answer remains no.",
  "Spectacular. Still not happening.",
  "Phenomenal. Same result as always.",
  "Remarkable. Nothing new here.",
  "Extraordinary. Still not ready.",
  "Fantastic. What did you expect?",
  "Wonderful. The status quo continues.",
  "Marvelous. Absolutely nothing."
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