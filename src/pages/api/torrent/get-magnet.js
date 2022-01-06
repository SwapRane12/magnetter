import Torrent from '../../../server/methods/torrent'

export default async function handler(req, res) {
	const torrent = req.body
	console.log(torrent)
	const magnet = await Torrent.getMagnet(torrent)
	console.log(magnet)
	res.status(200).send(magnet)
}
