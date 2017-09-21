var express = require('express'),
    app = express();
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),

    Post = require('./models/post');

var posts =
  [{
    title: 'WAS I GOING CRAZY? THE DREADED “P” WORD AFTER GIVING BIRTH',
    image: 'https://source.unsplash.com/B0AOKkybaKM',
    content: '<h2><strong>Happily Ever After?</strong></h2><p>Not everyone gets to experience the “happily ever after” fairy tale that books, friends, family, and movies seem to depict after giving birth. Too often in our society women especially are expected to paint a picture perfect world where our houses are immaculate, our appearances are flawless, and our lives appear picture perfect with a doting husband, 2.5 children, and living in a beautiful home with a white picket fence. Problems? Not me. Chaos? Never. Imperfections? They don’t exist.</p><p>For too long I held myself to those standards and kept my downfalls secretly locked tight, pushed far away from anyone else’s view. But with my second child’s birth, I quickly learned I couldn’t do that anymore as I began to sink lower and lower into a black hole with no hope of climbing out. This innate feeling of perfectionism absolutely made me more susceptible to experiencing the dreaded “P” word: postpartum anxiety.  These were some of the darkest, intensely terrifying feelings I have ever experienced, and I still fight it daily 14 months later.</p><h2><strong>Postpartum What?</strong></h2><p>Postpartum depression has a lot more exposure thanks to actresses who have shared their struggles. To be honest, I didn’t even know postpartum anxiety was a real thing until it happened to me, and being a Licensed Clinical Social Worker, that’s an embarrassing thing to admit. But hey, it’s real. And it’s terrifying.</p><p>I’m no stranger to anxiety. In fact, I’ve struggled with it for as long as I can remember. But after many, many trials (and many, many tears), I finally felt I had a good hold on it and was able to keep it in check. Actually, my experience with anxiety really pushed me to go in the field of psychology and social work so that I could help others in ways I wasn’t helped. My anxiety was my kryptonite; it kept trying to knock me down and tell me I wouldn’t succeed, but I was able to take that and turn it into something positive. I wasn’t going to let it control me or keep me from fulfilling my dreams.</p><h2><strong>The Operating Room</strong></h2><p>I arrived for my scheduled C-section that morning after getting no sleep the night before, I just chalked it up to my anxiety trying to rear its ugly head, and I tried to get it in check. And I did, for a short bit, until I went in to get my spinal block. There I sat, alone, on a cold metal table, in a bright, sterile environment, telling myself that this would all be worth it when I hear my baby boy’s cry and see his sweet face for the first time. I told myself, “Get yourself together! You’ve done this before and you survived.” And that worked… until there were complications with the spinal block. It just wasn’t working.</p><p>I felt that sharp cold needle go in my spine and felt electric shocks travel through my body. She asked me if I could still feel it, and I could. So she said she would try again. I braced myself and again told myself to relax. I wasn’t making it any easier and was probably causing the problem. So she tried again. And again, I felt everything. It wasn’t working. I began to panic. I felt dizzy. Hot. Felt the walls were closing in on me. I wanted to run from the room and find my husband. But I took a deep breath and she tried again. This went on for what seemed like an eternity, but it really ended up being about 45 minutes to an hour of retrying. At this point, I was in a state of panic. I thought I was going to die. But she finally got it to work.</p><h2><strong>The Birth….Finally!</strong></h2><p>My husband came in at this time, and I was completely exhausted from that traumatic experience. I hadn’t even had the baby yet! I had to ask for medication to calm me down. I welcomed the sweet reprieve from the anxiety. I finally heard my sweet baby’s cry, saw his face, and knew it was worth every second. I silently told myself that again, I worked myself up for nothing. But that wasn’t the end of the anxiety…It was just the beginning.</p><h2><strong>The Hospital Room and My Unwelcome Guest: Anxiety</strong></h2><p>They wheeled me into my room and brought me the baby. I tried to feed him, and he wouldn’t latch. I began to get frustrated, worried, and my brain began spiraling out of control again. A flood of negative thoughts consumed me. I was a failure. I had no business having another baby. I refuse to give up and give him formula. I’m broken. Defective. It just kept coming. The nurse assured me that I just needed some rest. So I attempted to sleep to no avail. I was already sleep deprived from not being able to sleep the night before. The medications they gave me made me extremely drowsy, but at the same time I was itching all over and couldn’t fall asleep. This vicious cycle went on the entire time I was there.</p><p>The whole time I was in the hospital was an anxiety ridden blur that I honestly can’t even remember fully.  This was nothing like <a class="blog-post__link" href="http://google.com">my first birth</a>. What was wrong with me? The breastfeeding continued to be a struggle. I tried everything. I had the lactation specialist come in several times each day. She was probably getting sick of being called to my room, but I didn’t care. I wouldn’t go to sleep because I thought my baby was going to die in his sleep, and I couldn’t let that happen. Every single moment was fueled by increasing anxiety.</p><h2><strong>Panic Attacks How I Did Not Miss You!</strong></h2><p>No one seemed to be concerned with the intensity of my anxiety and how it was affecting me and by extension the baby,  which made me furious. Why didn’t anyone else see how serious this was? Was I going crazy? And the second night, I felt that I actually was. I began to have a full fledged panic attack. I hadn’t had one in years. And it came back with a vengeance.</p><p>I began to pull on my hair. Claw at my face. Scream. Rock back and forth. Began Hyperventilating. I thought I was absolutely losing my mind. I always heard my mom jokingly say that she was going to have a nervous breakdown, but at this moment I didn’t find it funny; I thought I really was. It was terrifying. I then began to worry that they were going to lock me away in the psych ward, and I would never see my baby again. I began to feel guilty that I ruined my older son’s childhood by having another baby and then not able to get myself together and lose my mind. I was completely losing it. What was happening to me?</p><h2><strong>Naivete in the Least Expected Places</strong></h2><p>I am a therapist, damn it!  This can’t happen to me, I know better! How naive I was. No one is invincible, no one is excluded from postpartum. That is when I realized what was happening. That dreaded P word. Postpartum anxiety. They kept giving me the postpartum depression screening tests, and I rolled my eyes every single time they did. I wasn’t stupid. I knew what they were looking for. I’ve administered these same screeners before. Why weren’t they asking me about the intense anxiety? Why weren’t they trying to help me?</p><p>I became angry. My family came in from out of town and I got so angry and frustrated at the lack of sleep, trouble breastfeeding, lack of understanding that I made them all leave.I was so overwhelmed. I felt so ashamed. I couldn’t show anyone this vulnerable side of me, I worked so hard to hide my imperfections.  And again, cue the vicious cycle of negative thoughts that I couldn’t shut off. The baby was inconsolable. He was starving. I was failing him. I had to put my pride to the side and consent to supplemental formula feedings. Once I did, and I saw how hungrily he drank it up, I felt awful. I let my own selfishness get in the way of what he needed. I vowed to not let this happen ever again.</p><h2><strong>Asking For Help</strong></h2><p>The baby lost more than 10% of his body weight while we were there. We had to go to the pediatrician the day after we were released to make sure he was not losing anymore. When we got home, the anxiety followed. I couldn’t sleep. I was shaking, I couldn’t eat. I was completely exhausted. I tried to go to sleep, but I had terrifying images of dying and not waking up. Of the baby dying while I was sleeping. Of waking up insane. It was the darkest time I’ve ever experienced and I’ll remember it to my dying day.</p><p>I put a call in to my doctor and asked her for something to help me. I couldn’t do this anymore. She prescribed me some medicine, and I was scared to take it. But I did. And I slept. I slowly began to replenish. My husband kept reminding me I wasn’t alone, that we were a team and that he was there to help. I have an annoying habit of always trying to carry everything on my own shoulders and really suck at asking for help. But I accepted it this time. I had to for the sake of my baby and my own sanity. So my husband clocked a lot of awake time with the baby while I caught up on my sleep. He was my rock. I slowly started to feel a bit better, but anxiety still had its claws in me. I just couldn’t shake it. I was still bound and determined to breastfeed, but I finally came to terms with supplementing with formula. The baby was thriving, he gained all his birth weight back and then some in the first few days we were home.</p><h2><strong>The Milk Supply Drama Continues</strong></h2><p>I began reading and researching all the ways I could increase my milk supply. I tried it all: lactation cookies, fenugreek supplements, brewers yeast, increase in water. You name it, I tried it. They all helped minimally. He was a ravenous baby; never seemed satisfied, but we worked with what we had. I was at peace with knowing that no matter what source his nutrition was coming from, it didn’t matter, as long as he was thriving. Fast forward to when I had to send him to daycare. I could go on forever about the anxiety that followed with that one but that is for another time. I quickly became good friends with the woman who was watching him, and we talked often about the struggles of the milk supply.</p><h2><strong>Enter Essential Oils</strong></h2><p>One day when I picked him up, she asked me if I had ever tried essential oils. I had heard about them, Heck, I even had a few cheap ones at home that I played around with for diffusing for restful sleep. She told me that she had made me a roller of some oils that were supposed to be good for boosting milk supply, and asked if I was interested. I was willing to try anything. So I took the roller and used it like she told me to. I’m pretty open to try new things, even if they seem controversial or out of the box. In fact, I welcome them. I giggled to myself after I used it because I thought I smelled like black licorice. I would have taken a bath in the stuff if it helped me overcome this obstacle.</p><p>I pumped shortly after I applied it. My milk supply had more than doubled!  Surely this is just a fluke, I thought. So I applied it again later when the baby was ready to feed. And he seemed satiated. What the heck? How could a few oils do this? I was hooked. I began fervently researching oils. I was bound and determined to learn as much as I could and discover other ways to naturally address every aspect in my life. This was just the beginning of my journey to letting go of the old and embarking on the journey of a new healthy and holistic lifestyle.  I was bound and determined to defeat my old nemesis and gain control back of my life.</p>'
  }];

