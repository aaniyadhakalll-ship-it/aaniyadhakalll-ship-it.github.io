
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
  (H.books || []).forEach(function (b) { add(b.title, 'Reading', 'hobbies.html', (b.author || '') + ' ' + (b.review || '') + ' book'); });
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
  function books(list) {
    return '<div class="books">' + list.map(function (b, i) {
      var src = b.image || (b.isbn ? 'https://covers.openlibrary.org/b/isbn/' + b.isbn + '-M.jpg?default=false' : '');
      var meta = [b.author, b.status].filter(Boolean).join(' · ');
      return '<div class="book"><div class="bookcover" style="background:' + COLORS[i % COLORS.length] + '"><span class="bt">' + esc(b.title) + '</span><span class="ba">' + esc(b.author) + '</span>' +
        (src ? '<img src="' + esc(src) + '" alt="Cover of ' + esc(b.title) + '" loading="lazy" onerror="this.remove()">' : '') + '</div>' +
        (b.review ? '<div class="bn">' + esc(b.title) + '</div><div class="sub">' + esc(b.review) + '</div>' : '<div class="bn">' + esc(b.title) + '</div><div class="sub">' + esc(meta) + '</div>') + '</div>';
    }).join('') + '</div>';
  }
  function travel(list) {
    return list.map(function (g) {
      return '<h3 class="country">' + esc(g.country) + '</h3><div class="places">' + g.places.map(function (p) {
        return '<div class="place"><span class="picon">' + svg(p.icon, 24) + (p.image ? '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy" onerror="this.remove()">' : '') + '</span><div><b>' + esc(p.name) + '</b><div class="sub">' + esc(p.text || p.city) + (p.text && p.city ? ' · ' + esc(p.city) : '') + '</div></div></div>';
      }).join('') + '</div>';
    }).join('');
  }
  function art(list) {
    return list.map(function (x) {
      return '<div class="place" style="margin-top:12px">' + (x.image ? '<span class="picon"><img src="' + esc(x.image) + '" alt="" onerror="this.remove()"></span>' : '<span class="picon">' + svg('brush', 24) + '</span>') + '<div><b>' + esc(x.title) + '</b><div class="sub">' + esc([x.medium, x.text].filter(Boolean).join(' · ')) + '</div></div></div>';
    }).join('');
  }
  var hb = document.getElementById('hobbies');
  if (hb) {
    Array.prototype.forEach.call(hb.querySelectorAll('[data-list]'), function (el) {
      var k = el.getAttribute('data-list'), list = H[k] || [];
      if (!list.length) { el.innerHTML = '<div class="empty">Coming soon.</div>'; return; }
      el.innerHTML = k === 'books' ? books(list) : k === 'travel' ? travel(list) : art(list);
    });
  }
})();
