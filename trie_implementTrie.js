class TrieNode {
  children = {}
  endOfWord = false;
}

var Trie = function() {
    this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  const cur = this.root;

  for (const c of word) {
    if (!cur.children.includes(c)) {
      cur.children[c] = new TrieNode()
    }
    cur = cur.children[c]
  }
  cur.endOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  cur = this.root

  for (const c of word) {
    if (!cur.children[c]) {
      return false;
    }
    cur = cur.children[c]
  }
  return cur.endOfWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  cur = this.root

  for (const c of prefix) {
    if (!cur.children[c]) {
      return false;
    }
    cur = cur.children[c]
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */


const trie = new Trie();
trie.insert("apple");
//  trie.search("apple");   // return True
//  trie.search("app");     // return False
//  trie.startsWith("app"); // return True
//  trie.insert("app");
//  trie.search("app");     // return True

console.log(trie)
