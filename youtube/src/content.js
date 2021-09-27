const contents = document.querySelector('.contents');

// 데이터 추가해서 만들 예정

function createContent(
  thumbnail,
  title,
  channelImg,
  channelName,
  viewCount,
  uploadTime
) {
  const content = document.createElement('li');
  content.className = 'content-item';
  content.innerHTML = `
              <a class="content-item__thumbnail" href="">
                <img
                  src="https://i.ytimg.com/vi/d51VllfS3oU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBn_P1w4-gZKPbqogRbojidCWDnsw"
                  alt="content thumbnail"
                />
              </a>
              <div class="content-item__details">
                <a class="content-item__channel-img" href="">
                  <img
                    src="https://yt3.ggpht.com/6xOBiHC0rSAa74kQ8MLBDW_sYN0KRCebJGlGODREsjypB9zOEx63TXR1oSslLLe9ptDIAcjV6Q=s68-c-k-c0x00ffffff-no-rj"
                    alt="channel img"
                  />
                </a>
                <div class="content-item__texts">
                  <h3 class="content-item__title">
                    아이유 - Blueming [유희열의 스케치북/You Heeyeol’s
                    Sketchbook] | KBS 200918 방송
                  </h3>
                  <div class="content-item__info">
                    <a class="content-item__channel_name" href="">KBS Kpop</a>
                    <span class="content-item__view_count">조회수 248만회</span>
                    <span class="content-item__upload_time">1년 전</span>
                  </div>
                </div>
              </div>
        `;
  return content;
}

for (let i = 0; i < 16; i++) {
  const item = createContent();
  contents.appendChild(item);
}
