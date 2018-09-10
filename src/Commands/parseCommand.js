module.exports = (c) => {

    c.ownerOnly = c.ownerOnly ? c.ownerOnly : false
    c.nsfw = c.nsfw ? c.nsfw : false

    return c
}