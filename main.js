const allSearchSites = [
  {
    name: "Google Maps",
    url: "https://www.google.com/maps/search/%QUERY%"
  },
  {
    name: "Wikipedia",
    url: "https://en.wikipedia.org/w/index.php?search=%QUERY%&title=Special%3ASearch&go=Go"
  },
  {
    name: "Google",
    url: "https://www.google.com/search?q=%QUERY%"
  }
];

allSearchSites.forEach(function (site) {
  chrome.contextMenus.create({
    title: site.name,
    contexts: ["selection"],
    onclick: function (word) {
      var query = word.selectionText;
      chrome.tabs.create({
        url: site.url.replace("%QUERY%", query)
      });
    }
  });
});