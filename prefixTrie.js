
var Trie = function() {
    this.trie = new Set()
    this.words = new Set()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    this.words.add(word)
    this.trie.add(word)
    for (let i = word.length - 1; i >= 0; i--) {
        let str = ''
        for(let j = 0; j <= i; j++) {
            str = str + word[j]
        }
        this.trie.add(str)
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    if(this.words.has(word)) {
        return true
    }
    return false
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    console.log('Startswith called')
    console.log(this.trie)
    if (this.trie.has(prefix)) {
        return true
    }
    return false
};

// This could be optimized further but I'm already familiar with the implementation. 