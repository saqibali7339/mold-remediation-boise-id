/* moldinspectionboise.com — mobile menu + quote form */
(function(){
  var b=document.querySelector('.burger'),m=document.querySelector('.mob-menu'),nav=document.querySelector('.nav');
  /* Build the mobile menu from the desktop nav (once) so links always match */
  if(m&&nav&&!m.querySelector('a')){
    nav.querySelectorAll('.nav-item').forEach(function(item){
      var nl=item.querySelector('.nl');
      var group=nl?nl.textContent.replace(/[\u25BE\u25B8]/g,'').trim():'';
      var drop=item.querySelector('.drop');
      if(!drop)return;
      var direct=[];
      Array.prototype.forEach.call(drop.children,function(child){
        if(child.tagName==='A')direct.push(child);
      });
      if(direct.length&&group){
        var h=document.createElement('h5');h.textContent=group;m.appendChild(h);
      }
      direct.forEach(function(a){m.appendChild(a.cloneNode(true));});
      drop.querySelectorAll('.has-sub').forEach(function(sub){
        var sl=sub.querySelector('.sub-nl');
        var city=sl?sl.textContent.replace(/[\u25BE\u25B8]/g,'').trim():'';
        var sh=document.createElement('h5');
        sh.textContent=(group?group+' \u2014 ':'')+city;
        m.appendChild(sh);
        sub.querySelectorAll('.sub a').forEach(function(a){m.appendChild(a.cloneNode(true));});
      });
    });
  }
  if(b&&m)b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
  document.querySelectorAll('form[data-ajax]').forEach(function(f){
    f.addEventListener('submit',function(e){
      if(f.action.indexOf('YOUR-EMAIL')>-1){e.preventDefault();alert('Form not configured yet \u2014 see README (FORM_ACTION). Please call instead.');return;}
      e.preventDefault();var btn=f.querySelector('button');btn.disabled=true;btn.textContent='Sending\u2026';
      fetch(f.action.replace('formsubmit.co/','formsubmit.co/ajax/'),{method:'POST',headers:{'Accept':'application/json'},body:new FormData(f)})
        .then(function(r){if(!r.ok)throw 0;f.parentNode.classList.add('sent');if(window.gtag)gtag('event','generate_lead');})
        .catch(function(){f.submit();});
    });
  });
  document.querySelectorAll('a[href^="tel:"]').forEach(function(a){a.addEventListener('click',function(){if(window.gtag)gtag('event','phone_call_click');});});
})();
