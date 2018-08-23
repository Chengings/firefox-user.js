// inspiration: https://github.com/pyllyukko/user.js and https://github.com/ghacksuserjs/ghacks-user.js
// macOS or linux can use sym link (ln -s); to get user.js inside profile folder

// disable webide
user_pref("devtools.webide.enabled", false);
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);

// disable remote debugging
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.chrome.enabled", false);
user_pref("devtools.debugger.force-local", true);

// cahce dns
user_pref("network.dnsCacheExpiration", 600);
user_pref("network.dnsCacheExpirationGracePeriod", 600);

// add more connections to server
user_pref("network.http.max-persistent-connections-per-server", 20);

// no java and flash
user_pref("plugin.state.flash", 0);
user_pref("plugin.state.java", 0);

// reader mode
user_pref("reader.color_scheme", "sepia");
user_pref("reader.content_width", 2);
user_pref("reader.font_size", 8);
user_pref("reader.font_type", "serif");
user_pref("reader.line_height", 5);

// open new tab in background
user_pref("browser.tabs.loadDivertedInBackground", true);

// sync
user_pref("services.sync.scheduler.immediateInterval", 5);

// tls version
user_pref("security.tls.version.min", 3);
user_pref("security.tls.version.fallback-limit", 3);
