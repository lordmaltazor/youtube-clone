(this["webpackJsonpvideo-website"]=this["webpackJsonpvideo-website"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n.n(a),s=n(18),c=n.n(s),o=n(21),r=n(9),l=n(10);n(28),n(29);l.a.initializeApp({apiKey:"AIzaSyDzhyM9tKzvTtLX7Nb8QvkJjDg4chCxThY",authDomain:"video-website-7d3ef.firebaseapp.com",projectId:"video-website-7d3ef",storageBucket:"video-website-7d3ef.appspot.com",messagingSenderId:"984504137450",appId:"1:984504137450:web:6c2cd33d704918de540993"});var u=l.a.firestore(),d=l.a.auth(),b=n(19),j=n(2);function h(){return Object(j.jsxs)("div",{className:"sign-in-page",children:[Object(j.jsx)("h1",{className:"sign-in-title",children:"Welcome to YuoTube!"}),Object(j.jsxs)("h2",{className:"sign-in-description",children:["The best video sharing platform on the Internet - Made by ",Object(j.jsx)("a",{href:"https://github.com/lordmaltazor",target:"_blank",children:"Malte Svens\xe9n"})]}),Object(j.jsx)("button",{className:"button sign-in-button",onClick:function(){var e=new l.a.auth.GoogleAuthProvider;d.signInWithPopup(e)},children:"Sign in with Google"})]})}function v(e){var t=e.setPage,n=Object(a.useState)(!1),i=Object(r.a)(n,2),s=i[0],c=i[1];return Object(j.jsxs)("div",{className:"navbar",children:[Object(j.jsx)("button",{className:"navbar-button navbar-title",onClick:function(){return t(0)},children:"YuoTube"}),Object(j.jsx)("div",{className:"navbar-spacer"}),Object(j.jsx)("button",{className:"navbar-button navbar-home-button",onClick:function(){return t(0)},children:"Home"}),Object(j.jsx)("button",{className:"navbar-button navbar-sign-out-button",onClick:function(){return d.signOut()},children:"Sign out"}),Object(j.jsx)("button",{className:"button navbar-upload-button",onClick:function(){return t(2)},children:"Upload"}),Object(j.jsx)("button",{className:"navbar-mobile-button",onClick:function(){c(!s)},children:Object(j.jsx)("i",{className:"fas fa-bars"})}),s&&Object(j.jsxs)("div",{className:"mobile-menu",children:[Object(j.jsx)("button",{className:"button mobile-menu-button",onClick:function(){t(0),c(!1)},children:"Home"}),Object(j.jsx)("button",{className:"button mobile-menu-button",onClick:function(){d.signOut(),c(!1)},children:"Sign out"}),Object(j.jsx)("button",{className:"button mobile-menu-button",onClick:function(){t(2),c(!1)},children:"Upload"}),Object(j.jsx)("button",{className:"mobile-menu-close-button",onClick:function(){return c(!1)},children:Object(j.jsx)("i",{className:"fas fa-times"})})]})]})}var m=n.p+"static/media/noThumbnailFallback.21f68d4a.png";function p(e){var t=e.video,n=e.onClick,i=Object(a.useState)(t.thumbnailURL),s=Object(r.a)(i,2),c=s[0],o=s[1];return Object(j.jsxs)("button",{className:"video-thumbnail",onClick:n,children:[Object(j.jsx)("div",{className:"thumbnail-container",children:Object(j.jsx)("img",{className:"thumbnail",src:c,onError:function(){return o(m)},alt:"Video Thumbnail"})}),Object(j.jsx)("p",{className:"video-thumbnail-text",children:t.title}),Object(j.jsx)("p",{className:"video-thumbnail-text gray-text",children:function(e){for(var t=e.toLowerCase().split(" "),n=0;n<t.length;n++)t[n]=t[n].charAt(0).toUpperCase()+t[n].substring(1);return t.join(" ")}(t.poster)}),Object(j.jsxs)("p",{className:"video-thumbnail-text gray-text",children:[t.views," ",1===t.views?"View":"Views"," \u2022 ",t.createdAt&&t.createdAt.toDate().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]})]})}function O(e){var t=e.videos,n=e.setPage,a=e.setCurrentVideoIndex;return Object(j.jsx)("div",{className:"homepage",children:Object(j.jsx)("div",{className:"videos",children:t.length>0?t.map((function(e,t){return Object(j.jsx)(p,{video:e,onClick:function(){a(t),n(1)}},t)})):Object(j.jsx)("p",{className:"no-videos-message",children:'There are no videos here yet! Click the "upload" button in the navigation-bar to upload the first video!'})})})}function f(e){var t=e.videoURL,n=e.video,i=Object(a.useState)(!1),s=Object(r.a)(i,2),c=s[0],o=s[1];Object(a.useEffect)((function(){u.collection("videos").doc(n.id).update({views:l.a.firestore.FieldValue.increment(1)})}),[]);return Object(j.jsxs)("div",{className:"video-page",children:[Object(j.jsx)("div",{className:"video-container",children:Object(j.jsx)("video",{src:t,controls:!0,autoPlay:!0,children:"Sorry, your browser doesn't support embedded videos."})}),Object(j.jsxs)("div",{className:"video-info",children:[Object(j.jsxs)("div",{className:"video-stats",children:[Object(j.jsx)("p",{className:"video-stat",children:n.title}),Object(j.jsx)("p",{className:"video-stat gray-text",children:function(e){for(var t=e.toLowerCase().split(" "),n=0;n<t.length;n++)t[n]=t[n].charAt(0).toUpperCase()+t[n].substring(1);return t.join(" ")}(n.poster)}),Object(j.jsxs)("p",{className:"video-stat gray-text",children:[n.views," ",1===n.views?"View":"Views"," \u2022 ",n.createdAt.toDate().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]})]}),Object(j.jsxs)("button",{className:"video-like-button",onClick:function(){c?(o(!1),u.collection("videos").doc(n.id).update({likes:l.a.firestore.FieldValue.increment(-1)})):(o(!0),u.collection("videos").doc(n.id).update({likes:l.a.firestore.FieldValue.increment(1)}))},children:[Object(j.jsx)("i",{className:"fas fa-thumbs-up",style:{color:c?"red":"white"}}),Object(j.jsxs)("p",{className:"video-stat",children:[n.likes," ",1===n.likes?"Like":"Likes"]})]})]})]})}var x=n(14),g=n.n(x),N=n(20);n(32);function k(e){var t=e.user,n=e.videos,i=e.setPage,s=Object(a.useRef)(null),c=Object(a.useRef)(null),o=Object(a.useState)(null),d=Object(r.a)(o,2),b=d[0],h=d[1],v=Object(a.useState)(null),m=Object(r.a)(v,2),p=m[0],O=m[1],f=Object(a.useState)(""),x=Object(r.a)(f,2),k=x[0],C=x[1],w=Object(a.useState)(!1),y=Object(r.a)(w,2),S=y[0],L=y[1],U=u.collection("videos"),V=function(e){var t=parseInt(Math.floor(Math.log(e)/Math.log(1024)),10);return 0===t?e:(e/Math.pow(1024,t)).toFixed(1)},P=function(){var e=Object(N.a)(g.a.mark((function e(){var a,s,c,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==k){e.next=3;break}return alert("You have to enter a video title!"),e.abrupt("return");case 3:return L(!0),a=l.a.storage().ref().child("videos/".concat(b.name)),e.next=7,a.put(b);case 7:return s=l.a.storage().ref().child("thumbnails/".concat(b.name)),e.next=10,s.put(p);case 10:return e.next=12,a.getDownloadURL();case 12:return c=e.sent,e.next=15,s.getDownloadURL();case 15:return o=e.sent,e.next=18,U.add({title:k,videoURL:c,thumbnailURL:o,poster:t.displayName,views:0,likes:0,index:n.length,createdAt:l.a.firestore.FieldValue.serverTimestamp()});case 18:L(!1),i(0);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"upload-video-page",children:[Object(j.jsx)("h1",{className:"upload-video-title",children:"Upload a new video to yuotube:"}),!b&&Object(j.jsx)("button",{className:"button select-file-button",onClick:function(){return s.current.click()},children:"Choose Video"}),!p&&Object(j.jsx)("button",{className:"button select-file-button",onClick:function(){return c.current.click()},children:"Choose Thumbnail"}),Object(j.jsx)("input",{className:"file-input",ref:s,onChange:function(e){var t=e.target.files[0];V(t.size)<10?(h(t),console.log("Added "+s.current.files[0].name+"!")):alert("Your files cannot be bigger than 10mb, yours was ".concat(V(t.size),"mb!"))},type:"file",accept:"video/*"}),Object(j.jsx)("input",{className:"file-input",ref:c,onChange:function(e){O(e.target.files[0])},type:"file",accept:"image/*"}),b&&p&&Object(j.jsx)("input",{className:"video-title-input",onChange:function(e){C(e.target.value)},type:"text",placeholder:"Video title"}),b&&p&&Object(j.jsx)("button",{className:"button post-video-button",onClick:P,children:"Post"}),S&&Object(j.jsxs)("div",{className:"uploading-video-modal",children:[Object(j.jsx)("div",{className:"loading-circle"}),Object(j.jsx)("p",{className:"uploading-video-text",children:"Uploading video..."})]})]})}function C(){var e=Object(b.a)(d),t=Object(r.a)(e,1)[0],n=Object(a.useState)(0),i=Object(r.a)(n,2),s=i[0],c=i[1],l=u.collection("videos"),m=Object(a.useState)([]),p=Object(r.a)(m,2),x=p[0],g=p[1],N=Object(a.useState)(null),C=Object(r.a)(N,2),w=C[0],y=C[1];return Object(a.useEffect)((function(){t&&l.get().then((function(e){for(var t=[],n=0;n<e.docs.length;n++)t.push(Object(o.a)({id:e.docs[n].id},e.docs[n].data()));g(t)}))}),[l]),Object(j.jsxs)("div",{className:"app",children:[t&&Object(j.jsx)(v,{setPage:c}),t?2===s?Object(j.jsx)(k,{user:t,videos:x,setPage:c}):1===s?Object(j.jsx)(f,{videoURL:x[w].videoURL,video:x[w]}):Object(j.jsx)(O,{videos:x,videoDocs:x,setPage:c,setCurrentVideoIndex:y}):Object(j.jsx)(h,{})]})}var w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))};c.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),w()}},[[33,1,2]]]);
//# sourceMappingURL=main.e729ad77.chunk.js.map