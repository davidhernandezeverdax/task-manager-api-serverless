const dynamo = require('../gateway/dynamo.gateway');

module.exports.handler = async (event) => {
  try {
    const result = await dynamo.get(event.pathParameters.id, process.env.DYNAMODB_TABLE);
    if (result.Item) {
      return { statusCode: 200, body: JSON.stringify(result.Item) };
    } else {
      return { statusCode: 404, body: 'Task not found' };
    }
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify(error) };
  }
};
