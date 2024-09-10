var isWin = process.platform === "win32" || process.argv.slice(-1).includes('window');
const img = {
    100: "https://abs.twimg.com/emoji/v2/72x72/1f4af.png",
    stop: "https://abs.twimg.com/emoji/v2/72x72/1f64c.png",
    mars: 'https://abs.twimg.com/hashflags/MARS_NatGeo_2018/MARS_NatGeo_2018.png'
}

var unicons = {
    arrowLeft: "←",
    arrowUp: "↑",
    arrowRight: "→",
    arrowRightBtn: '➡️',
    arrowDown: "↓",
    check: "✓",
    circle: "●",
    copyright: "©",
    cross: "✖",
    gear: "\u2699",
    option: "⌥",
    super: "⌘",
    shift: "⇧",
    warning: "⚠",
    sun: '🌞',

    apple: "",
    100: "https://abs.twimg.com/emoji/v2/72x72/1f4af.png",
    stop: img.stop,
    // https://unicode.org/reports/tr51/proposed.html#emoji_data
    ZDings: '✏',
    dog: '🐶',
    laughing: '🤣',
    rocket: '🚀',
    magnify: '🔍',
    pi: 'π',
    jazz: '🎷',
    hearts: "💕",
    USflag: "🇺🇸"
};

var win32Cli = {
    arrowLeft: "\u2190",
    arrowUp: "\u2191",
    arrowRight: "\u2192",
    arrowRightBtn: '\u{27A1}',
    arrowDown: "\u2193",
    check: "\u221A",
    circle: "\u006F",
    copyright: "\u00A9",
    cross: "\u00D7",
    gear: "\u263C",
    option: "\u003C",
    shift: "\u2191",
    super: "\u221E",
    warning: "\u0021",
    apple: "\uF8FF",
    ZDings: "\u270F",
    dog: '\uD83D\uDC36',
    laughing: '\uD83E\uDD23',
    rocket: '\u{1F680}',
    magnify: '\u{1F50D}',
    pi: '\u03C0',
    sun: '\u{1F31E}',
    jazz: '\u{1F3B7}',
    hearts: '\u{1F495}',
    USflag: '\u{1F1FA}\u{1F1F8}'
};

unicons.cli = function (name) {
    var icon = isWin ? win32Cli[name] : unicons[name];

    return icon || img[name] || " "; // degrade gracefully to whitespace
};
unicons.img = name => {
    return img[name] || ' '
}
unicons.get = icon => unicons.cli(icon)
module.exports = unicons;