mongoose.connect('mongodb://localhost/oil_my_life_blog', {useMongoClient: true});
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname +'/public')); // Allow access to assets

app.get('/', function(req, res) {
  Post.find({}, function(err, allPosts) {
    if (err) {
      console.log(err.toString());
    } else {
      res.render('landing', {posts: allPosts});
    }
  });
});

// ================
// Posts Routes
// ================

// Posts INDEX
app.get('/posts', function(req, res) {
  Post.find({}, function(err, allPosts) {
    if (err) {
      console.log(err.toString());
    } else {
      res.render('posts/index', {posts: allPosts});
    }
  });
});

// Posts CREATE
app.post('/posts', function(req, res) {
  var title = req.body.title;
  var image = req.body.image;
  var content = req.body.content;
  var newPost = {title: title, image: image, content: content};

  Post.create(newPost, function(err, newPost) {
    if (err) {
      console.log(err.toString());
    } else {
      console.log(newPost);
    }
  });
  res.redirect('/posts');
});

// Posts NEW
app.get('/posts/new', function(req, res) {
  res.render('posts/new');
});

// Posts SHOW
app.get('/posts/:id', function(req, res) {
  Post.findById(req.params.id, function(err, foundPost) {
    if (err) {
      console.log(err.toString());
    } else {
      res.render('posts/show', {post: foundPost});
    }
  });
});

app.listen(5000, process.env.IP, function() {
  console.log('Server started.');
});
