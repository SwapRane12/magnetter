import TorrentSearchApi from 'torrent-search-api'

TorrentSearchApi.enableProvider('1337x')

export default class Torrent {
  static async search(keyWord, category) {
    console.log('keyword', keyWord)
    return await TorrentSearchApi.search(keyWord, category, 50)
  }

  static async getMagnet(torrent) {
    return await TorrentSearchApi.getMagnet(torrent)
  }
}
