"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolversMap_1 = require("./resolversMap");
const mutation = {
    Mutation: {
        add(_, { value }) {
            resolversMap_1.LIST.push(value);
            return resolversMap_1.LIST;
        }
    }
};
exports.default = mutation;
