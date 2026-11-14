
(function () {
  var S = window.SITE || {}, IC = window.ICONS || {}, H = S.hobbies || {};
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function svg(n, s) { return '<svg width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (IC[n] || IC.code) + '</svg>'; }

  var items = [];
  function add(t, k, u, hay) { items.push({ t: t, k: k, u: u, h: (t + ' ' + k + ' ' + hay).toLowerCase() }); }
  add('Home', 'Page', 'index.html', 'home hi hello aaniya welcome start');
  add('Projects', 'Page', 'projects.html', 'projects project work portfolio built things case studies python tools engineering');
  add('Experience', 'Page', 'experience.html', 'experience work jobs roles resume career internships');
  add('Hobbies', 'Page', 'hobbies.html', 'hobbies hobby reading books travel painting art');
  add('Contact', 'Page', 'contact.html', 'contact email github linkedin hello say hi reach');
  (S.projects || []).forEach(function (p) { add(p.title, p.kind, 'p-' + p.slug + '.html', p.summary + ' ' + p.tags.join(' ') + ' ' + p.teaser); });
  (S.experience || []).forEach(function (e) { add(e.role + ', ' + e.org, 'Experience', 'experience.html#' + e.id, e.text + ' ' + e.when); });
  add('Skills', 'Experience', 'experience.html#skills', (S.skills || []).join(' '));
  (H.books || []).forEach(function (b, bi) { add(b.title, 'Reading', 'book.html?b=' + bi, (b.author || '') + ' ' + (b.review || '') + ' book'); });
  (H.travel || []).forEach(function (g) { (g.places || []).forEach(function (p) { add(p.name, 'Travel', 'hobbies.html', g.country + ' ' + (p.city || '') + ' ' + (p.text || '') + ' travel'); }); });
  (H.painting || []).forEach(function (b) { add(b.title, 'Painting', 'hobbies.html', (b.text || '') + ' ' + (b.medium || '')); });

  var q = document.getElementById('q'), box = document.getElementById('results'), sel = -1, cur = [];
  function has(h, w) { return h.indexOf(w) > -1 || (w.length > 3 && w.slice(-1) === 's' && h.indexOf(w.slice(0, -1)) > -1); }
  function run() {
    var v = q.value.trim().toLowerCase(); sel = -1;
    if (!v) { box.hidden = true; box.innerHTML = ''; cur = []; return; }
    var words = v.split(/\s+/);
    cur = items.map(function (it) {
      if (!words.every(function (w) { return has(it.h, w); })) return null;
      var s = 0, t = it.t.toLowerCase();
      words.forEach(function (w) { if (has(t, w)) s += 3; if (it.k === 'Page') s += 2; s += 1; });
      return { it: it, s: s };
    }).filter(Boolean).sort(function (a, b) { return b.s - a.s; }).slice(0, 8).map(function (r) { return r.it; });
    box.innerHTML = cur.length ? cur.map(function (it, i) { return '<a role="option" href="' + it.u + '" data-i="' + i + '"><span>' + esc(it.t) + '</span><span class="k">' + esc(it.k) + '</span></a>'; }).join('') : '<div class="none">No matches. Try "projects", "Python", "Redis" or "travel".</div>';
    box.hidden = false;
  }
  function mark() { Array.prototype.forEach.call(box.querySelectorAll('a'), function (a, i) { a.classList.toggle('sel', i === sel); }); }
  if (q) {
    q.addEventListener('input', run);
    q.addEventListener('focus', run);
    q.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(sel + 1, cur.length - 1); mark(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(sel - 1, 0); mark(); }
      else if (e.key === 'Enter') { var t = cur[sel > -1 ? sel : 0]; if (t) location.href = t.u; }
      else if (e.key === 'Escape') { box.hidden = true; q.blur(); }
    });
    document.addEventListener('click', function (e) { if (!e.target.closest('.searchwrap')) box.hidden = true; });
  }

  var COLORS = ['#F9D6DC', '#F3C4CE', '#F7DCC8', '#FFFBF5', '#EBD3B0'];
  function cover(b, i) {
    var src = b.image || (b.isbn ? 'https://covers.openlibrary.org/b/isbn/' + b.isbn + '-M.jpg?default=false' : '');
    return '<div class="bookcover" style="background:' + COLORS[i % COLORS.length] + '"><span class="bt">' + esc(b.title) + '</span><span class="ba">' + esc(b.author) + '</span>' +
      (src ? '<img src="' + esc(src) + '" alt="Cover of ' + esc(b.title) + '" loading="lazy" onerror="this.remove()">' : '') + '</div>';
  }
  function books(list) {
    return '<div class="books">' + list.map(function (b, i) {
      var meta = [b.author, b.status].filter(Boolean).join(' · ');
      return '<a class="book" href="book.html?b=' + i + '">' + cover(b, i) + '<div class="bn">' + esc(b.title) + '</div><div class="sub">' + esc(meta) + '</div></a>';
    }).join('') + '</div>';
  }
  function wikiPhoto(img) {
    var t = img.getAttribute('data-wiki');
    if (!t || !window.fetch) return;
    fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + t).then(function (r) { return r.json(); }).then(function (j) {
      var u = j && j.thumbnail && j.thumbnail.source;
      if (!u) return;
      var big = u.replace(/\/\d+px-/, '/500px-');
      img.onerror = function () { if (img.src !== u) { img.src = u; } else { img.remove(); } };
      img.src = big;
    }).catch(function () { });
  }
  function travel(list) {
    var out = list.map(function (g) {
      return '<h3 class="country">' + esc(g.country) + '</h3><div class="places">' + g.places.map(function (p) {
        var href = p.wiki ? 'https://en.wikipedia.org/wiki/' + p.wiki : '#';
        var im = p.image ? '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy" onerror="this.remove()">' : (p.wiki ? '<img data-wiki="' + esc(p.wiki) + '" alt="' + esc(p.name) + '" onerror="this.remove()">' : '');
        return '<a class="place" href="' + href + '" target="_blank" rel="noopener"><div class="pimg">' + svg(p.icon, 40) + im + '</div><div class="pbody"><b>' + esc(p.name) + '</b><div class="sub">' + esc(p.text ? p.city + ' · ' + p.text : p.city) + '</div></div></a>';
      }).join('') + '</div>';
    }).join('');
    return out + '<p class="credit">Photos load from <a href="https://commons.wikimedia.org" target="_blank" rel="noopener">Wikipedia / Wikimedia Commons</a>, each under its own free licence. Click a place to see its page and photo credit. My own photos will replace these over time.</p>';
  }
  function art(list) {
    return '<div class="places">' + list.map(function (x) {
      return '<div class="place"><div class="pimg">' + svg('brush', 40) + (x.image ? '<img src="' + esc(x.image) + '" alt="" onerror="this.remove()">' : '') + '</div><div class="pbody"><b>' + esc(x.title) + '</b><div class="sub">' + esc([x.medium, x.text].filter(Boolean).join(' · ')) + '</div></div></div>';
    }).join('') + '</div>';
  }

  var hb = document.getElementById('hobbies');
  if (hb) {
    Array.prototype.forEach.call(hb.querySelectorAll('[data-list]'), function (el) {
      var k = el.getAttribute('data-list'), list = H[k] || [];
      if (!list.length) { el.innerHTML = '<div class="empty">Coming soon.</div>'; return; }
      el.innerHTML = k === 'books' ? books(list) : k === 'travel' ? travel(list) : art(list);
      Array.prototype.forEach.call(el.querySelectorAll('img[data-wiki]'), wikiPhoto);
    });
  }
  var bp = document.getElementById('bookpage');
  if (bp) {
    var bi = parseInt((location.search.match(/b=(\d+)/) || [])[1], 10), bk = (H.books || [])[bi];
    if (!bk) { bp.innerHTML = '<p>Book not found. <a href="hobbies.html">Back to Hobbies</a></p>'; }
    else {
      document.title = bk.title + ' | Aaniya Dhakal';
      bp.innerHTML = '<div class="bigbook">' + cover(bk, bi) + '</div><div class="btext"><div class="kind">' + esc([bk.status || 'Book']).toString() + '</div><h1>' + esc(bk.title) + '</h1><p class="lead">by ' + esc(bk.author) + '</p>' +
        '<div class="review"><h2>My review</h2>' + (bk.review ? bk.review.split(/\n+/).map(function (t) { return '<p style="color:var(--ink);margin-bottom:12px">' + esc(t) + '</p>'; }).join('') : '<p>Coming soon. I will write up what I think of this one.</p>') + '</div></div>';
    }
  }
})();
