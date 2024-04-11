const measureExecutionTime = (req, res, next) => {
    const startTime = process.hrtime(); // Початковий час виконання запиту

    res.on('finish', () => {
        const elapsedTime = process.hrtime(startTime); // Час виконання запиту
        const elapsedTimeInMilliseconds = elapsedTime[0] * 1000 + elapsedTime[1] / 1e6; // Перетворення у мілісекунди
        console.log(`Час виконання запиту: ${elapsedTimeInMilliseconds} ms`);
    });

    next();
};

const gatherRequestStatistics = (req, res, next) => {
    const pathVariables = req.params;
    const queryString = req.query;

    res.on('finish', () => {
        const requestStatistics = {
            path: req.path,
            method: req.method,
            pathVariables: pathVariables,
            queryString: queryString
        };

        console.log('Статистика запиту:', requestStatistics);
    });

    next();
};

module.exports = { measureExecutionTime, gatherRequestStatistics };
