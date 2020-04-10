"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_seasons_1 = require("./data-seasons");
const data_races_1 = require("./data-races");
const data_drivers_1 = require("./data-drivers");
const data_circuits_1 = require("./data-circuits");
exports.dataSources = {
    SeasonsData: data_seasons_1.SeasonsData,
    RaceData: data_races_1.RaceData,
    DriversData: data_drivers_1.DriversData,
    CircuitData: data_circuits_1.CircuitData
};
