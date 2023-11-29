const dynamo = require('../gateway/dynamo.gateway');

module.exports.handler = async (event) => {
    const data = JSON.parse(event.body);

    try {
        const result = await dynamo.update(event.pathParameters.id, 'set title = :title, description = :desc', {
            ':title': data.title,
            ':desc': data.description,
        }, process.env.DYNAMODB_TABLE);
        return { statusCode: 200, body: JSON.stringify(result.Attributes) };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify(error) };
    }
};
