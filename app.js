
(function () {
  var S = window.SITE || {}, items = [];
  function add(t, k, u, hay) { items.push({ t: t, k: k, u: u, h: (t + ' ' + k + ' ' + hay).toLowerCase() }); }
  (S.projects || []).forEach(function (p) { add(p.title, p.kind, 'p-' + p.slug + '.html', p.summary + ' ' + p.tags.join(' ') + ' ' + p.teaser); });
  (S.experience || []).forEach(function (e) { add(e.role + ', ' + e.org, 'Experience', 'experience.html#' + e.id, e.text + ' ' + e.when); });
  add('Skills', 'Experience', 'experience.html#skills', (S.skills || []).join(' '));
  add('Contact, email and GitHub', 'Contact', 'contact.html', 'email github linkedin hello say hi');
  var H = S.hobbies || {};
  (H.books || []).forEach(function (b) { add(b.title, 'Reading', 'hobbies.html', (b.author || '') + ' ' + (b.review || '')); });
  (H.travel || []).forEach(function (b) { add(b.title, 'Travel', 'hobbies.html', (b.text || '') + ' ' + (b.year || '')); });
  (H.painting || []).forEach(function (b) { add(b.title, 'Painting', 'hobbies.html', (b.text || '') + ' ' + (b.medium || '')); });
  if (!(H.books || []).concat(H.travel || [], H.painting || []).length) add('Hobbies', 'Hobbies', 'hobbies.html', 'reading travel painting books');

  var q = document.getElementById('q'), box = document.getElementById('results'), sel = -1, cur = [];
  function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function run() {
    var v = q.value.trim().toLowerCase(); sel = -1;
    if (!v) { box.hidden = true; box.innerHTML = ''; cur = []; return; }
    var words = v.split(/\s+/);
    cur = items.map(function (it) {
      var s = 0, ok = words.every(function (w) { return it.h.indexOf(w) > -1; });
      if (!ok) return null;
      words.forEach(function (w) { if (it.t.toLowerCase().indexOf(w) > -1) s += 3; if (it.k.toLowerCase().indexOf(w) > -1) s += 2; s += 1; });
      return { it: it, s: s };
    }).filter(Boolean).sort(function (a, b) { return b.s - a.s; }).slice(0, 8).map(function (r) { return r.it; });
    box.innerHTML = cur.length ? cur.map(function (it, i) { return '<a role="option" href="' + it.u + '" data-i="' + i + '"><span>' + esc(it.t) + '</span><span class="k">' + esc(it.k) + '</span></a>'; }).join('') : '<div class="none">No matches. Try "Python", "Redis" or "React".</div>';
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
  var hb = document.getElementById('hobbies');
  if (hb) {
    Array.prototype.forEach.call(hb.querySelectorAll('[data-list]'), function (el) {
      var list = H[el.getAttribute('data-list')] || [];
      if (!list.length) { el.innerHTML = '<div class="empty">Coming soon.</div>'; return; }
      el.innerHTML = list.map(function (x) {
        var meta = [x.author, x.status, x.year, x.medium].filter(Boolean).join(' · ');
        return '<div class="hitem">' + (x.image ? '<img src="' + esc(x.image) + '" alt="">' : '') + '<div><b>' + esc(x.title) + '</b><div class="sub">' + esc(meta) + '</div><p>' + esc(x.review || x.text || '') + '</p></div></div>';
      }).join('');
    });
  }
})();
