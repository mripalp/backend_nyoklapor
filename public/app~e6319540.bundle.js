(()=>{"use strict";var n,t={504:(n,t,e)=>{e.d(t,{Z:()=>s});var r=e(81),o=e.n(r),a=e(645),i=e.n(a)()(o());i.push([n.id,'/*\n! tailwindcss v3.3.6 | MIT License | https://tailwindcss.com\n*/\n\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  /* 1 */\n  border-width: 0;\n  /* 2 */\n  border-style: solid;\n  /* 2 */\n  border-color: #e5e7eb;\n  /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n6. Use the user\'s configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -moz-tab-size: 4;\n  /* 3 */\n  -o-tab-size: 4;\n  tab-size: 4;\n  /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  /* 4 */\n  font-feature-settings: normal;\n  /* 5 */\n  font-variation-settings: normal;\n  /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0;\n  /* 1 */\n  line-height: inherit;\n  /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  border-top-width: 1px;\n  /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font-family by default.\n2. Use the user\'s configured `mono` font-feature-settings by default.\n3. Use the user\'s configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  /* 1 */\n  font-feature-settings: normal;\n  /* 2 */\n  font-variation-settings: normal;\n  /* 3 */\n  font-size: 1em;\n  /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0;\n  /* 1 */\n  border-color: inherit;\n  /* 2 */\n  border-collapse: collapse;\n  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-feature-settings: inherit;\n  /* 1 */\n  font-variation-settings: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  font-weight: inherit;\n  /* 1 */\n  line-height: inherit;\n  /* 1 */\n  color: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  padding: 0;\n  /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button;\n  /* 1 */\n  background-color: transparent;\n  /* 2 */\n  background-image: none;\n  /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\n\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  /* 1 */\n  vertical-align: middle;\n  /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n\n[hidden] {\n  display: none;\n}\n\n*,\n::before,\n::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x: ;\n  --tw-pan-y: ;\n  --tw-pinch-zoom: ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position: ;\n  --tw-gradient-via-position: ;\n  --tw-gradient-to-position: ;\n  --tw-ordinal: ;\n  --tw-slashed-zero: ;\n  --tw-numeric-figure: ;\n  --tw-numeric-spacing: ;\n  --tw-numeric-fraction: ;\n  --tw-ring-inset: ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur: ;\n  --tw-brightness: ;\n  --tw-contrast: ;\n  --tw-grayscale: ;\n  --tw-hue-rotate: ;\n  --tw-invert: ;\n  --tw-saturate: ;\n  --tw-sepia: ;\n  --tw-drop-shadow: ;\n  --tw-backdrop-blur: ;\n  --tw-backdrop-brightness: ;\n  --tw-backdrop-contrast: ;\n  --tw-backdrop-grayscale: ;\n  --tw-backdrop-hue-rotate: ;\n  --tw-backdrop-invert: ;\n  --tw-backdrop-opacity: ;\n  --tw-backdrop-saturate: ;\n  --tw-backdrop-sepia: ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x: ;\n  --tw-pan-y: ;\n  --tw-pinch-zoom: ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position: ;\n  --tw-gradient-via-position: ;\n  --tw-gradient-to-position: ;\n  --tw-ordinal: ;\n  --tw-slashed-zero: ;\n  --tw-numeric-figure: ;\n  --tw-numeric-spacing: ;\n  --tw-numeric-fraction: ;\n  --tw-ring-inset: ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur: ;\n  --tw-brightness: ;\n  --tw-contrast: ;\n  --tw-grayscale: ;\n  --tw-hue-rotate: ;\n  --tw-invert: ;\n  --tw-saturate: ;\n  --tw-sepia: ;\n  --tw-drop-shadow: ;\n  --tw-backdrop-blur: ;\n  --tw-backdrop-brightness: ;\n  --tw-backdrop-contrast: ;\n  --tw-backdrop-grayscale: ;\n  --tw-backdrop-hue-rotate: ;\n  --tw-backdrop-invert: ;\n  --tw-backdrop-opacity: ;\n  --tw-backdrop-saturate: ;\n  --tw-backdrop-sepia: ;\n}\n\n.container {\n  width: 100%;\n}\n\n@media (min-width: 640px) {\n  .container {\n    max-width: 640px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 768px;\n  }\n}\n\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px;\n  }\n}\n\n@media (min-width: 1280px) {\n  .container {\n    max-width: 1280px;\n  }\n}\n\n@media (min-width: 1536px) {\n  .container {\n    max-width: 1536px;\n  }\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.static {\n  position: static;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.relative {\n  position: relative;\n}\n\n.bottom-\\[-100\\%\\] {\n  bottom: -100%;\n}\n\n.bottom-\\[1\\%\\] {\n  bottom: 1%;\n}\n\n.left-0 {\n  left: 0px;\n}\n\n.right-0 {\n  right: 0px;\n}\n\n.right-4 {\n  right: 1rem;\n}\n\n.top-0 {\n  top: 0px;\n}\n\n.top-1\\/2 {\n  top: 50%;\n}\n\n.top-\\[-100\\%\\] {\n  top: -100%;\n}\n\n.col-span-1 {\n  grid-column: span 1 / span 1;\n}\n\n.col-span-12 {\n  grid-column: span 12 / span 12;\n}\n\n.mx-5 {\n  margin-left: 1.25rem;\n  margin-right: 1.25rem;\n}\n\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.my-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n\n.mb-4 {\n  margin-bottom: 1rem;\n}\n\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n\n.mb-8 {\n  margin-bottom: 2rem;\n}\n\n.ml-10 {\n  margin-left: 2.5rem;\n}\n\n.ml-14 {\n  margin-left: 3.5rem;\n}\n\n.ml-36 {\n  margin-left: 9rem;\n}\n\n.ml-40 {\n  margin-left: 10rem;\n}\n\n.mr-2 {\n  margin-right: 0.5rem;\n}\n\n.mr-4 {\n  margin-right: 1rem;\n}\n\n.mt-0 {\n  margin-top: 0px;\n}\n\n.mt-0\\.5 {\n  margin-top: 0.125rem;\n}\n\n.mt-1 {\n  margin-top: 0.25rem;\n}\n\n.mt-1\\.5 {\n  margin-top: 0.375rem;\n}\n\n.mt-10 {\n  margin-top: 2.5rem;\n}\n\n.mt-11 {\n  margin-top: 2.75rem;\n}\n\n.mt-16 {\n  margin-top: 4rem;\n}\n\n.mt-2 {\n  margin-top: 0.5rem;\n}\n\n.mt-3 {\n  margin-top: 0.75rem;\n}\n\n.mt-4 {\n  margin-top: 1rem;\n}\n\n.mt-5 {\n  margin-top: 1.25rem;\n}\n\n.mt-6 {\n  margin-top: 1.5rem;\n}\n\n.mt-7 {\n  margin-top: 1.75rem;\n}\n\n.mt-8 {\n  margin-top: 2rem;\n}\n\n.mt-9 {\n  margin-top: 2.25rem;\n}\n\n.mb-7 {\n  margin-bottom: 1.75rem;\n}\n\n.block {\n  display: block;\n}\n\n.flex {\n  display: flex;\n}\n\n.table {\n  display: table;\n}\n\n.grid {\n  display: grid;\n}\n\n.hidden {\n  display: none;\n}\n\n.h-10 {\n  height: 2.5rem;\n}\n\n.h-16 {\n  height: 4rem;\n}\n\n.h-5 {\n  height: 1.25rem;\n}\n\n.h-60 {\n  height: 15rem;\n}\n\n.h-96 {\n  height: 24rem;\n}\n\n.h-\\[203px\\] {\n  height: 203px;\n}\n\n.h-\\[240px\\] {\n  height: 240px;\n}\n\n.h-\\[263px\\] {\n  height: 263px;\n}\n\n.h-\\[35px\\] {\n  height: 35px;\n}\n\n.h-\\[600px\\] {\n  height: 600px;\n}\n\n.h-\\[60px\\] {\n  height: 60px;\n}\n\n.h-auto {\n  height: auto;\n}\n\n.h-full {\n  height: 100%;\n}\n\n.h-screen {\n  height: 100vh;\n}\n\n.min-h-max {\n  min-height: -moz-max-content;\n  min-height: max-content;\n}\n\n.w-10 {\n  width: 2.5rem;\n}\n\n.w-16 {\n  width: 4rem;\n}\n\n.w-20 {\n  width: 5rem;\n}\n\n.w-5 {\n  width: 1.25rem;\n}\n\n.w-52 {\n  width: 13rem;\n}\n\n.w-60 {\n  width: 15rem;\n}\n\n.w-8 {\n  width: 2rem;\n}\n\n.w-96 {\n  width: 24rem;\n}\n\n.w-\\[108px\\] {\n  width: 108px;\n}\n\n.w-\\[256px\\] {\n  width: 256px;\n}\n\n.w-\\[35px\\] {\n  width: 35px;\n}\n\n.w-\\[486px\\] {\n  width: 486px;\n}\n\n.w-\\[700px\\] {\n  width: 700px;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.min-w-full {\n  min-width: 100%;\n}\n\n.grow {\n  flex-grow: 1;\n}\n\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-y-10 {\n  --tw-translate-y: -2.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.translate-x-8 {\n  --tw-translate-x: 2rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.translate-y-28 {\n  --tw-translate-y: 7rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n\n.grid-cols-12 {\n  grid-template-columns: repeat(12, minmax(0, 1fr));\n}\n\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.items-start {\n  align-items: flex-start;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.justify-start {\n  justify-content: flex-start;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.justify-items-center {\n  justify-items: center;\n}\n\n.gap-1 {\n  gap: 0.25rem;\n}\n\n.gap-16 {\n  gap: 4rem;\n}\n\n.gap-2 {\n  gap: 0.5rem;\n}\n\n.gap-4 {\n  gap: 1rem;\n}\n\n.gap-8 {\n  gap: 2rem;\n}\n\n.divide-y> :not([hidden])~ :not([hidden]) {\n  --tw-divide-y-reverse: 0;\n  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));\n}\n\n.divide-gray-200> :not([hidden])~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-divide-opacity));\n}\n\n.overflow-x-auto {\n  overflow-x: auto;\n}\n\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n\n.rounded {\n  border-radius: 0.25rem;\n}\n\n.rounded-2xl {\n  border-radius: 1rem;\n}\n\n.rounded-full {\n  border-radius: 9999px;\n}\n\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n\n.rounded-md {\n  border-radius: 0.375rem;\n}\n\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n\n.rounded-l-2xl {\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n}\n\n.rounded-r-2xl {\n  border-top-right-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n}\n\n.border {\n  border-width: 1px;\n}\n\n.border-b-2 {\n  border-bottom-width: 2px;\n}\n\n.border-none {\n  border-style: none;\n}\n\n.border-black {\n  --tw-border-opacity: 1;\n  border-color: rgb(0 0 0 / var(--tw-border-opacity));\n}\n\n.bg-\\[\\#1F2937\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\n\n.bg-bghome {\n  --tw-bg-opacity: 1;\n  background-color: rgb(241 244 245 / var(--tw-bg-opacity));\n}\n\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\n\n.bg-blue-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 58 138 / var(--tw-bg-opacity));\n}\n\n.bg-butungu {\n  --tw-bg-opacity: 1;\n  background-color: rgb(22 72 99 / var(--tw-bg-opacity));\n}\n\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\n\n.bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\n\n.bg-green-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity));\n}\n\n.bg-merah {\n  --tw-bg-opacity: 1;\n  background-color: rgb(135 35 65 / var(--tw-bg-opacity));\n}\n\n.bg-navBlur {\n  --tw-bg-opacity: 1;\n  background-color: rgb(99 99 99 / var(--tw-bg-opacity));\n}\n\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\n}\n\n.bg-section2 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\n\n.bg-slate-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\n}\n\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n.bg-opacity-5 {\n  --tw-bg-opacity: 0.05;\n}\n\n.bg-opacity-70 {\n  --tw-bg-opacity: 0.7;\n}\n\n.bg-opacity-90 {\n  --tw-bg-opacity: 0.9;\n}\n\n.object-cover {\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n\n.p-1 {\n  padding: 0.25rem;\n}\n\n.p-2 {\n  padding: 0.5rem;\n}\n\n.p-3 {\n  padding: 0.75rem;\n}\n\n.p-4 {\n  padding: 1rem;\n}\n\n.p-8 {\n  padding: 2rem;\n}\n\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.px-7 {\n  padding-left: 1.75rem;\n  padding-right: 1.75rem;\n}\n\n.py-10 {\n  padding-top: 2.5rem;\n  padding-bottom: 2.5rem;\n}\n\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n\n.pb-4 {\n  padding-bottom: 1rem;\n}\n\n.pb-5 {\n  padding-bottom: 1.25rem;\n}\n\n.pl-6 {\n  padding-left: 1.5rem;\n}\n\n.pr-14 {\n  padding-right: 3.5rem;\n}\n\n.pr-32 {\n  padding-right: 8rem;\n}\n\n.pt-4 {\n  padding-top: 1rem;\n}\n\n.pt-5 {\n  padding-top: 1.25rem;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.font-Poppins {\n  font-family: Poppins;\n}\n\n.font-sans {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n}\n\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\n\n.text-\\[20px\\] {\n  font-size: 20px;\n}\n\n.text-\\[24px\\] {\n  font-size: 24px;\n}\n\n.text-\\[25px\\] {\n  font-size: 25px;\n}\n\n.text-\\[35px\\] {\n  font-size: 35px;\n}\n\n.text-\\[45px\\] {\n  font-size: 45px;\n}\n\n.text-\\[50px\\] {\n  font-size: 50px;\n}\n\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.font-black {\n  font-weight: 900;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.font-extrabold {\n  font-weight: 800;\n}\n\n.font-medium {\n  font-weight: 500;\n}\n\n.font-normal {\n  font-weight: 400;\n}\n\n.font-semibold {\n  font-weight: 600;\n}\n\n.uppercase {\n  text-transform: uppercase;\n}\n\n.tracking-wider {\n  letter-spacing: 0.05em;\n}\n\n.text-\\[\\#B31312\\] {\n  --tw-text-opacity: 1;\n  color: rgb(179 19 18 / var(--tw-text-opacity));\n}\n\n.text-\\[\\#C2C2C2\\] {\n  --tw-text-opacity: 1;\n  color: rgb(194 194 194 / var(--tw-text-opacity));\n}\n\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n\n.text-butungu {\n  --tw-text-opacity: 1;\n  color: rgb(22 72 99 / var(--tw-text-opacity));\n}\n\n.text-merah {\n  --tw-text-opacity: 1;\n  color: rgb(135 35 65 / var(--tw-text-opacity));\n}\n\n.text-section1 {\n  --tw-text-opacity: 1;\n  color: rgb(194 194 194 / var(--tw-text-opacity));\n}\n\n.text-slate-950 {\n  --tw-text-opacity: 1;\n  color: rgb(2 6 23 / var(--tw-text-opacity));\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.text-opacity-70 {\n  --tw-text-opacity: 0.7;\n}\n\n.text-opacity-80 {\n  --tw-text-opacity: 0.8;\n}\n\n.text-opacity-90 {\n  --tw-text-opacity: 0.9;\n}\n\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n/* CSS untuk menampilkan border dan opacity saat elemen dihover tanpa transisi */\n\n#navigationDrawer {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: -100%;\n  transition: bottom 0.3s ease-in-out;\n  /* Atur durasi dan jenis transisi */\n}\n\n#navigationDrawer.open {\n  bottom: 1%;\n}\n\nli a:hover {\n  border-bottom: 2px solid #fff;\n  /* Ganti dengan warna atau ketebalan yang diinginkan */\n}\n\nli a:active {\n  border-bottom: 2px solid white;\n}\n\n.nav:active,\n.nav:focus {\n  border-bottom: 2px solid #164863;\n}\n\n#navigationDrawer a {\n  transition: color 0.1s ease-in-out, border-bottom 0.1s ease-in-out;\n  /* Transisi untuk warna dan border-bottom */\n  border-bottom: 2px solid transparent;\n  /* Atur border-bottom default */\n}\n\n#navigationDrawer a:hover,\n#navigationDrawer a:active {\n  border-bottom: 2px solid #000;\n  /* Ganti dengan warna border-bottom yang diinginkan saat hover atau active */\n}\n\n/* Add responsive CSS here */\n\n@media (max-width: 768px) {\n  /* Adjust styles for screens up to 768px width */\n\n  .card {\n    width: calc(50% - 2rem);\n    /* Two cards in a row */\n    margin: 1rem;\n  }\n}\n\n@media (max-width: 480px) {\n  /* Adjust styles for screens up to 480px width */\n\n  .card {\n    width: calc(100% - 2rem);\n    /* Single card taking full width */\n  }\n}\n\n.hover\\:scale-105:hover {\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.hover\\:bg-\\[\\#111827\\]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-blue-900:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 58 138 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-slate-800:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-white:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.hover\\:opacity-100:hover {\n  opacity: 1;\n}\n\n.hover\\:shadow-2xl:hover {\n  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.focus\\:ring:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.active\\:bg-\\[\\#111827\\]:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\n\n.peer:invalid~.peer-invalid\\:visible {\n  visibility: visible;\n}\n\n@media (min-width: 640px) {\n  .sm\\:inline {\n    display: inline;\n  }\n\n  .sm\\:flex {\n    display: flex;\n  }\n\n  .sm\\:hidden {\n    display: none;\n  }\n\n  .sm\\:h-auto {\n    height: auto;\n  }\n\n  .sm\\:w-3\\/4 {\n    width: 75%;\n  }\n\n  .sm\\:w-auto {\n    width: auto;\n  }\n\n  .sm\\:w-full {\n    width: 100%;\n  }\n\n  .sm\\:gap-6 {\n    gap: 1.5rem;\n  }\n\n  .sm\\:border-b {\n    border-bottom-width: 1px;\n  }\n\n  .sm\\:p-4 {\n    padding: 1rem;\n  }\n\n  .sm\\:p-6 {\n    padding: 1.5rem;\n  }\n\n  .sm\\:text-center {\n    text-align: center;\n  }\n\n  .sm\\:text-\\[25px\\] {\n    font-size: 25px;\n  }\n\n  .sm\\:text-\\[30px\\] {\n    font-size: 30px;\n  }\n}\n\n@media (min-width: 768px) {\n  .md\\:h-auto {\n    height: auto;\n  }\n\n  .md\\:w-auto {\n    width: auto;\n  }\n\n  .md\\:w-full {\n    width: 100%;\n  }\n\n  .md\\:gap-8 {\n    gap: 2rem;\n  }\n\n  .md\\:p-6 {\n    padding: 1.5rem;\n  }\n\n  .md\\:p-8 {\n    padding: 2rem;\n  }\n\n  .md\\:text-center {\n    text-align: center;\n  }\n\n  .md\\:text-\\[30px\\] {\n    font-size: 30px;\n  }\n\n  .md\\:text-\\[35px\\] {\n    font-size: 35px;\n  }\n}\n\n@media (min-width: 1024px) {\n  .lg\\:col-span-1 {\n    grid-column: span 1 / span 1;\n  }\n\n  .lg\\:col-span-3 {\n    grid-column: span 3 / span 3;\n  }\n\n  .lg\\:col-span-6 {\n    grid-column: span 6 / span 6;\n  }\n\n  .lg\\:mb-0 {\n    margin-bottom: 0px;\n  }\n\n  .lg\\:mr-0 {\n    margin-right: 0px;\n  }\n\n  .lg\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .lg\\:mt-4 {\n    margin-top: 1rem;\n  }\n\n  .lg\\:block {\n    display: block;\n  }\n\n  .lg\\:flex {\n    display: flex;\n  }\n\n  .lg\\:hidden {\n    display: none;\n  }\n\n  .lg\\:h-full {\n    height: 100%;\n  }\n\n  .lg\\:w-1\\/2 {\n    width: 50%;\n  }\n\n  .lg\\:w-3\\/4 {\n    width: 75%;\n  }\n\n  .lg\\:w-full {\n    width: 100%;\n  }\n\n  .lg\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n\n  .lg\\:flex-row {\n    flex-direction: row;\n  }\n\n  .lg\\:items-start {\n    align-items: flex-start;\n  }\n\n  .lg\\:justify-start {\n    justify-content: flex-start;\n  }\n\n  .lg\\:gap-10 {\n    gap: 2.5rem;\n  }\n\n  .lg\\:gap-4 {\n    gap: 1rem;\n  }\n\n  .lg\\:gap-8 {\n    gap: 2rem;\n  }\n\n  .lg\\:border-b-0 {\n    border-bottom-width: 0px;\n  }\n\n  .lg\\:border-r-2 {\n    border-right-width: 2px;\n  }\n\n  .lg\\:p-10 {\n    padding: 2.5rem;\n  }\n\n  .lg\\:p-4 {\n    padding: 1rem;\n  }\n\n  .lg\\:p-6 {\n    padding: 1.5rem;\n  }\n\n  .lg\\:p-8 {\n    padding: 2rem;\n  }\n\n  .lg\\:py-12 {\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n  }\n\n  .lg\\:text-left {\n    text-align: left;\n  }\n\n  .lg\\:text-\\[24px\\] {\n    font-size: 24px;\n  }\n\n  .lg\\:text-\\[35px\\] {\n    font-size: 35px;\n  }\n\n  .lg\\:text-\\[45px\\] {\n    font-size: 45px;\n  }\n\n  .lg\\:text-\\[50px\\] {\n    font-size: 50px;\n  }\n\n  .lg\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n}\n\n@media (min-width: 1280px) {\n  .xl\\:w-\\[100\\%\\] {\n    width: 100%;\n  }\n}',""]);const s=i},245:(n,t,e)=>{var r=e(379),o=e.n(r),a=e(795),i=e.n(a),s=e(569),d=e.n(s),l=e(565),p=e.n(l),g=e(216),c=e.n(g),m=e(589),w=e.n(m),b=e(504),h={};h.styleTagTransform=w(),h.setAttributes=p(),h.insert=d().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=c();o()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={id:n,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.exports}r.m=t,n=[],r.O=(t,e,o,a)=>{if(!e){var i=1/0;for(p=0;p<n.length;p++){for(var[e,o,a]=n[p],s=!0,d=0;d<e.length;d++)(!1&a||i>=a)&&Object.keys(r.O).every((n=>r.O[n](e[d])))?e.splice(d--,1):(s=!1,a<i&&(i=a));if(s){n.splice(p--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var p=n.length;p>0&&n[p-1][2]>a;p--)n[p]=n[p-1];n[p]=[e,o,a]},r.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return r.d(t,{a:t}),t},r.d=(n,t)=>{for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n={377:0};r.O.j=t=>0===n[t];var t=(t,e)=>{var o,a,[i,s,d]=e,l=0;if(i.some((t=>0!==n[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(d)var p=d(r)}for(t&&t(e);l<i.length;l++)a=i[l],r.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return r.O(p)},e=self.webpackChunknyoklapor=self.webpackChunknyoklapor||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))})(),r.nc=void 0;var o=r.O(void 0,[306,792,148,672,385,5,495,82,268,371,107,180,543,105,924,209],(()=>r(700)));o=r.O(o)})();