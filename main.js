const allSearchSites = [
  {
    name: "Google Maps",
    url: "https://www.google.com/maps/search/%QUERY%",
    id: "google_maps"
  },
  {
    name: "Wikipedia",
    url: "https://en.wikipedia.org/w/index.php?search=%QUERY%&title=Special%3ASearch&go=Go",
    id: "wikipedia"
  },
  {
    name: "Google",
    url: "https://www.google.com/search?q=%QUERY%",
    id: "google"
  }
];

allSearchSites.forEach(function (site) {
  chrome.contextMenus.create({
    id: site.id,
    title: site.name,
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  const site = allSearchSites.find(s => s.id === info.menuItemId);
  if (site && info.selectionText) {
    const query = encodeURIComponent(info.selectionText);
    chrome.tabs.create({
      url: site.url.replace("%QUERY%", query)
    });
  }
});
