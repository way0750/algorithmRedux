/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
    // test for ipv4:
    let chunks = queryIP.split('.');
    if (chunks.length === 4) {
        const allValidNumbers = chunks.every((chunk) => {
            const num = +chunk
            return (
                (/[^0-9]/.test(chunk) === false) && // has only digits
                (chunk.length && 0 <= num && num <= 255) && // withinRange
                (chunk.length > 1 ? chunk[0] !== '0' : true) // no leading zeros
            );
        });
        return allValidNumbers ? 'IPv4' : 'Neither';
    }

    // test for ipv6:
    chunks = queryIP.split(':');
    if (chunks.length === 8) {
        const allValidChars = chunks.every((chunk) => {
            const len = chunk.length;
            return (
                (1 <= len && len <= 4) && // has between 1 to 4 chars
                (/[^a-fA-F0-9]/.test(chunk) === false) // has no invalid chars
            );
        });
        return allValidChars ? 'IPv6' : 'Neither';
    }
    return 'Neither';
};