// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Torrent from '../../../../../server/methods/torrent'

export default async function handler(req, res) {
	const { id, category } = req.query

	// console.log('sss', id, category)
	const results = await Torrent.search(id, category)
	console.log(results)
	res.status(200).send(results)
}
