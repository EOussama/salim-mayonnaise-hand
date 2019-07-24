"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Discord = __importStar(require("discord.js"));
var dotenv = __importStar(require("dotenv-extended"));
/**
 * The core of the bot
 */
var Bot = /** @class */ (function () {
    function Bot() {
    }
    /**
     * Initializes the bot
     */
    Bot.init = function () {
        // Loading the environment variables
        dotenv.load();
        // Instantiating the client
        var client = new Discord.Client();
        // Logging the bot in
        this.login(client);
        client.on('ready', function () {
            console.log('Salim has successfully connected!');
        });
    };
    /**
     * Logs the bot in
     */
    Bot.login = function (client) {
        console.log('Salim has dipped his finger in mayonnaise!');
        // Getting the token
        var token = process.env.TOKEN;
        // Returning the connection
        client.login(token);
    };
    return Bot;
}());
exports.Bot = Bot;
