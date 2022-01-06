// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Torrent from '../../../../server/methods/torrent'

export default async function handler(req, res) {
	const keyWord = req.query.id
	console.log(keyWord)
	const results = await Torrent.search(keyWord)
	console.log(results)
	res.status(200).send(results)
}
