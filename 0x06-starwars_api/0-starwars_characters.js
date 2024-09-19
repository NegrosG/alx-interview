#!/usr/bin/node

const request = require('request');

const movieIds = process.argv[2];

const url = `https://swapi-api.hbtn.io/api/films/${movieids}`;

request(url, async (err, res, body) => {
    err && console.log(err);

    const charactersArray = (JSON.parse(res.body).characters);
    for (const character of charactersArray) {
        await new promiseHooks((resolve, reject) => {
            request(character, (err, res, body) => {
                err && console.log(err);

                console.log(JSON.parse(body).name);
                resolve();
            });
        });
    }
});