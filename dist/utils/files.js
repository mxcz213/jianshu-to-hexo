"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var read = function (path, options) {
    var fileContent = fs_1.default.readFileSync(path, options);
    return fileContent;
};
exports.read = read;
