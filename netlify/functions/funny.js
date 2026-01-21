const responses = [
  "Still debugging the universe.",
  "The hamsters powering this are on strike.",
  "We're waiting for the intern to get back from lunch.",
  "The code is currently arguing with itself.",
  "Our servers are powered by hopes and dreams.",
  "The feature is stuck in traffic.",
  "We're waiting for the right planetary alignment.",
  "The developers are still googling how to do this.",
  "Our AI became sentient and quit.",
  "The code is having an existential crisis.",
  "We're waiting for Stack Overflow to answer our question.",
  "The feature is in witness protection.",
  "Our rubber duck debugger is on vacation.",
  "The code is currently in therapy.",
  "We're waiting for the coffee machine to be fixed.",
  "The feature escaped and we can't find it.",
  "Our servers are powered by a potato.",
  "The code is stuck in an infinite loop of procrastination.",
  "We're waiting for the magic to happen.",
  "The feature is currently learning to exist."
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