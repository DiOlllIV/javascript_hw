export function createLogger() {

    let message = '';
    let loggerArr = [];

    function warn(text) {
        message = text;
        return loggerArr.push({
            message: text,
            dateTime: Date(),
            type: 'warn'
        });
    };

    function error(text) {
        message = text;
        return loggerArr.push({
            message: text,
            dateTime: Date(),
            type: 'error'
        });
    };

    function log(text) {
        message = text;
        return loggerArr.push({
            message: text,
            dateTime: Date(),
            type: 'log'
        });

    };

    function getRecords() {
        return loggerArr.sort((acc, rec) => (acc.dataTime - rec.dataTime));
    };

    const warn = warn();
    const error = error();
    const log = log();

    return {
        warn,
        error,
        log,
        getRecords,
    }
};

const logger = createLogger();