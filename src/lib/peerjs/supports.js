import { webRTCAdapter } from './adapter';

export const Supports = new class {
  isIOS = ['iPad', 'iPhone', 'iPod'].includes(navigator.platform);
  supportedBrowsers = ['firefox', 'chrome', 'safari'];

  minFirefoxVersion = 59;
  minChromeVersion = 72;
  minSafariVersion = 605;

  isWebRTCSupported() {
    return typeof RTCPeerConnection !== 'undefined';
  };

  isBrowserSupported() {
    const browser = this.getBrowser();
    const version = this.getVersion();

    const validBrowser = this.supportedBrowsers.includes(browser);

    if (!validBrowser) return false;

    if (browser === 'chrome') return version >= this.minChromeVersion;
    if (browser === 'firefox') return version >= this.minFirefoxVersion;
    if (browser === 'safari') return !this.isIOS && version >= this.minSafariVersion;

    return false;
  }

  getBrowser() {
    return webRTCAdapter.browserDetails.browser;
  }

  getVersion() {
    return webRTCAdapter.browserDetails.version || 0;
  }

  isUnifiedPlanSupported() {
    const browser = this.getBrowser();
    const version = webRTCAdapter.browserDetails.version || 0;

    if (browser === 'chrome' && version < 72) return false;
    if (browser === 'firefox' && version >= 59) return true;
    if (!window.RTCRtpTransceiver || !('currentDirection' in window.RTCRtpTransceiver.prototype)) return false;

    let tempPc;
    let supported = false;

    try {
      tempPc = new RTCPeerConnection();
      tempPc.addTransceiver('audio');
      supported = true;
    } catch (e) { }
    finally {
      if (tempPc) {
        tempPc.close();
      }
    }

    return supported;
  }

  toString() {
    return `Supports: 
    browser:${this.getBrowser()} 
    version:${this.getVersion()} 
    isIOS:${this.isIOS} 
    isWebRTCSupported:${this.isWebRTCSupported()} 
    isBrowserSupported:${this.isBrowserSupported()} 
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`;
  }
}