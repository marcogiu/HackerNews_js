exports.handler = async function (event, context) {
  const API_URL = process.env.API_URL;

  return {
    statusCode: 200,
    body: JSON.stringify({
      value1: API_URL,
    }),
  };
};