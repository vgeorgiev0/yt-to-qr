      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      let player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          
          videoId: 'gEPmA3USJdI',
          playerVars: {
            'rel': 0,
          },
        });
      }

      function onPlayerReady(event) {
        event.target.playVideo();
      }

      function pauseVideo() {
        player.pauseVideo();
      }

      function playVideo() {
        player.playVideo();
      }
      
      function stopVideo() {
        player.stopVideo();
      }
