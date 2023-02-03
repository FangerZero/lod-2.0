export const ROLES = {
    "BANNED": 1,
    "MASTER": 2,
    "ADMIN": 4,
    "NEWS_ADMIN": 8,
    "NEWS": 16,
    "FANART_ADMIN": 32,
    "FANART": 64,
    "EVENTS_ADMIN": 128,
    "EVENTS": 256,
    "PREMIUM": 512
}

// Banned - Takes priority even over master
// Master - Takes priority over all other roles, other than banned, but has all roles
// Admin - Allows access to users
// News Admin - Gives access to all news articles
// News - Gives access to only Authored news articles
// Fanart Admin - Gives access to all fanart
// Fanart - Gives acces to only Authored fanart
// Events Admin - Gives access to all events
// Events - Gives acces to only Authored events
// Premium - Paid user that gives access to perks
