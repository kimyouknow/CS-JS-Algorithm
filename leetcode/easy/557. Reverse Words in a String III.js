/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const reverse = (t) => {
    const text = t.split('');
    let l = 0;
    let r = text.length - 1;
    while (l < r) {
      [text[r], text[l]] = [text[l], text[r]];
      l++;
      r--;
    }
    return text.join('');
  };
  return s
    .split(' ')
    .map((v) => reverse(v))
    .join(' ');
};

// read
