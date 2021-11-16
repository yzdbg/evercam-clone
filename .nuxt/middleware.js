const middleware = {}

middleware['authentication'] = require('../middleware/authentication.js')
middleware['authentication'] = middleware['authentication'].default || middleware['authentication']

export default middleware
