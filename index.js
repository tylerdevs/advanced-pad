function advancedPad(dir, string, len, chr = ' ', trunc = false) {
  // a string is a string is a string
  let str = String(string);
  const strLen = str.length;
  let i = -1;
  // check to truncate
  if (strLen > len) {
    if (trunc === true) {
      if (dir) {
        // right trunc
        return str.substr(0, len);
      }
      // left trunc
      return str.substr(strLen - len);
    }
    return str;
  } else {
    // start padding
    const padLen = len - strLen;
    while (i++ < padLen) {
      if (dir) {
        str += chr;
      } else {
        str = chr + str;
      }
    }
    // handle string output
    if (chr.length > 1) {
      if (dir) {
        return str.substr(0, len);
      }
      return str.substr(str.length - len);
    }
    return str;
  } // end trunc check
} // end advancedPad();

module.exports = {
  padLeft: advancedPad.bind(null, 0),
  padRight: advancedPad.bind(null, 1)
};
