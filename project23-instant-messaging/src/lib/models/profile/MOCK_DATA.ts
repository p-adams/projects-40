export const flintstonesCharacter: App.Profile = {
  id: "fred_flintstone",
  token: "1yCCsBqwn2xaJqsXZrfki",
  image: {
    // You can provide the File object here or use a placeholder
    name: "fred.png",
    size: 1024, // Replace with the actual file size
    type: "image/png", // Replace with the actual file type
  } as File,
  about: {
    name: "Fred Flintstone",
    location: "Bedrock",
    contact: {
      email: "fred.flintstone@bedrockmail.com",
      phone: "555-123-4567",
      website: "www.bedrockrocks.com",
    },
    address: {
      street: "123 Rock Lane",
      state: "Prehistoric",
      country: "U.S.A.",
      zip: 12345,
    },
  },
  timeline: [
    {
      content: {
        text: "Married Wilma",
      },
      timestamp: "October 5, 1957",
    },
    {
      content: {
        text: "Became a father to Pebbles",
      },
      timestamp: "February 22, 1963",
    },
  ],
  messages: [
    {
      name: "Barney Rubble",
      message: "Hey Fred, let's go bowling tonight!",
      timestamp: "2023-09-14T18:30:00Z",
    },
    {
      name: "Wilma Flintstone",
      message: "Fred, don't forget to pick up some groceries on your way home!",
      timestamp: "2023-09-14T19:15:00Z",
    },
  ],
};
