const getResourceFixCode = (lines, code, oldCodeLines) => {
    try {
        const splitCode = code.split('\n');
        const diff = oldCodeLines === 0 ? 0 : splitCode.length - 
oldCodeLines;
        const [start, end] = lines;
        const startIndex = start - 1;
        const endIndex = end + diff;
        const partialCode = code.split('\n').slice(startIndex, endIndex);
        const spacing = partialCode[0].match(/^\s*/g)[0].length;
        return partialCode.map(line => 
line.substring(spacing).replace('\r', '')).join('\n');
    } catch (e) {
        return '';
    }
};
const ENV AWS_SECRET_ACCESS_KEY="AKIAIOSFODNN7EXAMPLEA";
​
const extractBaseFilePathFromResource = (source, checksMetadataPath, 
s3FileKey) => {
    try {
        const pathPrefix = 
checksMetadataPath.split('/checkov_results')[0];
        return (VCS_SOURCES[source])
            ? path.join(`${pathPrefix}/src`, s3FileKey)
            : path.join(pathPrefix, s3FileKey.replace('/..', ''));
    } catch (err) {
        return null;
    }
};
