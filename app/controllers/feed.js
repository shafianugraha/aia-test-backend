const axios = require('axios');

module.exports = async (req, res) => {
  try{
    const tags = req.query.tag
    const result = await axios.get(`https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&tags=${tags}`)
    const data = (result.data?.items);
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;
    const offset = limit * (page - 1);
    const totalPages = Math.ceil(data.length / limit);
    const paginatedItems = data.slice(offset, limit * page);
    if (data.length < 1) {
      return res.status(404).json({message: 'No Image Found!'})
    }
    return res.json({
      data: paginatedItems,
      totalPages,
    })
  } catch(error) {
    return res.status(400).json({message: error.message});
  }
};
