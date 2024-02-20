type QueueItem = {
  method: 'track' | 'set' | 'ecommerce' | 'spaPageview';
  arguments: unknown;
};

let queue: QueueItem[] = [];

/**
 * A utility that checks if zaraz exists on the window object. If not it queues
 * the events until zaraz is initialized. If zaraz is initialized, it flushes
 * the queue.
 */
export function getZaraz() {
  if (typeof window === 'undefined') {
    throw new Error(`Cannot use Zaraz Web API, because window is not defined.`);
  }

  if (!window?.zaraz) {
    // eslint-disable-next-line no-console
    console.log(`Zaraz Web API is not initialized. Queueing events...`);

    return {
      track: (...args: unknown[]) => {
        queue.push({ method: 'track', arguments: args });
      },
      set: (...args: unknown[]) => {
        queue.push({ method: 'set', arguments: args });
      },
      ecommerce: (...args: unknown[]) => {
        queue.push({ method: 'ecommerce', arguments: args });
      },
      spaPageview: (...args: unknown[]) => {
        queue.push({ method: 'spaPageview', arguments: args });
      },
    };
  }

  if (queue.length > 0) {
    // eslint-disable-next-line no-console
    console.log(`Zaraz Web API is initialized. Flushing queue...`);

    queue.forEach((event) => {
      window.zaraz[event.method](...(event.arguments as []));
    });

    // eslint-disable-next-line no-console
    console.log(`Zaraz Web API queue flushed.`);

    queue = []; // Clear the queue
  }

  return window.zaraz;
}
