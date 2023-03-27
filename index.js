const youtubedl = require('youtube-dl-exec');
const fs = require('fs');
const videoUrl2 = 'https://www.youtube.com/watch?v=5Kt005xOswg';

const download = async (videoUrl) => {
    try {
        console.log('downloading', videoUrl)
        const output = await youtubedl(videoUrl, {
            // Specify any options for the video download
            // For example, to download the video in the best quality and in mp4 format:
            o: '/Users/johan.velasquez/personal/videos/youtubeDownloader/%(title)s.%(ext)s'
        })
        console.log(output);
    } catch (error) {
        console.error(`Error ${videoUrl} : ${error.message}`);
    } 
};

const getFiles = async(route) => {
    const data = fs.readFileSync(route);
    const content = data.toString();
    const lines = content.split('\n');
    console.log(lines)
    await Promise.all(lines.map(file => {
        download(file);
    }));
    console.log('Termino de descargar todos los archivos');
}

getFiles('./files.txt')