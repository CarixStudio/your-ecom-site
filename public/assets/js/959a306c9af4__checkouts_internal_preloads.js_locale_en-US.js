
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.DgHYkVzi.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.D97YQXqV.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.DFpYVScY.js","/cdn/shopifycloud/checkout-web/assets/c1/page-Information-legacy.Cr5SA5xP.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer-legacy.DZ5BJH40.js","/cdn/shopifycloud/checkout-web/assets/c1/ButtonWithRegisterWebPixel-legacy.CzU0IW4v.js","/cdn/shopifycloud/checkout-web/assets/c1/OffsitePaymentFailed-legacy.4H9Rmuu-.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryMethodSelectorSection-legacy.CIt8BC29.js","/cdn/shopifycloud/checkout-web/assets/c1/useEditorShopPayNavigation-legacy.Bqz21WCN.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment-legacy.C5C1YDeZ.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0606/5451/8510/files/Rhode_Logo_175f81be-4830-46ae-b71e-1111bec5d719_x320.png?v=1655295067"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  