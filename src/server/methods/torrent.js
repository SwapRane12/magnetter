import TorrentSearchApi from 'torrent-search-api'


TorrentSearchApi.enableProvider('1337x')

export default class Torrent {
	static async search(keyWord) {
		return await TorrentSearchApi.search(keyWord, 'Movies', 20)
	}
	
	
	static async getMagnet(torrent) {
		return await TorrentSearchApi.getMagnet(torrent)
	}
}

