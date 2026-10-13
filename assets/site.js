/* moldinspectionboise.com — mobile menu + quote form */
(function(){
  var b=document.querySelector('.burger'),m=document.querySelector('.mob-menu');
  if(b&&m)b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
  document.querySelectorAll('form[data-ajax]').forEach(function(f){
    f.addEventListener('submit',function(e){
      if(f.action.indexOf('YOUR-EMAIL')>-1){e.preventDefault();alert('Form not configured yet — see README (FORM_ACTION). Please call instead.');return;}
      e.preventDefault();var btn=f.querySelector('button');btn.disabled=true;btn.textContent='Sending…';
      fetch(f.action.replace('formsubmit.co/','formsubmit.co/ajax/'),{method:'POST',headers:{'Accept':'application/json'},body:new FormData(f)})
        .then(function(r){if(!r.ok)throw 0;f.parentNode.classList.add('sent');if(window.gtag)gtag('event','generate_lead');})
        .catch(function(){f.submit();});
    });
  });
  document.querySelectorAll('a[href^="tel:"]').forEach(function(a){a.addEventListener('click',function(){if(window.gtag)gtag('event','phone_call_click');});});
})();
