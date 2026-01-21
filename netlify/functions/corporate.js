const responses = [
  "We're currently optimizing our delivery pipeline.",
  "This feature is in our Q47 roadmap.",
  "We're leveraging synergies to accelerate development.",
  "Our team is ideating on the best user experience.",
  "We're in the discovery phase of our agile methodology.",
  "This is currently being prioritized by stakeholders.",
  "We're conducting extensive market research.",
  "Our engineers are architecting a scalable solution.",
  "We're aligning with our strategic initiatives.",
  "This is pending approval from the steering committee.",
  "We're optimizing for maximum ROI.",
  "Our UX team is iterating on the design thinking process.",
  "We're implementing best practices for enterprise readiness.",
  "This requires cross-functional collaboration.",
  "We're ensuring compliance with industry standards.",
  "Our product team is validating the MVP requirements.",
  "We're conducting A/B tests on the user journey.",
  "This is in our technical debt backlog.",
  "We're waiting for budget allocation approval.",
  "Our DevOps team is setting up the CI/CD pipeline."
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