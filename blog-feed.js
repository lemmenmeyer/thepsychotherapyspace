/* Auto-populates blog sections from posts.json.
   A container opts in with:  data-blog-feed="topic1,topic2" (or "all"/"latest")
   Optional: data-limit="2", data-images="true".
   The section hides itself when no matching posts exist. */
(function () {
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  var feeds = document.querySelectorAll('[data-blog-feed]');
  if (!feeds.length) return;

  fetch('posts.json', { cache: 'no-cache' })
    .then(function (r) { return r.json(); })
    .then(function (posts) {
      posts.sort(function (a, b) { return String(b.date || '').localeCompare(String(a.date || '')); });
      var here = location.pathname.split('/').pop().replace(/\.html$/, '');

      feeds.forEach(function (c) {
        var topics = (c.getAttribute('data-blog-feed') || '').toLowerCase()
          .split(',').map(function (s) { return s.trim(); }).filter(Boolean);
        var limitAttr = c.getAttribute('data-limit');
        var limit = limitAttr ? parseInt(limitAttr, 10) : Infinity;
        var withImg = c.getAttribute('data-images') === 'true';
        var showAll = !topics.length || topics.indexOf('all') > -1 || topics.indexOf('latest') > -1;

        var list = posts.filter(function (p) { return p.url !== here; });
        if (!showAll) {
          list = list.filter(function (p) {
            return (p.topics || []).some(function (t) {
              return topics.indexOf(String(t).toLowerCase()) > -1;
            });
          });
        }
        list = list.slice(0, limit);

        if (!list.length) {
          var sec = c.closest('[data-blog-section]') || c.closest('section');
          if (sec) sec.style.display = 'none';
          return;
        }

        c.innerHTML = list.map(function (p) {
          var img = (withImg && p.image)
            ? '<div class="card-img"><img src="' + esc(p.image) + '" alt="" loading="lazy"></div>' : '';
          return '<a class="post-card" href="' + esc(p.url) + '">' + img +
            '<span class="cat">' + esc(p.category) + '</span>' +
            '<h3>' + esc(p.title) + '</h3>' +
            '<p>' + esc(p.excerpt) + '</p></a>';
        }).join('');
      });
    })
    .catch(function () { /* leave existing static cards as fallback */ });
})();
