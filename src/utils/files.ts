import fs from 'fs'
const read = (path: string, options?: {}) => {
    const fileContent = fs.readFileSync(path, options);
    return fileContent;
}

export {
    read,
}