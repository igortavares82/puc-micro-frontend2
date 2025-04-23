import { WindowPostMessageProxy } from 'window-post-message-proxy';

const consumer = (type, handle) => {

    const proxy = new WindowPostMessageProxy({ logMessages: false });

    const handler = {
        test: (event) => event.type === type,
        handle: (event) => {

            event.handled = true;
            handle(event.data);

            return event;
        }
    }

    proxy.addHandler(handler);
}

export default consumer;