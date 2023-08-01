class TrieNode {
    constructor() {
      this.isWord = false;
      this.meaning = '';
      this.children = {};
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word, meaning) {
      let current = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!current.children[char]) {
          current.children[char] = new TrieNode();
        }
        current = current.children[char];
      }
      current.isWord = true;
      current.meaning = meaning;
    }
  
    search(word) {
      let current = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!current.children[char]) {
          return 'Word not found in the dictionary.';
        }
        current = current.children[char];
      }
      if (current.isWord) {
        return current.meaning;
      } else {
        return 'Word not found in the dictionary.';
      }
    }
  }
  
  const trie = new Trie();
  
  function addWord() {
    const word = document.getElementById("wordInput").value.trim();
    const meaning = document.getElementById("meaningInput").value.trim();
  
    if (word && meaning) {
      trie.insert(word, meaning);
      document.getElementById("output").innerText = "Word added to the dictionary.";
      document.getElementById("wordInput").value = "";
      document.getElementById("meaningInput").value = "";
    } else {
      alert("Please enter both word and meaning.");
    }
  }
  
  function searchWord() {
    const word = document.getElementById("searchInput").value.trim();
  
    if (word) {
      const meaning = trie.search(word);
      document.getElementById("output").innerText = meaning;
      document.getElementById("searchInput").value = "";
    } else {
      alert("Please enter a word to search.");
    }
  }
  function deleteWord() {
    const word = document.getElementById("deleteInput").value.trim();
  
    if (word) {
      const deleted = trie.delete(word);
      if (deleted) {
        document.getElementById("output").innerText = "Word deleted from the dictionary.";
      } else {
        document.getElementById("output").innerText = "Word not found in the dictionary.";
      }
      document.getElementById("deleteInput").value = "";
    } else {
      alert("Please enter a word to delete.");
    }
  }