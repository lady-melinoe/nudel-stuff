// Add or Remove yourself, and then click run to apply changes!

const enable_rainbow = ["toby", "nextlegacy", "slime", "melinoe", "lynn", "nu"];
// for last minute saving
// got it?
// deleting...
// Why?

function user_in_list(check_list) {
    console.debug(JSON.parse(window.localStorage["nudelsalat-settings-v0"]))
    return check_list.includes(JSON.parse(window.localStorage["nudelsalat-settings-v0"]).username);
}


document.documentElement.classList.toggle("enable-the-funky-styling", user_in_list(enable_rainbow));

if (!user_in_list(enable_rainbow)){
  window._nametags?.disconnect();
  clearInterval(window._ntTimer);
}
else {
(function nametags() {
  window._nametags?.disconnect();
  clearInterval(window._ntTimer);
  const v = window._ntv = (window._ntv ?? 0) + 1;
  let tick = 0;

  const img = (url, h = 20) =>
    `<img src="${url}" style="height:${h}px;vertical-align:middle">`;
  
  const mantras = [
      "%img Pastaganggg!! %img",
      "%img also try hytale! %img",
      "%img lovess %img!!",
      "omg! %img just ate %img",
      "%img %img vibinnn %img %img",
      "%img will delete your code",
      "pizza soup",
      "EVERYTHING NOT SAVED WILL BE LOST!",
      "humanize, organize, mechanize",
      "BLOOD FOR THE BLOOD GOD SKULLS FOR THE SKULL THRONE"
      // add more mantras!
  ];

  const flair = [
    ":3", 
    ":>", 
    "c:", 
    "≧◡≦", 
    "♪", 
    "◕‿◕", 
    "^~^", 
    "♡"
  ];

  const urls = {
    cat_vibing: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXlrZ3RtcDJ6aHI2YnRoYmtxc2NqazUyMmVvZHhjeWpydHgybW5rdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/nWolkCULqLT4oG9dph/giphy.gif",
    cat_mwah: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWVxcDlxcXA5ZGZ3N21sYjl6Y2lqNWZxZjJ4NHU2Z3FlbGdpcTJ5MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ytu2GUYbvhz7zShGwS/giphy.gif",
    cat_dev: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWI4azRnODNrNTR0amJsY285Y21yYWp0cHdocDl1MW5saWhmeDB6YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11JTxkrmq4bGE0/giphy.gif",
    dino: "https://cdn3.emoji.gg/emojis/353467-dinosaur.gif",
    birb: "https://cdn3.emoji.gg/emojis/79230-parrotdance.gif"
    //add more! 
  };

  const tags = {
    "*": (name, t, i) => 
      `<b>${name}</b> ${flair[(t + i) % flair.length]} ${img(Object.values(urls)[(t + i) % Object.keys(urls).length]).repeat(1)}`,
    //"your faboulus name here": (name, element) => ``
    //nextlegacy: (name, t, i) =>
    //  `${name} ${flair[(t + i) % 5]} ${img(urls.cat_vibing)}`,
  };

  function render(el) {
    const name = el.dataset.nt;
    if (!name) return;
    const tag = tags[name] ?? tags["*"];
    const html = typeof tag === "function" ? tag(name, tick, el._nti) : tag;
    if (html) el.innerHTML = html;
  }

  let i = 0;
  function apply(el) {
    if (el._ntv === v) return;
    el._ntv = v;
    el._nti = i++;
    el.dataset.nt = (el.dataset.nt ?? el.textContent).toLowerCase().trim();
    render(el);
  }

  window._ntTimer = setInterval(() => {
    tick++;
     mantra.innerHTML = `${mantras[tick % mantras.length]
                             .replaceAll("%img", () => img(Object.values(urls)[Math.floor(Math.random() * Object.keys(urls).length) % Object.keys(urls).length]))}`;
    document.querySelectorAll(".cm-ySelectionInfo[data-nt]").forEach(render);
  }, 5000);

  window._nametags = new MutationObserver(() =>
    document.querySelectorAll(".cm-ySelectionInfo").forEach(apply)
  );

  window._nametags.observe(document.body, { childList: true, subtree: true });
  document.querySelectorAll(".cm-ySelectionInfo").forEach(apply);
})();
};
