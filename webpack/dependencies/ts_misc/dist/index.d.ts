import * as logging from './utils/logging.js';
import * as numbers from './utils/numbers.js';
import * as string from './utils/string.js';
import * as handle from './utils/handle.js';
import * as guards from './utils/guards.js';
import * as types from './utils/types.js';
import * as sync from './utils/sync.js';
import * as sets from './utils/sets.js';
export default class Miscellaneous {
    logging: typeof logging;
    numbers: typeof numbers;
    string: typeof string;
    handle: typeof handle;
    guards: typeof guards;
    types: typeof types;
    sync: typeof sync;
    sets: typeof sets;
    get misc(): Miscellaneous;
}