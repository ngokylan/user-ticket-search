/**
 *
 * @param error
 */
function error(e: Error, data?: any) {
  // TODO: WE NEED SOME KIND OF LOG SERVICE FOR OUR FRONT-END!!!
  console.error(e, data);
}

/**
 *
 * @param error
 */
function warn(data: string) {
  // TODO: WE NEED SOME KIND OF LOG SERVICE FOR OUR FRONT-END!!!
  console.warn(data);
}

export type Logger = {
  error: (e: Error, data?: any) => void;
  warn: (data?: any) => void;
};

const logger: Logger = {
  error,
  warn,
};

export default logger;
