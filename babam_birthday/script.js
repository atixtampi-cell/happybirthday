const $ = id => document.getElementById(id);

// Compliments
const compliments = [
  "you are, unfortunately, very lovable.",
  "10/10 good boy. no further questions.",
  "your bebem thinks you're pretty cool. ♡",
  "you make ordinary days feel less ordinary.",
  "i'd pick you again. every time.",
  "scooby's favorite human. probably."
];
$('complimentBtn').addEventListener('click', () => {
  $('compliment').textContent = compliments[Math.floor(Math.random()*compliments.length)];
});

// Lore modal
const modal = $('modal');
document.querySelectorAll('.pill').forEach(btn => btn.addEventListener('click', () => {
  $('modalTitle').textContent = btn.dataset.title;
  $('modalText').textContent = btn.dataset.text;
  modal.classList.remove('hidden');
}));
$('closeModal').addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', e => { if(e.target === modal) modal.classList.add('hidden'); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') modal.classList.add('hidden'); });

// Silly buttons
$('cryBtn').addEventListener('click', () => {
  $('buttonResult').textContent = 'RESULT: yes, dude cries over steam hehdhshdhs';
});
$('goodBtn').addEventListener('click', () => {
  $('buttonResult').textContent = 'RESULT: hmmmmmmmm, oh fineee youre my good boy. ♡';
});
$('loveBtn').addEventListener('click', () => {
  $('buttonResult').textContent = 'RESULT: bebem loves babam. only babam, okie? isa.';
  burstHearts();
});

// Secret message
$('secretBtn').addEventListener('click', () => {
  $('secretMessage').classList.remove('hidden');
  $('secretBtn').textContent = 'okay... you found it ♡';
});

// Birthday letter
$('openLetter').addEventListener('click', () => {
  $('lock').classList.add('hidden');
  $('letterCard').classList.remove('hidden');
  $('letterCard').scrollIntoView({behavior:'smooth', block:'center'});
  burstHearts();
  showToast('letter unlocked ♡');
});

function burstHearts(){
  for(let i=0;i<18;i++){
    const h=document.createElement('span');
    h.textContent=Math.random()>.25?'♡':'✦';
    h.style.position='fixed'; h.style.left=(45+Math.random()*10)+'vw'; h.style.top='60vh';
    h.style.color=Math.random()>.3?'#4c86d9':'#d49bb5'; h.style.fontSize=(14+Math.random()*18)+'px';
    h.style.pointerEvents='none'; h.style.zIndex=70; h.style.transition='transform 1.8s ease, opacity 1.8s ease';
    document.body.appendChild(h);
    requestAnimationFrame(()=>{h.style.transform=`translate(${(Math.random()-.5)*260}px,-${180+Math.random()*260}px) rotate(${Math.random()*100-50}deg)`;h.style.opacity='0'});
    setTimeout(()=>h.remove(),1900);
  }
}
function showToast(text){const t=$('toast');t.textContent=text;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}

function showBabyMessage() {
    const message = document.getElementById("babySecret");

    message.hidden = !message.hidden;
}


const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

music.volume = 0.35;

musicButton.addEventListener("click", async () => {
    if (music.paused) {
        try {
            await music.play();
            musicButton.textContent = "♫ PAUSE OUR SONG";
        } catch (error) {
            musicButton.textContent = "Oops! Try playing again ♡";
        }
    } else {
        music.pause();
        musicButton.textContent = "♫ PLAY OUR SONG";
    }
});

