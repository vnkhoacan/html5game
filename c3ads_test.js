const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
const dac = params.dac; 

function adsenseHead(channelId) {
  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('crossorigin', 'anonymous');
  script.setAttribute('data-ad-channel', channelId);
  script.setAttribute('data-ad-client', 'ca-pub-5761017298734489');
  script.setAttribute('data-ad-frequency-hint', '30s');
  script.setAttribute('data-page-url', 'thegametub.com');  
//   script.setAttribute("data-adbreak-test", "on");
  script.setAttribute('src', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
  
  document.head.appendChild(script);
}

window.dataLayer = window.dataLayer || [];
  function gtag() {
      window.dataLayer.push(arguments);
  }


function initGoogleTagManager(gtmId) {
    let scriptElement = document.createElement("script");
    scriptElement.async = true;
    scriptElement.src = `https://www.googletagmanager.com/gtag/js?id=${gtmId}`;

    gtag("js", new Date());
    gtag("config", gtmId);
    document.head.appendChild(scriptElement);   
}

function google_conversion(dac, adinit) {
  switch (dac) {
    case '5937425871':
      gtag('event', 'conversion', {'send_to': 'AW-16731033189/OBhPCMvK1NoZEOWc_ak-'});
      break;
    case '9685099191':
      gtag('event', 'conversion', {'send_to': 'AW-16731044528/UT7ECKuo1doZELD1_ak-'});
      break;
    case '3183834677':
      console.log('conversion event init',adinit);
  
      gtag('event', 'conversion', {'send_to': 'AW-16732449247/p_94CPv8iNsZEN_T06o-'});
      break;
  }
}

function google_headCode(dac) {
  switch (dac) {
      case '5937425871':
        initGoogleTagManager('AW-16731033189')
        break;
    
      case '9685099191':
        initGoogleTagManager('AW-16731044528')
        break;

      case '3183834677':
        initGoogleTagManager('16732449247')
        break;
  }
}

 if (dac != undefined && dac != null ) {
    adsenseHead(dac);
    google_headCode(dac);
  }else{
    adsenseHead("9301369745");
  }


let showAd = () => {
  console.log('browse ad init');
  google_conversion(dac, 'browse ad');
	window.adBreak({
	type: "browse",
	name: "browse",
	});
};
  
  window.adsbygoogle = window.adsbygoogle || [];

  window.adConfig = function (o) {
    window.adsbygoogle.push(o);
  };

  window.adBreak = function (o) {
    window.adsbygoogle.push(o);
  };

const intervalId_game = setInterval(() => {
  if (window.playerRemoved) {
    window.adConfig({
      preloadAdBreaks: "on",
      sound: 'off',
      onReady: showAd,
    });
    clearInterval(intervalId_game);
  }
}, 500);
  
//   adConfig({sound: 'on', preloadAdBreaks: 'on'});
  
// ad placement api code

function ShowInterstitial_Preroll() {
  const intervalId_game = setInterval(() => {
  if (window.playerRemoved) {
    console.log('preroll ad init');  
    window.adBreak({
      type: 'preroll',
      name: 'game_preroll',
      beforeAd: () => {
        if (typeof dac !== 'undefined') {
          google_conversion(dac,'preroll ad');
        } else {
          console.warn('dac is undefined');
        }
      },
      adBreakDone: (info) => {
        if (typeof c3_callFunction === 'function') {
          c3_callFunction("ForceUnmute", []);
        } else {
          console.warn('c3_callFunction is not defined or not a function');
        }
      }
    });
    clearInterval(intervalId_game);
    c3_callFunction("ForceMute", []);
  }
}, 500);
}

function ShowInterstitial_Next() {
  window.gameRestart =true;
	window.adBreak({
		type: 'next',
		name: 'game_next',
		adBreakDone: (info) => {
			c3_callFunction("ForceUnmute", []);
		}
	});
	c3_callFunction("ForceMute", []);
}


function ShowRewarded() {
 const intervalId_game = setInterval(() => {
if (window.playerRemoved) {
   window.adBreak({
          type: 'reward',
          name: 'show_rewarded',
          beforeAd: () => {
                  c3_callFunction("ForceMute", []);
          },
          afterAd: () => {
                  c3_callFunction("ForceUnmute", []);
          },
          beforeReward: (showAdFn) => {
                  showAdFn();
          },
          adDismissed: () => {
                  c3_callFunction("RewardedAdDismissed", []);
          },
          adViewed: () => {
                  c3_callFunction("RewardedAdWatched", []);

          }
      });
  
  clearInterval(intervalId_game);
}
}, 500);

}

// const functions = [ShowInterstitial_Preroll, ShowInterstitial_Next, ShowRewarded];
// let currentFunctionIndex = 0;

// function callNextFunction() {
//     functions[currentFunctionIndex]();
//     currentFunctionIndex = (currentFunctionIndex + 1) % functions.length;
// }

// Set an interval to call the function every 30 seconds (30000 milliseconds)
// setInterval(callNextFunction, 30000);

// window.addEventListener('unload', function(event) {
//   const isHeavyAdIntervention = event.persisted && event.isReloading && event.wasDiscarded;

//   if (isHeavyAdIntervention) {
//     console.log('Heavy Ad Intervention detected');
//     // You can perform additional actions here, like logging or reporting the intervention
//   }
// });
// // caillback that will handle intervention reports
// function sendReport(report) {
//     console.log('heavy ad intervention report', report);
// }

// const options = {
//   types: ["intervention"],
//   buffered: true,
// };

// const observer = new ReportingObserver((reports, observer) => {
//     for (const report of reports) {
//         sendReport(JSON.stringify(report.body));
//     }
// }, options);

// observer.observe();