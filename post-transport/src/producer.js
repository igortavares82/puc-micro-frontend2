import { WindowPostMessageProxy } from 'window-post-message-proxy';

const producer = (eventType, data) => {

    const proxy = new WindowPostMessageProxy({ logMessages: false });
    const iframes = Array.from(document.getElementsByTagName('iframe'));

    iframes.forEach(it => proxy.postMessage(it.contentWindow, { type: eventType, data: data }));
}

export default producer;