"use strict";

var unicons = require("../lib/index.js");

Object.keys(unicons)
    .filter(function (key) {
        return typeof unicons[key] === "string";
    })
    .forEach(function (icon) {
        const iconFromCode = unicons.cli(icon)
        // console.log(icon, iconFromCode);
        if (icon === 'apple') {
            it(`apple icon`, () => {
                expect(iconFromCode).toBe(unicons.apple).toBe('')
            });
        }
    });
it(`The possible code point values range from U+0000 to U+10FFFF.`, () => {
    expect(unicons.cli('ZDings')).toBe('✏')
    expect(unicons.cli('dog')).toBe('🐶')
    expect(unicons.cli('laughing')).toBe('🤣')
    expect(unicons.cli('pi')).toBe('\u03C0').toBe('π')
    expect(unicons.cli('sun')).toBe('\u{1F31E}').toBe('🌞')
    expect(unicons.cli('jazz')).toBe('\u{1F3B7}').toBe('🎷')
    expect(unicons.cli('hearts')).toBe('\u{1F495}').toBe('💕')
    expect(unicons.cli('USflag')).toBe('\u{1F1FA}\u{1F1F8}').toBe('🇺🇸')
})
it(`In ECMAScript 6 this will be easy, since it introduces a new type of escapea sequence: Unicode code point escapes.`, () => {
    expect(unicons.cli('rocket')).toBe("\uD83D\uDE80").toBe('🚀')
    expect(unicons.cli('magnify')).toBe("\u{1F50D}").toBe('🔍')
    expect(unicons.cli('arrowRightBtn'))./* toBe("\u{27A1}"). */toBe('➡️')
    expect(unicons.cli('arrowRight')).toBe("\u{2192}").toBe('→')

});
it(`img`, () => {
    expect(unicons.img(100)).toBe('https://abs.twimg.com/emoji/v2/72x72/1f4af.png')
    expect(unicons.img('stop')).toBe('https://abs.twimg.com/emoji/v2/72x72/1f64c.png')
    expect(unicons.img('mars')).toBe('https://abs.twimg.com/hashflags/MARS_NatGeo_2018/MARS_NatGeo_2018.png')
    expect(unicons.cli('mars')).toBe('https://abs.twimg.com/hashflags/MARS_NatGeo_2018/MARS_NatGeo_2018.png')
});